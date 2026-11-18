// let arr = [1,2,3,4,5,undefined, , undefined]
// let newarr = []

// for(i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach((ele)=>console.log(ele));


// let arr = ["html", "css","javascript","react.js"]
// let newarr = []

// for(i=0;i<arr.length;i++){
//     newarr.push(arr[i].toUpperCase())
// }
// console.log(newarr);

// arr.forEach(ele=>{
//     newarr.push(ele.toUpperCase())
// })
// console.log(newarr);







// let nums = [1,2,3,4,5]
// let result = []

// nums.forEach(ele=>result.push(ele*ele))
// console.log(result);

// for(i=0;i<nums.length;i++){
//     result.push(nums[i] * nums[i])
// }
// console.log(result);


// let result = nums.map(ele=>ele*ele)
// console.log(result);




// let arr = [2,4,6,8,10]
// let newarr = arr.filter(ele=>ele %2==0)
// console.log(newarr);



// let nums = [
//     {"id" : "1"},
//     {"id" : "2"},
//     {"id" : "3"},
//     {"id" : "4"}
// ]

// nums.forEach(ele=>console.log(ele));


// fetch("https://fakestoreapi.com/products")
// .then(
//     res=>{
//         if(!res.ok){
//             console.log("something wentt wrong");
//         }
//         return res.json();
//     }
// )

// .then(data=>{
//     data.forEach((Element, index, arr)=>{
//         console.log(Element);
        
//     })
// })

// .then(data=>{
//     let res = data.map(ele=>ele);
//     console.log(res);
    
// })