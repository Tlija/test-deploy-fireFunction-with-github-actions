import { Request, Response } from "express";
import { firstFunctionHttp } from "../index";

describe("My first Test Cloud Function with Jest and Typescript", () => {
  test("Call the function firstFunctionHttp must retu 'test fireFunction'", () => {
    const req = {} as Request;
    const res = {
      send: jest.fn(),
    } as unknown as Response;

    firstFunctionHttp(req, res);

    expect(res.send).toHaveBeenCalledWith("test fireFunction");
  });
});
