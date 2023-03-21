const element=document.querySelector('#counter');
function increment(){
    let value = parseInt(element.innerText);
    value=value+1;
    element.innerText=value;
};

function decrement(){
    let value = parseInt(element.innerText);
    value=value-1;
    element.innerText=value;
};
