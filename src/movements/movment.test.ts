import { isValidPosition, moveForward } from "./movement";
import { Table } from "../models/table";
import { Position } from "../models/position";
import {
  CompassBearing,
  Direction,
  compassArray,
} from "../models/compassBearing";

describe("is the position valid", () => {
  test("returns true for a valid position", () => {
    const table: Table = { height: 5, width: 5 };
    const position: Position = {
      x: 2,
      y: 4,
      bearing: {
        x: 1,
        y: 1,
        direction: Direction.North,
      },
    };
    const result = isValidPosition(table, position);
    expect(result).toEqual(true);
  });

  test("returns false if invalid position", () => {
    const table: Table = { height: 5, width: 5 };
    const position: Position = {
      x: 7,
      y: -4,
      bearing: {
        x: 1,
        y: 1,
        direction: Direction.North,
      },
    };
    const result = isValidPosition(table, position);
    expect(result).toEqual(false);
  });
});

// TODO: come back to here and talk about dependency injection
describe("move to the correct location", () => {
  test("moves forward if possible", () => {
    const table: Table = { height: 5, width: 5 };
    const position: Position = {
      x: 2,
      y: 4,
      bearing: {
        x: -1,
        y: 0,
        direction: Direction.West,
      },
    };
    const result = moveForward(table, position);
    expect(result).toEqual({
      x: 1,
      y: 4,
      bearing: {
        x: -1,
        y: 0,
        direction: Direction.West,
      },
    });
  });
  test("returns same location", () => {
    const table: Table = { height: 5, width: 5 };
    const position: Position = {
      x: 2,
      y: 5,
      bearing: {
        x: 0,
        y: 1,
        direction: Direction.North,
      },
    };
    const result = moveForward(table, position);
    expect(result).toEqual({
      x: 2,
      y: 5,
      bearing: {
        x: 0,
        y: 1,
        direction: Direction.North,
      },
    });
  });
});

// describe("turn left or right based on commands", () => {
//   test("returns new facing direction based on left or right if correct", () => {
//     const table: Table = { height: 5, width: 5 };
//     const position: Position = { x: 2, y: 4, facing: "west" };
//     const result = moveForward(table, position);
//     expect(result).toEqual({ x: 1, y: 4, facing: "west" });
//   });
//   test("returns same location if movement is correct", () => {
//     const table: Table = { height: 5, width: 5 };
//     const position: Position = { x: 2, y: 5, facing: "north" };
//     const result = moveForward(table, position);
//     expect(result).toEqual({ x: 2, y: 5, facing: "north" });
//   });
// });
