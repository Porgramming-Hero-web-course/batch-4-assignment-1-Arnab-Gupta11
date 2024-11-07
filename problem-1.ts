{
  //Problem-1
  function sumArray(arr: number[]): number {
    let sum: number = 0;
    arr.forEach((value: number) => (sum += value));
    return sum;
  }
}
