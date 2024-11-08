{
  function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    if (keys.length === 0) {
      return false;
    }
    return keys.every((key) => key in (obj as object));
  }
}
