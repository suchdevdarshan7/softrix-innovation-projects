let colors = ['red',"blue","green","purple","white","black"];

let evenNumbers = [2,4,6,8,10];

// ! For each


// const updateArray =colors.forEach((element,index,array)=>{
//     return element.length > 6;
// })

// console.log(updateArray)


// const duplicateArray = colors.forEach(el=> el**2)
// console.log(duplicateArray)
// ! Map method

// const greaterColor = colors.map((el,idx,arr)=>{
//     return 
// })

// console.log(greaterColor)

// const squareOfEvenNumbers = evenNumbers.map(el => el**2)
// console.log(squareOfEvenNumbers)

//! Filter method
// console.log(colors)
// const greatColor = colors.filter(el => el.length>4);
// console.log(greatColor)

// let numbers = [1,52509,234,6,326,36,234,245];


// let EvenStream = numbers.map((el,idx,arr)=> {
//     return el%2===0;
// })

// console.log(EvenStream);
// number%2===0;


function GiveEven(arr){
    let newArray=[];
    for(let i = 0 ; i<arr.length;i+=1){
        if(arr[i]%2===0){
            newArray.push(arr[i])
        }
    }
    return newArray;
}

let numbers = [1,52509,234,6,326,36,234,245];
console.log(GiveEven(numbers));

