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
      let area = Math.PI * radius * radius;
      return parseFloat(area.toFixed(2));
    } else {
      let area = shape.height * shape.width;
      return parseFloat(area.toFixed(2));
    }
  }
}
