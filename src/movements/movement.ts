import {
  Table,
  Position,
  Robot,
  robotPosition,
  tableParameter,
} from "../models/table";

const compassArray = [
  { direction: "north", x: 0, y: 1 },
  { direction: "east", x: 1, y: 0 },
  { direction: "south", x: 0, y: -1 },
  { direction: "west", x: -1, y: 0 },
];

robotPosition({ x: 2, y: 2, facing: "west" });

const moveForward = (table: Table, position: Position) => {
  const index = (e) => {
    e = position.facing;
  };
  console.log(compassArray.findIndex(index));
  console.log(12);
};

moveForward(tableParameter({ width: 5, height: 5 }), {
  x: 2,
  y: 2,
  facing: "west",
});

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
