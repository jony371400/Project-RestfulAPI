function ReadAPI_Click() {
    const uri = 'http://127.0.0.1:3001/Robot';

    console.log('-----------------Read_API.js Function(CREATE)-----------------')
    console.log('Go to do ReadAPI-FETCH')

    fetch(uri, { method: 'GET' })
        .then(res => {
            console.log('-----------------Read_API.js Function(CREATE)-----------------')
            console.log('RES : ', res)
            return res.json();
        })
        .then(result => {
            console.log('-----------------Read_API.js Function(CREATE)-----------------')
            console.log('RESULT : ', result);
            // console.log('Length : ', result.length)

            LoadTable_Tittle()
            LoadTable_Data(result)

            document.getElementById('p1').innerHTML = 'Robot Table';
        })
        .catch(() => {
            console.log('-----------------Read_API.js Function(CREATE)-----------------')
            console.log('Read Fail!')
        });;
}

// #region Table Init
// Table Object
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

// Table Append
table.appendChild(thead);
table.appendChild(tbody);
// #endregion

function LoadTable_Tittle() {
    document.getElementById('body').appendChild(table);
    thead.innerHTML = ''

    let row = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Id";

    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Name";

    row.appendChild(heading_1);
    row.appendChild(heading_2);
    thead.appendChild(row);
}

function LoadTable_Data(jsonData) {
    for (i = 0; i < parseInt(jsonData.length); i++) {
        let row = document.createElement('tr');
        let heading_1 = document.createElement('td');
        heading_1.innerHTML = jsonData[i].Id;

        let heading_2 = document.createElement('td');
        heading_2.innerHTML = jsonData[i].Name;

        row.appendChild(heading_1);
        row.appendChild(heading_2);
        thead.appendChild(row);
    }
}