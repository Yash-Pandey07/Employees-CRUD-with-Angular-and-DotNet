import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{

//   employees:  Employee[]= [
//       {
//           id: 'E001',
//           name: 'John Smith',
//           email: 'john.smith@example.com',
//           phone: 1234567890,
//           salary: 50000,
//           department: 'Marketing'
//       },
//       {
//           id: 'E002',
//           name: 'Jane Doe',
//           email: 'jane.doe@example.com',
//           phone: 2345678901,
//           salary: 60000,
//           department: 'Finance'
//       },
//       {
//           id: 'E003',
//           name: 'Bob Johnson',
//           email: 'bob.johnson@example.com',
//           phone: 3456789012,
//           salary: 70000,
//           department: 'IT'
//       },
//       {
//           id: "E004",
//           name: "Emily Chen",
//           email: "emily.chen@example.com",
//           phone: 4567890123,
//           salary: 80000,
//           department: "Sales"
//       },
//       {
//           id: "E005",
//           name: "Tom Wilson",
//           email: "tom.wilson@example.com",
//           phone: 5678901234,
//           salary: 90000,
//           department: "HR"
//       }
//   ];
    employees:  Employee[]=[];
  constructor(private employeesService:EmployeesService){}

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe({
        next:(employees)=>{
            this.employees=employees;
            console.log(employees);
        },
        error:(response)=>{
            console.log(response);
        }
    })
  }

}
