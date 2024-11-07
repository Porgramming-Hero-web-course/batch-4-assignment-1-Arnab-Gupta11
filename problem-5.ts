{
  //Problem-5
  function getProperty<T, U extends keyof T>(obj: T, key: U): T[U] {
    return obj[key];
  }
}
