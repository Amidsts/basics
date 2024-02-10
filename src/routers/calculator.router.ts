import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const { a, b } = req.query;
  let sum = Number(a) + Number(b);

  res.status(200).send({ result: `sum: ${sum}` });
});

const calculatorRouter = router;
export default calculatorRouter;
