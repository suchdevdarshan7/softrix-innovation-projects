// a=10
// b=20

// TeacherName="Darshan"
// decimalValue = 10.8
// checkValue=true 
""
''

// console.log(TeacherName)
// console.log(decimalValue)
// console.log(checkValue)


number1 = document.getElementById("number1");
number2 = document.getElementById("number2");
button = document.getElementById("btn");
output = document.getElementById('output')
a = 1;

// "20" ==> string parseInt = 20

console.log()

// button.addEventListener('click',calculateSum)


a = 10;
console.log(a)
// a = a + 10;
a+=10;

console.log(a)

function calculateSum(){
    sum = parseInt(number1.value) + parseInt(number2.value);
    // output.innerHTML = sum;
    output.innerText = output.innerText + sum;
}