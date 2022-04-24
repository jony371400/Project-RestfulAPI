function TestGET_Click() {
    const name = 'Johnny Chai';
    const age = 25;
    const uri = `https://script.google.com/macros/s/AKfycbw5PnzwybI_VoZaHz65TpA5DYuLkxIF-HUGjJ6jRTOje0E6bVo/exec?name=${name}&age=${age}`;

    console.log('Go to do Get-FETCH')
    fetch(uri, { method: 'GET' })
        .then(res => {
            return res.text();
        }).then(result => {
            document.getElementById('p1').innerHTML = result;
            console.log(result);
        });

}

function TestPOST_Click() {
    const uri = 'https://script.google.com/macros/s/AKfycbxXH6aPsldTBeS41WRMnJEA5Xstc7cYMj6YimDO2Al7H6DkJZiz/exec';

    console.log('Go to do Post-FETCH')
    fetch(uri, {
        method: 'POST',
        body: encodeURI(JSON.stringify({
            name: 'Johnny',
            age: 25
        })),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
    })
        .then(res => {
            console.log('RES : ')
            console.log(res)
            console.log('---------------')
            return res.json();
        }).then(result => {
            console.log(result);
            document.getElementById('p1').innerHTML = ' Name : ' + result.name + ' & ' + ' Age : ' + result.age;
        });
}

function TestAPI_Click() {
    const uri = 'http://127.0.0.1:3001/API';

    console.log('Go to do API-FETCH')
    fetch(uri, { method: 'GET' })
        .then(res => {
            console.log('RES : ', res)
            return res.text();
        }).then(result => {
            console.log('RESULT : ', result);
            document.getElementById('p1').innerHTML = result;
        });
}
