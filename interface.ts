interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `
    name: ${this.name},
    year: ${this.year},
    broken: ${this.broken}`;
  },
};

const oldFord = {
  name: "Ford",
  year: new Date(),
  broken: false,
  summary(): string {
    return `
    name: ${this.name},
    year: ${this.year},
    broken: ${this.broken}`;
  },
};

const printSummary = (item: Reportable): void => {
  //   console.log(`name of the car: ${item.name}`);
  //   console.log(`Year of make: ${item.year}`);
  //   console.log(`is it broken? ${item.broken}`);
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(oldFord);
