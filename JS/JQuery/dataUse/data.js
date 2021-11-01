const tdpull = document.querySelectorAll('.myTd')[0];

const dataTd = {
   nameData: [
       {
           id:1,
           name:"Name1"
       },
       {
        id:2,
        name:"Name2"
    },
    {
        id:3,
        name:"Name3"
    },
    {
        id:4,
        name:"Name4"
    },
    {
        id:5,
        name:"Name5"
    },

   ]
}



const mapData = dataTd.nameData[0].id;


for(let i=0; i <= 10; i++){
    
    document.querySelectorAll('.myTd')[i].innerHTML += "<td>"+dataTd.nameData[i].name+"</td>";
}






// const tdpull = document.querySelector('.myTd');

// const dataTd =  [4, 9, 16, 25]

// // const a = dataTd[0].Math.sqrt;
// const mapData = dataTd.map(Math.sqrt);

// tdpull.innerHTML = mapData;