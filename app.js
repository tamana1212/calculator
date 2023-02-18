function calculation(data) {
    let para = document.createElement('p')
    let result = data + "=" + eval(data);
    console.log(result);
    document.getElementById("display").value = eval(data);
    para.innerText = result;
    document.getElementById('history').appendChild(para);
}

function getHistory() {
    document.getElementById('history').style.display = "block"
}
