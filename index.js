
const URL = "http://localhost:3000/products";

let options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "lahari",
        age: 22,
        gender: "female"
    })
};

fetch(URL, options)
    .then(res => {
        if (res.ok) {
            console.log("Posted successfully:", res.status);
            
        }   
    })
  
