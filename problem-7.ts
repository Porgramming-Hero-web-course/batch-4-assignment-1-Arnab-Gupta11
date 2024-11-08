{
  //Problem-7
  class Car {
    constructor(public make: string, public model: string, public year: number) {}
    getCarAge(): string {
      const currentYear = new Date().getFullYear();
      let age = currentYear - this.year;
      return `${age} (assuming current year is ${currentYear})`;
    }
  }
}
