interface CompassBearing {
  x: number;
  y: number;
  direction: Direction;
}

enum Direction {
  North = "north",
  South = "south",
  East = "east",
  West = "west",
}
const { North, South, East, West } = Direction;
const compassArray: CompassBearing[] = [
  { direction: North, x: 0, y: 1 },
  { direction: East, x: 1, y: 0 },
  { direction: South, x: 0, y: -1 },
  { direction: West, x: -1, y: 0 },
];

export { CompassBearing, Direction, compassArray };
