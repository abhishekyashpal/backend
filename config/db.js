const mysql = require('mysql');

mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeedb',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if(!err)
    console.log('DB connection succeded');
    else
   console.log('DB connection failed Error' + JSON.stringify(err, undefined, 2));
});