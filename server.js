const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { join } = require('path')

const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const rootStaticFiles = [
            "/android-chrome-144x144.png",
            "/android-chrome-192x192.png",
            "/android-chrome-36x36.png",
            "/android-chrome-48x48.png",
            "/android-chrome-72x72.png",
            "/android-chrome-96x96.png",
            "/apple-touch-icon-114x114.png",
            "/apple-touch-icon-120x120.png",
            "/apple-touch-icon-144x144.png",
            "/apple-touch-icon-180x180.png",
            "/apple-touch-icon-57x57.png",
            "/apple-touch-icon-60x60.png",
            "/apple-touch-icon-72x72.png",
            "/apple-touch-icon-76x76.png",
            "/favicon-16x16.png",
            "/favicon-32x32.png",
            "/favicon-96x96.png",
            "/favicon.ico",
        ];
        if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
            const path = join(__dirname, "static", parsedUrl.pathname);
            app.serveStatic(req, res, path);
        } else {
            handle(req, res, parsedUrl);
        }
    }).listen(3000, (err) => {
        if (err) throw err
        console.log("> Ready on http://localhost:3000");
    });
});
