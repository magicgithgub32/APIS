const request = require("supertest");
const app = require("./app");
const {
  getAllTechnologies,
  getTechnologyById,
} = require("./repositories/technology");

jest.mock("./config/db", () => null);
jest.mock("./repositories/technology");

describe("GET /api/not-found", () => {
  it('responds with a 404 and "Not found" message', async () => {
    const response = await request(app).get("/api/not-found");

    expect(response.status).toBe(404);
    expect(response.body).toStrictEqual({ data: "Not found" });
  });
});

describe("GET /api/technologies", () => {
  it("responds with a status 200 and an empty array of technologies", async () => {
    getAllTechnologies.mockImplementation(() => []);

    const response = await request(app).get("/api/technologies");

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({ data: [] });
  });
});

describe("GET /api/technologies/:id", () => {
  beforeAll(() => {
    getTechnologyById.mockImplementation((id) => {
      if (id === "valid_id") {
        return { name: "JavaScript", docs: "docs_link_url", learnt: false };
      } else {
        throw new Error();
      }
    });
  });
  it("responds with a 404 status if not valid id is sent", async () => {
    const response = await request(app).get("/api/technologies/not_valid_id");
    expect(response.status).toBe(404);
    expect(response.body).toStrictEqual({ data: "Element not found" });
  });

  it("responds with a 200 status and the technology from DB", async () => {
    const response = await request(app).get("/api/technologies/valid_id");
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
      data: {
        name: "JavaScript",
        docs: "docs_link_url",
        learnt: false,
      },
    });
  });
});
