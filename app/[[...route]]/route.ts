import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono()

app.get("/", async (c) => {
  return c.json({ message: "Hello, World!" });
});

export const GET = handle(app);
export default app as never;