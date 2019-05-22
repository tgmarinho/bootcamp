const request = require("supertest");
const app = require("../../src/app");
const truncate = require("../utils/truncate");
const { User } = require("../../src/app/models");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to authenticate with valid credentials", async () => {
    const user = await User.create({
      name: "Thiago Marinho",
      email: "tgmarinho@gmail.com",
      password: "123456"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123456"
      });

    expect(response.status).toBe(200);
  });

  it("should be able to authenticate with valid credentials", async () => {
    const user = await User.create({
      name: "Thiago Marinho",
      email: "tgmarinho@gmail.com",
      password: "123456"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "12321321321312"
      });

    expect(response.status).toBe(401);
  });

  it("should return jwt token when authenticated", async () => {
    const user = await User.create({
      name: "Thiago Marinho",
      email: "tgmarinho@gmail.com",
      password: "123456"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: user.password
      });

    expect(response.body).toHaveProperty("token");
  });

  it("shoud be able to access private routes when authtenticated", async () => {
    const user = await User.create({
      name: "Thiago Marinho",
      email: "tgmarinho@gmail.com",
      password: "123456"
    });

    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(200);
  });

  it("shoud not be able to access private routes when not authtenticated", async () => {
    const response = await request(app).get("/dashboard");

    expect(response.status).toBe(401);
  });
});
