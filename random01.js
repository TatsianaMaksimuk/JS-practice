const xhr = new XMLHttpRequest()
const url = "https://api.github.com/users"
xhr.open('GET', url)
xhr.send()
xhr.onload = function () {
    const jsonData = JSON.parse(xhr.responseText)
    console.log(jsonData)
    let jsonArray = []
    
    for (let i = 0; i < jsonData.length; i++) {
        jsonArray.push(jsonData[i].login)
        
    }
}


let data = [
    {name: 'one' },
    {name: 'two' },
    {name: 'three' },
    {name: 'four' },
    {name: 'five' },
    {name: 'six' },
]





/*let dataArray = []

let randomArray = []

for (let i = 0; i < 4; i++) {
    console.log(data[i].name)
    dataArray.push(data[i].name)
}

console.log(dataArray)
randomArray.push(dataArray.splice(Math.floor(Math.random()*dataArray.length,1))[0])*/