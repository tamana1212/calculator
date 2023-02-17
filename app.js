let historyArr = [];

function calculation(data) {
    let para = document.createElement('p')
    let result = data + "=" + eval(data);
    para.innerText = result;
    historyArr.push(result);
    return eval(data);
}

function getHistory() {
    historyArr.map(item => {
        document.getElementById('history').style.display = "block"
        const para = document.createElement("p");
        const node = document.createTextNode(item);
        para.appendChild(node);
        document.getElementById('history').appendChild(para);
    })
}