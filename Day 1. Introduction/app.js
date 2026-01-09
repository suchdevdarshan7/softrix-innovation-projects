const button = document.querySelector('.btn');
let defaultColor = true;
button.addEventListener('click', () => {
    if(defaultColor){   
    document.body.style.backgroundColor = "black";
    defaultColor = false;
    }
    else{
        document.body.style.backgroundColor = "white";
        defaultColor = true;
    }
    
});