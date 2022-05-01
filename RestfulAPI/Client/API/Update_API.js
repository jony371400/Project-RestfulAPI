function UpdateAPI_Click() {
    const uri = 'http://127.0.0.1:3001/Robot';
    const Id = document.getElementById("UpdateId").value;
    const Name = document.getElementById("UpdateName").value;
    const data = { FID: Id, FNAME: Name };
    // console.log(data);

    console.log('-----------------Update_API.js Function(CREATE)-----------------')
    console.log('Go to do UpdateAPI-FETCH[POST]')

    fetch(uri, {
        method: 'PUT',
        // method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(res => {
            console.log('-----------------Update_API.js Function(CREATE)-----------------')
            console.log('RES : ' , res)
            return res.json();
        })
        .then(result => {
            console.log('-----------------Update_API.js Function(CREATE)-----------------')
            console.log('RESULT : ' , result)
            document.getElementById('p1').innerHTML = ' ID : ' + result.BID + ' & ' + ' NAME : ' + result.BNAME;
        })
        .catch(() => {
            console.log('-----------------Update_API.js Function(CREATE)-----------------')
            console.log('Update Fail!')
        });;
}
