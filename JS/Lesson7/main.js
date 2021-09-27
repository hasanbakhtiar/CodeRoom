// const infoData = [];
// const infoData = new Array();

// const infoData = ['pen','phone','laptop',1];
// console.log(infoData);
// console.log(infoData.length);

// const infoData = [];
// infoData[0] = 'pen';
// infoData[1] = 'table';
// infoData[2] = 5;

// const infoData = ['table','laptop',true], infoData1 = ['pen','phone',1];

// console.log(infoData);
// console.log(infoData1);

// const table = "This is Table";
// const infoData = [table,true,10]
// console.log(infoData);

// const infoData = ['table', 'pen', 'desk'];
// infoData[3] = 'laptop'; 
// console.log(infoData);

// const infoData = ['table', 'pen', 'desk'];
// infoData['myvalue'] = 'hello';
// console.log(infoData['myvalue']);


// const infoData = ['table','desk','laptop',['snow','sunny',[true,10],5],'myvalue'];
// console.log(infoData[3][0]);
// console.log(infoData[3][2]);
// console.log(infoData[3][2][0]);

// const infoData = new Object();
// const infoData = {};


const carData ={
    brand: "Mercedes",
    model: 's500',
    doorType: 4,
    engine: 'v5',
    action: (a)=>{

        if(a>10){
            console.log("Hello Front");

        }
        console.log(a);

    },
    schoolThing: {
        myUse: 'pen',
        book: ['table','desk','laptop',['snow','sunny',[true,10],5],'myvalue']
    }


};
let a = 15;
console.log(carData.action(a));
// console.log(carData.action(11));
// console.log(carData.action(15,()=>{
//     console.log("Time");
// }));
console.log(carData.schoolThing.book[0]);

let ab = {};
console.log(ab);

