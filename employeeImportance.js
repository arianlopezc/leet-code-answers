/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    if (employees.length === 0) {
        return 0;
    }
    const mapped = new Map();
    for (let employee of employees) {
        mapped.set(employee.id, employee);
    }
    const selectedEmployee = mapped.get(id);
    let totalImportance = selectedEmployee.importance;
    const stack = [...selectedEmployee.subordinates];
    for (let subordinate of stack) {
        const importance = mapped.get(subordinate).importance;
        totalImportance += importance ? importance : 0;
        stack.push(...mapped.get(subordinate).subordinates);
    }
    return totalImportance;
};