{
  //Problem-2
  function removeDuplicates(arr: number[]): number[] {
    const removeDuplicateArray: number[] = arr.filter((value: number, index: number): boolean => {
      return arr.indexOf(value) === index;
    });
    return removeDuplicateArray;
  }
}
