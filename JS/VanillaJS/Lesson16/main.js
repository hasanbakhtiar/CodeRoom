// class infoData{
//     sayHi(name){
//         return `Hello ${name} `;
//     }
// }



// const myData = new infoData();
// console.log(myData.sayHi("Ilqar"));


function myInfo(name,surname,age){

            this.name = name;
            this.surname = surname;
            this.age = age;
            
            return this.name + this.surname + this.age;
} 

const myData = new myInfo('Ilaqr','Imanov',23);
myInfo.prototype.color = "Yellow";

console.log(myData.color);
