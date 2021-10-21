const hide = ()=>{
    document.querySelector('.box1').style.display = "none";
}

const show = ()=>{
    document.querySelector('.box1').style.display = 'block';
}

document.querySelector('button').addEventListener('click', hide);
document.querySelector('button').addEventListener('dblclick',show);

// https://www.w3schools.com/jsref/prop_node_attributes.asp
// https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_nth-child