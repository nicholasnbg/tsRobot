import { Table } from "../models/table";
import { Position } from "../models/position";
import {
  CompassBearing,
  validBearings,
} from "../models/compassBearing";

const moveForward = (table: Table, position: Position): Position => {
  const correctBearing: CompassBearing = validBearings[position.bearing.direction]
  const { x: xMovement, y: yMovement } = correctBearing;
  const newX = position.x + xMovement;
  const newY = position.y + yMovement;

  const newPosition = {
        x: newX,
        y: newY,
        bearing: position.bearing,
      }

  return isValidPosition(table, newPosition) ? newPosition : position

};

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

export { isValidPosition, moveForward };
