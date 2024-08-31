import express, { Request, Response } from "express";
import { globalErrorHandler } from "./common/middleware/globalErrorHandler";
import cookieParser from "cookie-parser";
import categoryRouter from "./category/category-router";


const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from order service service!" });
});

app.use("/categories", categoryRouter);
app.use(globalErrorHandler);

export default app;
