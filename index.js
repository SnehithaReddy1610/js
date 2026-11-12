// DELETEALL

// fetch("http://localhost:3000/products")
// .then((response) => response.json())
// .then(data => console.log(data))


// const URL = "http://localhost:3000/products";

// fetch(URL)
// .then(res => res.json())
// .then(data =>{
//     for(i = 0;i<data.length;i++){
//         fetch(`http://localhost:3000/products/${data[i].id}`,{"method" : "DELETE"})

//             .then(res => {
//                 if(res.ok){
//                     console.log(res.ok, res.status, res.statusText)
//                 }
//             }
//         )
//     }
// })



// POSTALL

let data =[
    {
        "id" : "1",
        "name" : "raju"
    }, 
    {
        "id" : "2",
        "name" : "somu"
    }, 
    {
        "id" : "3",
        "name" : "ramu"
    }, 
    {
        "id" : "4",
        "name" : "tinu"
    }
]

for(i=0;i<=data.length;i++){
    let obj = data[i];

    fetch("http://localhost:3000/products",{
        "method" : "POST",
        "headers" :{
            "content-type" : "application/json"
        },
        "body" : JSON.stringify(obj)
   })
   .then(res => {
    if(res.ok){
        console.log(res.ok, res.status, res.statusText)
    }
   })
}
