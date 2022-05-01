function CreateAPI_Click() {
    const uri = 'http://127.0.0.1:3001/Robot';
    const Id = document.getElementById("CreateId").value;
    const Name = document.getElementById("CreateName").value;
    const data = { FID: Id, FNAME: Name };
    // console.log(data);

    console.log('-----------------Create_API.js Function(CREATE)-----------------')
    console.log('Go to do CreateAPI-FETCH[POST]')
    
    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(res => {
            console.log('-----------------Create_API.js Function(CREATE)-----------------')
            console.log('RES : ' , res)
            return res.json();
        })
        .then(result => {
            console.log('-----------------Create_API.js Function(CREATE)-----------------')
            console.log('RESULT : ' , result)
            document.getElementById('p1').innerHTML = ' ID : ' + result.BID + ' & ' + ' NAME : ' + result.BNAME;
        })
        .catch(() => {
            console.log('-----------------Create_API.js Function(CREATE)-----------------')
            console.log('Create Fail!')
        });
}
