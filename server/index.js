const Koa = require("koa");
const Router = require("@koa/router")
const next = require("next")

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();


app.prepare().then(() => {
    const server = new Koa();
    const router = new Router();

    console.log("dev " + dev);

    router.get("/(.*)", async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
    });

    // router.all("/(.*)", async (ctx) => {
        //const {request} = ctx;
        //const {url, header, query} = request;
    // });

    server.use(router.routes());

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    })
})

