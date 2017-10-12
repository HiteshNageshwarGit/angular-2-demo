import { Component } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    //styles: ['table { color: #369; font-family: Arial, Helvetica, sans-serif; font-size: large; border-collapse: collapse;}', 'td {border: 1px solid black; }'] // Component level style
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent {
    employee: IEmployee;
    statusMessage: string = 'Loading data. Please wait...';

    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router)
    { }


    onBackButtonClick(): void {
        this._router.navigate(['/employees']);
    } 

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code']; // from route parameter in angular routing
        console.log("EMP code - " + empCode);
        this._employeeService.getEmployeeByCode(empCode)
            .subscribe((employeeData) => {
                if (employeeData == null) {
                    this.statusMessage =
                        'Employee with the specified Employee Code does not exist';
                }
                else {
                    this.employee = employeeData;
                    console.log(this.employee);
                }
            },
            (error) => {
                this.statusMessage =
                    'Problem with the service. Please try again after sometime';
                console.error(error);
            });
    }

    //firstName: string = "hitesh";
    //lastName: string = "nageshwar";
    //gender: string = "male";
    //age: number = 30;

    columnSpan: number = 2;

    showDetails: boolean = false;
    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}