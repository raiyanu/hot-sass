import terser from '@rollup/plugin-terser';

export default {
    input: "src/index.js",
    output: [
        {
            file: "dist/hot-sass.cjs.js",
            format: "cjs"
        },
        {
            file: "dist/hot-sass.esm.js",
            format: "esm"
        },
        {
            file: "dist/hot-sass.umd.js",
            format: "umd",
            name: "hotSass"
        },
        {
            file: "dist/hot-sass.umd.min.js",
            format: "umd",
            name: "hotSass",
            plugins: [terser()]
        }
    ]
};
