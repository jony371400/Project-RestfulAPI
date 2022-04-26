function DeleteAPI_Click() {
    const uri = 'http://127.0.0.1:3001/Robot';
    const Id = document.getElementById("deleteId").value;
    const data = { FID: Id };

    console.log('Go to do DeleteAPI-FETCH')
    fetch(uri, {
        // method: 'POST',
        method: 'DELETE',
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
            document.getElementById('p1').innerHTML = 'Delete Success';
        })        
        .catch(() => {
            console.log('Delete Fail!')
        });;
}
