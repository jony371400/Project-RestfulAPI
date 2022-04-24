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
    console.log('ID : ' + id)
    console.log('NAME : ' + name)

    // Basic 
    // let q = "INSERT INTO Robots (Id , Name) VALUES (1, 'Robot1')"
    // console.log(q)

    // con.query(query, (err, rows, fields) => {
    //     if (!err) {
    //         console.log('Database Insert Success')
    //     }
    //     else {
    //         console.log(err)
    //     }
    // })

    let query = "INSERT INTO Robots (Id , Name) VALUES (" + id + " , " + "\'" + name + '\'' + ")"
    console.log("Query : " + query)

    const promise = new Promise((resolve, reject) => {
        try {
            con.query(query, (err, results) => {
                if (!err) {
                    resolve(console.log('Database Insert Success'));
                }
                else {
                    console.log(err)
                }
            })
        } catch (error) {
            reject('Error : ' + error)
        }
    })
    return promise;
}

function Delete(id) {
    // Basic
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

    // let query = 'DELETE FROM Robots WHERE Id = ' + id
    // console.log("Query : " + query)

    // con.query(query, id, (err, rows, fields) => {
    //     if (!err) {
    //         console.log('DELETE Success')
    //     }
    //     else {
    //         console.log(err)
    //     }
    // })

    const promise = new Promise((resolve, reject) => {
        try {
            let safe_query = 'SET SQL_SAFE_UPDATES = 0'
            console.log('Safe Query : ' + safe_query)

            con.query(safe_query, id, (err, rows, fields) => {
                if (!err) {
                    resolve(console.log('Safe Model Unlock'))
                }
                else {
                    console.log(err)
                }
            })

            let query = 'DELETE FROM Robots WHERE Id = ' + id
            console.log("Query : " + query)

            con.query(query, id, (err, rows, fields) => {
                if (!err) {
                    resolve(console.log('DELETE Success'))
                }
                else {
                    console.log(err)
                }
            })

        } catch (error) {
            reject('Error : ' + error)
        }
    })
    return promise;
}

function Update(id, name) {
    // Basic
    // let q = "UPDATE Robots SET Name = '_TM250' WHERE Id = 1;"
    // console.log(q)

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

    // let query = "UPDATE Robots SET Name = " + "\'" + name + "\'" + " WHERE Id = " + id + ";"
    // console.log("Query : " + query)

    // con.query(query, (err, rows, fields) => {
    //     if (!err) {
    //         console.log('Database Update Success')
    //     }
    //     else {
    //         console.log(err)
    //     }
    // })

    const promise = new Promise((resolve, reject) => {
        try {
            let safe_query = 'SET SQL_SAFE_UPDATES = 0'
            console.log(safe_query)

            con.query(safe_query, id, (err, rows, fields) => {
                if (!err) {
                    console.log('Safe Model Unlock')
                }
                else {
                    console.log(err)
                }
            })

            let query = "UPDATE Robots SET Name = " + "\'" + name + "\'" + " WHERE Id = " + id + ";"
            console.log("Query : " + query)

            con.query(query, (err, rows, fields) => {
                if (!err) {
                    console.log('Database Update Success')
                }
                else {
                    console.log(err)
                }
            })
        } catch (error) {
            reject('Error : ' + error)
        }
    })
    return promise;
}

function Read() {
    const promise1 = new Promise((resolve, reject) => {
        try {
            const query = "SELECT * FROM Robots;";

            con.query(query, (err, results) => {
                if (err) {
                    console.log('err => ' + err.message)
                } else {
                    console.log('results => ' + JSON.stringify(results))
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