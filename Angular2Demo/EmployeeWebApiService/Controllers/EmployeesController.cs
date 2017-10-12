using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebApiService.Controllers
{
    public class EmployeesController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            using (employeeDbEntities entities = new employeeDbEntities())
            {
                return entities.Employees.ToList();
            }
        }

        public Employee Get(string id)
        {
            using (employeeDbEntities entities = new employeeDbEntities())
            {
                var ff = entities.Employees.FirstOrDefault(e => e.code == id);
                return ff;
            }
        }
    }
}
