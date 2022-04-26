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
                    console.log('Data from DB : ' + JSON.stringify(results))
                    resolve(console.log('Database Insert Success'));
                }
                else {
                    reject('Error1 : ' + err)
                }
            })
        } catch (error) {
            reject('Error2 : ' + error)
        }
    })
    return promise;
}

function Delete(id) {
    console.log('-----------------Database.js Function(Delete)-----------------')
    const promise = new Promise((resolve, reject) => {
        try {
            // let safe_query = 'SET SQL_SAFE_UPDATES = 0'
            // console.log('Safe Query : ' + safe_query)

            // con.query(safe_query, id, (err, rows, fields) => {
            //     if (!err) {
            //         resolve(console.log('Safe Model Unlock'))
            //     }
            //     else {
            //         console.log(err)
            //     }
            // })

            let query = 'DELETE FROM Robots WHERE Id = ' + id
            console.log("Query : " + query)

            con.query(query, id, (err, rows, fields) => {
                if (!err) {
                    resolve(console.log('DELETE Success'))
                }
                else {
                    reject('Error : ' + err)
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
            // let safe_query = 'SET SQL_SAFE_UPDATES = 0'
            // console.log(safe_query)

            // con.query(safe_query, id, (err, rows, fields) => {
            //     if (!err) {
            //         console.log('Safe Model Unlock')
            //     }
            //     else {
            //         console.log(err)
            //     }
            // })

            let query = "UPDATE Robots SET Name = " + "\'" + name + "\'" + " WHERE Id = " + id + ";"
            console.log("Query : " + query)

            con.query(query, (err, rows, fields) => {
                if (!err) {
                    resolve(console.log('Database Update Success'))
                }
                else {
                    reject('Error : ' + err)
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
                    reject(console.log('Error : ' + err.message))
                } else {
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