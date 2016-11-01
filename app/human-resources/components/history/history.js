"use strict";
var History = (function () {
    function History(employee_id, start_date, end_date, job_id, department_id) {
        this.employee_id = employee_id;
        this.start_date = start_date;
        this.end_date = end_date;
        this.job_id = job_id;
        this.department_id = department_id;
    }
    return History;
}());
exports.History = History;
//# sourceMappingURL=history.js.map