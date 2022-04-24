function UpdateAPI_Click() {
    const uri = 'http://127.0.0.1:3001/Robot';
    const Id = document.getElementById("UpdateId").value;
    const Name = document.getElementById("UpdateName").value;
    const data = { FID: Id, FNAME: Name };
    console.log(data);

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
            console.log('Here RES!')
            console.log(res)
            return res.json();
        }).then(result => {
            console.log('Here RESULT!')
            console.log(result);
            document.getElementById('p1').innerHTML = ' ID : ' + result.BID + ' & ' + ' NAME : ' + result.BNAME;
        });
}
