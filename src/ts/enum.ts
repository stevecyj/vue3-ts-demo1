{
  // 枚舉
  // 如果沒有給定值，則會從 0 開始
  // type Direction = "上" | "下" | "左" | "右";

  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }

  function changeDirection(direction: Direction) {
    console.log(direction);
  }

  changeDirection(Direction.Down)
}
