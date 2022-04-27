// const { query } = require('express');
const { json } = require('body-parser');
const mysql = require('mysql');

// Config
const con = mysql.createConnection({
    // Mac Setup
    // host: "localhost",
    // user: "root",
    // password: "asd0986458212",
    // port: '3306',
    // database: 'AMR'

    // Linux Setup
    host: "localhost",
    user: "debian-sys-maint",
    password: "oROoMcjAmrQaCHBb",
    port: '3306',
    database: 'AMR'
});

// Connect
con.connect((err) => {
    if (!err) {
        console.log('DB Connect Success!')
    } else {
        console.log(err)
        console.log('Fail')
    }
})

// CRUD
function Create(id, name) {
    console.log('-----------------Database.js Function(CREATE)-----------------')
    // console.log('ID : ' + id)
    // console.log('NAME : ' + name)

    let query = "INSERT INTO Robots (Id , Name) VALUES (" + id + " , " + "\'" + name + '\'' + ")"
    // console.log("Query : " + query)

    const promise = new Promise((resolve, reject) => {
        try {
            con.query(query, (err, results) => {
                if (!err) {
                    console.log("\x1b[36m%s\x1b[0m", 'Create Database Success!')
                    console.log('Data from DB : ' + JSON.stringify(results))
                    resolve(results);
                }
                else {
                    console.log("\x1b[31m%s\x1b[0m", 'Create Database Fail!')
                    console.log('Error Msg About Wrong [QUERY] : ' + err.message)
                    reject()
                }
            })
        } catch (error) {
            reject('Error : ' + error)
        }
    })
    return promise;
}

function Delete(id) {
    console.log('-----------------Database.js Function(Delete)-----------------')
    const promise = new Promise((resolve, reject) => {
        try {
            let query = 'DELETE FROM Robots WHERE Id = ' + id
            // console.log("Query : " + query)

            con.query(query, id, (err, rows, fields) => {
                if (!err) {
                    console.log("\x1b[36m%s\x1b[0m", 'Delete Database Success!')
                    // console.log('Data from DB : ' + JSON.stringify(results))
                    resolve()
                }
                else {
                    console.log("\x1b[31m%s\x1b[0m", 'Delete Database Fail!')
                    console.log('Error Msg About Wrong [QUERY] : ' + err.message)
                    reject()
                }
            })

        } catch (error) {
            reject('Error : ' + error)
        }
    })
    return promise;
}

function Update(id, name) {
    console.log('-----------------Database.js Function(UPDATE)-----------------')
    const promise = new Promise((resolve, reject) => {
        try {
            let query = "UPDATE Robots SET Name = " + "\'" + name + "\'" + " WHERE Id = " + id + ";"
            // console.log("Query : " + query)

            con.query(query, (err, rows, fields) => {
                if (!err) {
                    console.log("\x1b[36m%s\x1b[0m", 'Update Database Success!')
                    // console.log('Data from DB : ' + JSON.stringify(results))
                    resolve()
                }
                else {
                    console.log("\x1b[31m%s\x1b[0m", 'Update Database Fail!')
                    console.log('Error Msg About Wrong [QUERY] : ' + err.message)
                    reject()
                }
            })
        } catch (error) {
            reject('Error : ' + error)
        }
    })
    return promise;
}

function Read() {
    console.log('-----------------Database.js Function(READ)-----------------')
    const promise1 = new Promise((resolve, reject) => {
        try {
            const query = "SELECT * FROM Robots;";

            con.query(query, (err, results) => {
                if (err) {
                    console.log("\x1b[31m%s\x1b[0m", 'Read Database Fail!')
                    console.log('Error Msg About Wrong [QUERY] : ' + err.message)
                    reject()
                } else {
                    console.log("\x1b[36m%s\x1b[0m", 'Read Database Success!')
                    console.log('Data from DB : ' + JSON.stringify(results))
                    resolve(results)
                }
            })
        } catch (error) {
            reject('Error : ' + error)
        }
    });
    return promise1;
}

// Export function module
module.exports = { Create, Delete, Update, Read };