const arrayElements=[12,23,76,45,32,17,"Lamiye",3]


//FOREACH

// function foreachCustom(callback,array){
//     for(let i=0; i<array.length;i++){
//         callback(array[i],i,array)
//     }
// }



// foreachCustom((element,index,array)=>{
//     if(typeof element==='number' && element>20){
//        console.log(element+10);
       
        
//     }
// },arrayElements)


// MAP

// function mapCustom(callback,array){
//     let newArray=[]
//     for(let i=0; i<array.length;i++){
//     newArray.push(callback(array[i],i,array))
// }
//  return newArray
// }


// let result=mapCustom((element,index,array)=>{
// if(typeof element==='number' && element>10){
//     return element
// }
// return undefined
// },arrayElements)



// console.log(result);



// FILTER

// function filterCustom(callback,array){
//     let newArray=[];
//     for(let i=0; i<array.length;i++){
//     if(callback(array[i],i,array))
//     newArray.push(array[i])
//     }
//     return newArray
// }


// const result=filterCustom((element,index,array)=>{
//     if(typeof element==='number' && element>20){
//     return element
//    }

// },arrayElements)

// console.log(result);



//FIND

// function findCustom(callback,array){
//     for (let i = 0; i < array.length; i++) {
//         if(callback(array[i],i,array)){
//             return array[i]
//         }
        
//     }
// }


// const result=findCustom((element,index,array)=>{
// if(typeof element==='number' && element>20){
//     return element
// }
// },arrayElements)

// console.log(result);





//SOME

// function someCustom(callback,array){
//     for (let i = 0; i < array.length; i++) {
//         if(callback(array[i],i,array)){
//             return true
//         }
//  }
//  return false
// }


//  const result= someCustom((element,index,array)=>typeof element==='number' && element>20,arrayElements)
//  console.log(result);
 



// EVERY

// function everyCustom(callback,array){
//     for (let i = 0; i < array.length; i++) {
//  if(! callback(array[i],i,array))
//     return false

//     }
// return true
// }


// const result=everyCustom((element,index,array)=>typeof element==='number' && element>20,arrayElements)
// console.log(result);
