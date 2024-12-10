import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger';
import { NowPlaying } from "./api/NowPlaying";

const elysiaApp = new Elysia()
    .use(NowPlaying)

const swaggerEnabled = process.env.USE_SWAGGER === 'true';
if (swaggerEnabled) {
    elysiaApp.use(swagger());
}
elysiaApp.get("/", () => swaggerEnabled ? "Hey there! Check /swagger for docs" : "Hey there!");

const app = elysiaApp.listen(3000);

console.log(
    `🦊 FMstatus is running at ${app.server?.hostname}:${app.server?.port}`
);

export { app };
