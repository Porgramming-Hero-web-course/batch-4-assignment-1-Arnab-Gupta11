{
  //Problem-4
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
  };
  type Shape = Circle | Rectangle;
  function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
      const radius = shape.radius;
      return 3.1416 * radius * radius;
    } else {
      return shape.height * shape.width;
    }
  }
}
