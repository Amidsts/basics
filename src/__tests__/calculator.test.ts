import request from "supertest";
import { app } from "../index";

describe("GET /calculator", () => {
  it("should do basic addition", async () => {
    const res = await request(app).get("/calculator?a=37&b=13").send();

    const { result } = res.body;
    expect(typeof result).toBe("string");
    expect(res.status).toBe(200);
  });
});
