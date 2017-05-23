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

            "/three/three.min.js",
            "/three/mmdparser.min.js",
            "/three/ammo.js",
            "/three/TGALoader.js",
            "/three/MMDLoader.js",
            "/three/OutlineEffect.js",
            "/three/CCDIKSolver.js",
            "/three/MMDPhysics.js",
            "/three/OrbitControls.js",
            "/three/Detector.js",
            "/three/stats.min.js",
            "/three/dat.gui.min.js",

            "/sabal_chan/index.html",
            "/sabal_chan/sabal_chan.pmx",
            "/sabal_chan/%E6%9C%8D.png",
            "/sabal_chan/%E4%BD%93.png",
            "/sabal_chan/%E9%AB%AA.png",
            "/sabal_chan/%E7%9B%AE.png",
            "/sabal_chan/%E9%A1%94.png",
            "/sabal_chan/%E3%83%A2%E3%83%BC%E3%83%95.png",
            "/sabal_chan/toon_yellow.bmp",
            "/sabal_chan/nekomimi_mikuv2.vmd",
            "/sabal_chan/sabal_chan.gif",
        ];
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS");
        res.setHeader("Access-Control-Max-Age", "-1");
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
