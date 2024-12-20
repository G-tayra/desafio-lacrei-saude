const request = require("supertest");
const app = require("../src/app.js");

describe("Node.js App API Tests", () => {
  it("should return health status", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "healthy" });
  });

  it("should return a greeting message", async () => {
    const res = await request(app).post("/api/greet").send({ name: "Alice" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Hello, Alice!" });
  });

  it("should return default greeting when name is not provided", async () => {
    const res = await request(app).post("/api/greet").send({});
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Hello, World!" });
  });
});

