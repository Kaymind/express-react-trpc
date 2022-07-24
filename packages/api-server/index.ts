import express from "express";
import * as trpcExpress from '@trpc/server/adapters/express'
import cors from 'cors'
import { appRouter } from "./routers/appRouter";

export type AppRouter = typeof appRouter;

const app = express();
const port = 8080;

app.use(cors())

app.use('/trpc', trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext: () => null
}))

app.listen(port, () => {
  console.log(`api-server listening at http://localhost:${port}`);
});
