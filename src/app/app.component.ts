import { Component } from '@angular/core';

interface Employee {
  EmployeeId: string;
  EmployeeNumber: string;
  FirstName: string;
  LastName: string;
  Birthday: string;
  Gender: string;
  Picture: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ITEWT MIDTERM EXAM';
  employees: Employee[] = [
    { EmployeeId: "22", EmployeeNumber: "22", FirstName: "John", LastName: "Doe", Birthday: "2002-01-01", Gender: "M", Picture: "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"},

  ];
  model: Partial<Employee> = {};
  model2: Partial<Employee> = {};
  msg = "";

  addEmployee(): void {
    this.employees.push(this.model as Employee);
    this.model = {};
    this.msg = "The record has been successfully added.";
  }

  deleteEmployee(i: number): void {
    this.employees.splice(i, 1);
    this.msg = "The record has been successfully deleted.";
  }

  myValue: number;
  editEmployee(k: number): void {
    this.model2 = { ...this.employees[k] };
    this.myValue = k;
  }

  updateEmployee(): void {
    const k = this.myValue;
    for (let i = 0; i < this.employees.length; i++) {
      if (i === k) {
        this.employees[i] = this.model2 as Employee;
        this.model2 = {};
        this.msg = "The record has been successfully updated.";
      }
    }
  }

  clickMe(): void {
    this.msg = "";
  }
}
