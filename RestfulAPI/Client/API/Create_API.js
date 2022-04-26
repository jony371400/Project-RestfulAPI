function CreateAPI_Click() {
    const uri = 'http://127.0.0.1:3001/Robot';
    const Id = document.getElementById("CreateId").value;
    const Name = document.getElementById("CreateName").value;
    const data = { FID: Id, FNAME: Name };
    console.log(data);

    // console.log(typeof (Id))
    // if (typeof (Id) != 'int') {
    //     console.log('err')
    // }
    // else {
    //     console.log('Success')
    // }


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
            console.log('Here RES!')
            console.log(res)
            return res.json();
        })
        .then(result => {
            console.log('Here RESULT!')
            console.log(result);
            document.getElementById('p1').innerHTML = ' ID : ' + result.BID + ' & ' + ' NAME : ' + result.BNAME;
        })
        .catch(() => {
            console.log('Create Fail!')
        });
}
