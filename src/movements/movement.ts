import { Table, Position, Robot } from "../models/table";

const moveForward = () => {};

const isValidPosition = (table: Table, position: Position): boolean => {
  if (
    position.x <= table.width &&
    position.y <= table.height &&
    position.x > 0 &&
    position.y > 0
  ) {
    return true;
  } else {
    return false;
  }
};

export { isValidPosition };
