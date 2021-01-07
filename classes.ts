// Basic example:

class Vehicle {
  constructor(public color: string) {}

  protected startUp(): void {
    console.log('zZzZzZz');
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string, public model: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroOom');
  }

  public startDrivingProcess(): void {
    this.startUp();
    this.drive();
  }
}

const tesla = new Car(4, 'black', 'Model 3');
tesla.startDrivingProcess();


// **************************************** \\
//  Let us be more creative with it :)

//  Creating a class
abstract class Department {
  // Creating properties
  static year = 2021;
  protected employees: string[] = [];

// Creating constructor in a more elegant way
  constructor(protected readonly id: string, public name: string) {}

  // Creating methods
  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

//  Creating new classes which makes use of our previous class
class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('Please pass in a valid value!');
    
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) return this.instance;
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log(`Accounting Department ID: ${this.id}`);
  }

  addEmployee(name: string) {
    if (name === 'Dzenis' || name === '') return;
    this.employees.push(name);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }
}

// Messing around with it :)

const Dzenis = Department.createEmployee('Dzenis');
console.log(Dzenis, Department.year);

const dev = new ITDepartment('d1', ['Dzenis']);

dev.addEmployee('Dzenan');
dev.addEmployee('Dalila');

dev.describe();
dev.name = 'Whatever :)';
dev.printEmployeeInformation();

console.log(dev);

const mainAccounting = AccountingDepartment.getInstance();
const partnerAccounting = AccountingDepartment.getInstance();

console.log(mainAccounting, partnerAccounting);

mainAccounting.mostRecentReport = 'Data for the year-end report';
mainAccounting.addReport('Wait until we validate ...');
console.log(mainAccounting.mostRecentReport);

mainAccounting.addEmployee('Hamza');
mainAccounting.describe();
