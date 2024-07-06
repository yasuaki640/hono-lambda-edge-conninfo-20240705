import { Context, Hono } from "hono";
import { CloudFrontEdgeEvent, handle } from "hono/lambda-edge";
import { GetConnInfo } from "hono/dist/types/helper/conninfo";

export const getConnInfo: GetConnInfo = (
  c: Context<{
    Bindings: {
      event: CloudFrontEdgeEvent;
    };
  }>,
) => {
  return {
    remote: {
      address: c.env.event.Records[0].cf.request.clientIp,
    },
  };
};

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono on Lambda@Edge!"));
app.get("/context", (c) => c.json(c));
app.get("/ip", (c) => {
  const { remote } = getConnInfo(c);
  return c.text(`Your IP address is ${remote.address}`);
});

export const handler = handle(app);
