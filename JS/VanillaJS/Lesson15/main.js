// https://www.w3schools.com/js/js_window_navigator.asp

// localStorage.setItem("name", "Ilqar");
// localStorage.clear();


const lightMode = document.querySelector('.m1').attributes[1].value;
const darkMode = document.querySelector('.m2').attributes[1].value;

if (lightMode == 1){
            localStorage.setItem('mode','1');
}else if(darkMode == 2){
            localStorage.setItem('mode', '2');
}else{
            localStorage.setItem('mode','1');

}

var e = document.getElementById("ddlViewBy");
var strUser = document.getElementById('ddlViewBy').getElementsByTagName('option')[2].selected = 'selected';

console.log(strUser);