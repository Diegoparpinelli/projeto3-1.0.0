
async function getData(){
    let datas = await fetch(`http://localhost:3005/listEvents`,{method:"GET"}).then(data=> data.json())
    return datas
    
}

export default getData