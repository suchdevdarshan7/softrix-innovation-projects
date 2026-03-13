const body = document.body;
const head = document.head;
const title = document.title;

const main_heading = document.getElementsByTagName('h1')
const main_heading_by_id = document.getElementById('heading')
const paragraph = document.getElementsByClassName('desc')
// const heading = document.h1;

const heading = document.querySelector('h1');
const querySelector_heading = document.querySelector('#heading');

const paragraph_tag_querySelector = document.querySelector(".desc")
console.log(paragraph_tag_querySelector)

const html_heading = document.querySelectorAll('.heading-group')
const button = document.querySelector('button')
// console.log(querySelector_heading)

// console.log(heading)
// console.log(main_heading[0])
// console.log(body)
// console.log(head)
// console.log(title)
// console.log(paragraph)
let [desc] = paragraph;
console.log(html_heading)


function ChangeTitle(){
    main_heading_by_id.textContent = "This heading has been modified"
    body.style.backgroundColor = "red"
    desc.style.color = "white";
    button.classList.remove('btn')
    button.classList.add('btn-clicked')
    html_heading.forEach((el)=>{
        console.log(el)
        el.style.color = "orange"
    })
    addElements()
}

const products = ['car',"bike","helicopter"]
function addElements(){
    products.forEach((el)=>{
        const newElement  = document.createElement('h3')
        newElement.textContent = el;
        body = body.append(newElement)
    })
}