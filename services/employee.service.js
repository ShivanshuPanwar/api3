const db = require('../db');

module.exports.getAllEmployees = async () => {
    const [records] =  await db.query("SELECT * FROM employees");       
    return records;
};

module.exports.getEmployeeById = async (id) => { 
    const [[record]] =  await db.query("SELECT * FROM employees WHERE id = ?", [id]);          
    return record;
};

module.exports.deleteEmployee = async (id) => {
    const [{affectedRows}] =  await db.query("DELETE FROM employees WHERE id = ?", [id]); 
    return affectedRows;
};


module.exports.postEmployee = async(obj, id=0) => {
    const [{affectedRows}] =  await db.query(`INSERT INTO employees SET ?`, obj);
    if(id === 0) {
        return `A new employee with ID: ${affectedRows} has been created`;
    } else {
        return 'The data for the employee with ID: '+id+' has been updated';
    }
    
};

module.exports.putEmployee = async(obj, id=0) => {
    const [{affectedRows}] = await db.query(`UPDATE employees SET ? WHERE id=?`,[obj, id]);
    return affectedRows;
};

