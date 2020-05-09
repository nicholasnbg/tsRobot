import { isValidPosition, moveForward } from "./movement";
import { Table } from "../models/table";
import { Position } from "../models/position";
import {
  CompassBearing,
  validBearings,
  compassArray,
} from "../models/compassBearing";

describe("is the position valid", () => {
  test("returns true for a valid position", () => {
    const table: Table = { height: 5, width: 5 };
    const position: Position = {
      x: 2,
      y: 4,
      bearing: validBearings.north,
    };
    const result = isValidPosition(table, position);
    expect(result).toEqual(true);
  });

  test("returns false if invalid position", () => {
    const table: Table = { height: 5, width: 5 };
    const position: Position = {
      x: 7,
      y: -4,
      bearing: validBearings.north,
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
      bearing: validBearings.west,
    };
    const result = moveForward(table, position);
    expect(result).toEqual({
      x: 1,
      y: 4,
      bearing: validBearings.west,
    });
  });
  test("returns same location if invalid move", () => {
    const table: Table = { height: 5, width: 5 };
    const position: Position = {
      x: 2,
      y: 5,
      bearing: validBearings.north,
    };
    const result = moveForward(table, position);
    expect(result).toEqual({
      x: 2,
      y: 5,
      bearing: validBearings.north,
    });
  });
});

