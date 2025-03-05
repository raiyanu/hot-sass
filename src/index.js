function HotSass() {
    const dataUrl = document.currentScript?.getAttribute('sass-url');

    const scssLinks = document.querySelectorAll('link[rel="scss"], link[rel="sass"]');

    if (scssLinks.length === 0) return;

    function loadSassJS() {
        return new Promise((resolve, reject) => {
            if (window.Sass) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.src = dataUrl ? dataUrl : 'https://cdn.jsdelivr.net/npm/sass.js@latest/dist/sass.sync.js';
            script.onload = resolve;
            script.onerror = () => reject(new Error('Failed to load sass.js'));
            document.head.appendChild(script);
        });
    }

    function fetchAndCompileSCSS(href) {
        return fetch(href)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load ${href}`);
                return response.text();
            })
            .then(scss => new Promise((resolve) => {
                Sass.compile(scss, result => resolve(result.text));  // Now works!
            }));
    }

    loadSassJS().then(() => {
        return Promise.all(
            Array.from(scssLinks).map(link => fetchAndCompileSCSS(link.href))
        );
    }).then(cssArray => {
        const style = document.createElement('style');
        style.innerHTML = cssArray.join('\n');
        document.head.appendChild(style);
    }).catch(err => {
        console.error('SCSS Loader Error:', err);
    });
}

const autorun = document.currentScript?.hasAttribute('data-autorun');
if (autorun) {
    HotSass();
}