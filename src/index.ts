import express, { Request, Response, urlencoded } from "express";
import calculatorRouter from "./routers/calculator.router";

export const app = express();

app.use(urlencoded({extended: true}))

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the beginning of nothingness");
});

app.use("/calculator", calculatorRouter);

app.listen(2020, () => {
  console.log(`Server is running on port 2020`);
});
