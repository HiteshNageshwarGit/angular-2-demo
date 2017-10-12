"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import OnInit Life Cycle Hook interface
var core_1 = require("@angular/core");
// Import EmployeeService
var employee_service_1 = require("./employee.service");
var userPreferences_service_1 = require("./userPreferences.service");
var EmployeeListComponent = (function () {
    //constructor() {
    //    this.employees = [
    //        {
    //            code: 'emp101', name: 'Tom', gender: 'Male',
    //            annualSalary: 5500, dateOfBirth: '06/25/1988'
    //        },
    //        {
    //            code: 'emp102', name: 'Alex', gender: 'Male',
    //            annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    //        },
    //        {
    //            code: 'emp103', name: 'Mike', gender: 'Male',
    //            annualSalary: 5900, dateOfBirth: '12/8/1979'
    //        },
    //        {
    //            code: 'emp104', name: 'Mary', gender: 'Female',
    //            annualSalary: 6500.826, dateOfBirth: '10/14/1980'
    //        },
    //        {
    //            code: 'emp105', name: 'Nancy', gender: 'Female',
    //            annualSalary: 6700.826, dateOfBirth: '5/11/1982'
    //        },
    //    ];
    //}
    // Inject EmployeeService using the constructor
    // The private variable _employeeService which points to
    // EmployeeService singelton instance is then available
    // throughout this class
    //constructor(private _employeeService: EmployeeService) {
    //    //this.employees = this._employeeService.getEmployees();
    //}
    //private _userPreferencesService: UserPreferencesService;
    //constructor(private _employeeService: EmployeeService) {
    //    this._userPreferencesService = new UserPreferencesService();
    //}
    function EmployeeListComponent(_employeeService, _userPreferencesService) {
        this._employeeService = _employeeService;
        this._userPreferencesService = _userPreferencesService;
        this.statusMessage = 'Loading data. Please wait...';
        // This property keeps track of which radio button is selected
        // We have set the default value to All, so all the employees
        // are displayed in the table by default
        this.selectedEmployeeCountRadioButton = 'Male';
    }
    Object.defineProperty(EmployeeListComponent.prototype, "colour", {
        get: function () {
            return this._userPreferencesService.colourPreference;
        },
        set: function (value) {
            this._userPreferencesService.colourPreference = value;
        },
        enumerable: true,
        configurable: true
    });
    // In ngOnInit() life cycle hook call the getEmployees()
    // service method of EmployeeService using the private
    // variable _employeeService
    //ngOnInit() {
    //    this.employees = this._employeeService.getEmployees();
    //}
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) {
            console.error(error);
            _this.statusMessage = 'Problem with the service. Please try again after sometime';
        });
    };
    //getEmployees(): void {
    //    this.employees = [
    //        {
    //            code: 'emp101', name: 'Tom', gender: 'Male',
    //            annualSalary: 5500, dateOfBirth: '6/25/1988'
    //        },
    //        {
    //            code: 'emp102', name: 'Alex', gender: 'Male',
    //            annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    //        },
    //        {
    //            code: 'emp103', name: 'Mike', gender: 'Male',
    //            annualSalary: 5900, dateOfBirth: '12/8/1979'
    //        },
    //        {
    //            code: 'emp104', name: 'Mary', gender: 'Female',
    //            annualSalary: 6500.826, dateOfBirth: '10/14/1980'
    //        },
    //        {
    //            code: 'emp105', name: 'Nancy', gender: 'Female',
    //            annualSalary: 6700.826, dateOfBirth: '5/11/1982'
    //        },
    //    ];
    //}
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getFemaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    // Depending on which radio button is selected, this method updates
    // selectedEmployeeCountRadioButton property declared above
    // This method is called when the child component (EmployeeCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in employeeList.component.html
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'list-employee',
        templateUrl: 'app/employee/employeeList.component.html',
        styleUrls: ['app/employee/employeeList.component.css'],
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        userPreferences_service_1.UserPreferencesService])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map