# 📦 hot-sass Documentation

`hot-sass` is a **zero-configuration** SCSS/SASS compiler for vanilla JavaScript projects. It lets you use SCSS/SASS files directly in HTML using `<link>` tags. It fetches, compiles, and injects the resulting CSS into your page — **no build tools required**.

Perfect for quick prototypes, demos, or small projects where you want to use SCSS without complex setups.

## 🚀 Features

- **Zero Config:** Drop in a script and link your SCSS files — done.
- **Live Compile:** Fetches and compiles SCSS/SASS files in the browser.
- **No Build Tools:** No npm, no Webpack, no bundlers needed.
- **Works Anywhere:** Works in plain HTML files or even inside frameworks.
- **CDN Ready:** Load directly from jsDelivr.

## 📥 Installation

Add the script to your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/raiyanu/hot-sass@main/src/index.js" data-autorun></script>
```

---

## 📄 Usage

Example HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>hot-sass Example</title>
    <link rel="scss" href="styles/main.scss">
    <script src="https://cdn.jsdelivr.net/gh/raiyanu/hot-sass@main/src/index.js" data-autorun></script>
</head>
<body>
    <h1>Hello, hot-sass!</h1>
</body>
</html>
```

### What this does

- Finds all `<link rel="scss">` or `<link rel="sass">` tags.
- Fetches and compiles those files.
- Injects the compiled CSS into the page.

## ⚙️ Optional: Use a Custom Version of `sass.js`

By default, `hot-sass` loads `sass.js` from:

```
https://cdn.jsdelivr.net/npm/sass.js@latest/dist/sass.sync.js
```

If you want to **use a specific version** of `sass.js` or host your own file, you can provide a `sass-url` attribute to the script tag like this:

```html
<script src="https://cdn.jsdelivr.net/gh/raiyanu/hot-sass@main/src/index.js" 
        sass-url="https://cdn.jsdelivr.net/npm/sass.js@0.11.1/dist/sass.sync.js"
        data-autorun></script>
```

This allows full control over which version of `sass.js` is used.

## 📚 Manual Initialization (No `data-autorun`)

If you want to control when `hot-sass` runs (instead of automatically running), leave off `data-autorun` and call `HotSass()` manually:

```html
<script src="https://cdn.jsdelivr.net/gh/raiyanu/hot-sass@main/src/index.js"></script>
<script>
    HotSass();
</script>
```

## 🔗 Supported Link Tags

- `<link rel="scss" href="yourfile.scss">`
- `<link rel="sass" href="yourfile.sass">`

## ⚠️ Important Notes

- This is **best for development** or quick demos. In production, pre-compiling SCSS is faster.
- It works in modern browsers that support `fetch` and `Promise` (basically all recent browsers).
- If using files from a different origin (e.g., CDN-hosted SCSS), ensure **CORS headers** are configured correctly.

## 🐞 Troubleshooting

| Problem | Solution |
|---|---|
| SCSS file not found | Check the `href` path in your `<link>` tag. |
| Compilation fails | Check the browser console for error messages. |
| Nothing happens | Did you forget `data-autorun` or the manual `HotSass()` call? |
| Wrong Sass.js version | Double-check your `sass-url` value if using a custom version. |

## 📜 Example with Specific Sass.js Version

```html
<link rel="scss" href="styles/main.scss">
<script src="https://cdn.jsdelivr.net/gh/raiyanu/hot-sass@main/src/index.js"
        sass-url="https://cdn.jsdelivr.net/npm/sass.js@0.11.1/dist/sass.sync.js"
        data-autorun></script>
```

## 📫 Author

Created by [raiyanu](https://github.com/raiyanu)  
GitHub: [https://github.com/raiyanu/hot-sass](https://github.com/raiyanu/hot-sass)

## License

This work is licensed under the Creative Commons Attribution 4.0 International (CC BY 4.0) License. To view a copy of this license, visit [http://creativecommons.org/licenses/by/4.0/](http://creativecommons.org/licenses/by/4.0/).
