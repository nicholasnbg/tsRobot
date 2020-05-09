import { Table } from "../models/table";
import { Position } from "../models/position";
import {
  CompassBearing,
  Direction,
  compassArray,
} from "../models/compassBearing";

const moveForward = (table: Table, position: Position): Position => {
  //needs to test if the result of adding the x or y will bump into the table or not
  //before then checking facing direction and moving that way

  const bearingIndex = compassArray.findIndex(
    (bearing: CompassBearing) =>
      bearing.direction === position.bearing.direction
  );
  const correctBearing = compassArray[bearingIndex];
  const { x: xMovement, y: yMovement } = correctBearing;
  const newX = position.x + xMovement;
  const newY = position.y + yMovement;
  if (newX <= table.width && newY <= table.height && newX > 0 && newY > 0) {
    const newPosition = {
      x: newX,
      y: newY,
      bearing: position.bearing,
    };
    return newPosition;
  } else {
    return position;
  }
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
