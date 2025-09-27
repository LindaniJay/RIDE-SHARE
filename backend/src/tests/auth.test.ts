import { describe, it, expect, beforeAll, afterAll } from "vitest";
import request from "supertest";
import app from "../src/app";

describe("Auth API", () => {
  it("should register a new user", async () => {
    const userData = {
      email: "test@example.com",
      password: "password123",
      firstName: "Test",
      lastName: "User",
      role: "renter",
    };

    const response = await request(app)
      .post("/api/auth/register")
      .send(userData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("user");
    expect(response.body).toHaveProperty("accessToken");
  });

  it("should login with valid credentials", async () => {
    const loginData = {
      email: "test@example.com",
      password: "password123",
    };

    const response = await request(app)
      .post("/api/auth/login")
      .send(loginData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("user");
    expect(response.body).toHaveProperty("accessToken");
  });
});
