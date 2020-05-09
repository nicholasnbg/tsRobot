import { isValidPosition, moveForward } from "./movement.js";
import { Table, Position, Robot } from "../models/table.js";

describe("is the position valid", () => {
  test("returns true for a valid position", () => {
    const table: Table = { height: 5, width: 5 };
    const position: Position = { x: 2, y: 4, facing: "west" };
    const result = isValidPosition(table, position);
    expect(result).toEqual(true);
  });

  test("returns false if invalid position", () => {
    const table: Table = { height: 5, width: 5 };
    const position: Position = { x: 7, y: -4, facing: "west" };
    const result = isValidPosition(table, position);
    expect(result).toEqual(false);
  });
});

describe("move to the correct location", () => {
  test("returns certain location if movement ios correct", () => {
    const table: Table = { height: 5, width: 5 };
    const position: Position = { x: 2, y: 4, facing: "west" };
    const result = moveForward(table, position);
    expect(result).toEqual({ x: 1, y: 4, facing: "west" });
  });
});
