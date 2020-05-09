interface Table {
  width: number;
  height: number;
}

interface Position {
  x: number;
  y: number;
  facing: string;
}

interface Robot {
  position: Position;
}

const tableParameter = (options: Table): Table => {
  let width = options.width;
  let height = options.height;
  return {
    width,
    height,
  };
};

const robotPosition = (options: Position) => {
  let x = options.x;
  let y = options.y;
  let facing = options.facing;
};

const table = tableParameter({ width: 5, height: 5 });

export { Table, Position, Robot, robotPosition, tableParameter };

// position({ y, x, facing });

// Have to associate NSEW with directions or at least plus or minus on the x/y axis
// Should be able to change the size of the table just with the above code and the same robot should be able to traverse it the same way.
// I am thinking about how to get the code to work, not getting into a mind space of a programmer
