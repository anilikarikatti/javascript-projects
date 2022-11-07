





// // col1.onclick = ()=>{
// //     let last_click='X';
// //      last_click = col1.innerHTML="O";
// //      console.log(last_click);

     
// // }
// function clk(){
    // let col1=document.getElementById('col1');
//     let col2=document.getElementById('col2');
//     let col3=document.getElementById('col3');
//     let col4=document.getElementById('col4');
//     let col5=document.getElementById('col5');
//     let col6=document.getElementById('col6');
//     let col7=document.getElementById('col7');
//     let col8=document.getElementById('col8');
//     let col9=document.getElementById('col9');
 
//     let arr=[col1,col2,col3,col4,col5,col6,col7,col8,col9];
   
// }
// clk();

// document.body.col1.addEventListener("click",clicked);
let obj={};

let user1=0;
let user2=0;

let turn="O";

let move=0;

let zz=0;


  
function check(obj){
    if(obj['col1'] === 'X' && obj['col2'] === 'X' && obj['col3'] === 'X' ||
    obj['col4'] === 'X' && obj['col5'] === 'X' && obj['col6'] === 'X' || 
    obj['col7'] === 'X' && obj['col8'] === 'X' && obj['col9'] === 'X' ||
    
    obj['col1'] === 'X' && obj['col4'] === 'X' && obj['col7'] === 'X' ||
    obj['col2'] === 'X' && obj['col5'] === 'X' && obj['col8'] === 'X' || 
    obj['col3'] === 'X' && obj['col6'] === 'X' && obj['col9'] === 'X' ||
    
    obj['col1'] === 'X' && obj['col5'] === 'X' && obj['col9'] === 'X' ||
    obj['col3'] === 'X' && obj['col5'] === 'X' && obj['col7'] === 'X'  )
   {
        
        
        alert("X wins this game");
        zz=1;
        document.getElementById("container").disabled=true;
       
    }
    else if(obj['col1'] === 'O' && obj['col2'] === 'O' && obj['col3'] === 'O' ||
    obj['col4'] === 'O' && obj['col5'] === 'O' && obj['col6'] === 'O' || 
    obj['col7'] === 'O' && obj['col8'] === 'O' && obj['col9'] === 'O' ||
    obj['col1'] === 'O' && obj['col4'] === 'O' && obj['col7'] === 'O' ||
    obj['col2'] === 'O' && obj['col5'] === 'O' && obj['col8'] === 'O' || 
    obj['col3'] === 'O' && obj['col6'] === 'O' && obj['col9'] === 'O' ||
    obj['col1'] === 'O' && obj['col5'] === 'O' && obj['col9'] === 'O' ||
    obj['col3'] === 'O' && obj['col5'] === 'O' && obj['col7'] === 'O' )
    {
        alert("O wins this game");
        zz=1;
        document.getElementById("container").disabled=true;
    }
    else{

        
    }
}

check(obj);
function clicked(id){
    check(obj);
    let val = document.getElementById(id);
    if(move < 9){

     if(zz===1){
        document.getElementById("container").disabled=true;
     }  
     else{

     
    
     if(turn === "O"){
        turn =val.innerHTML="X";
        obj[id]=turn;
        // console.log(obj[id]);
        // check(obj);
        move++;
        check(obj);

    }
    else{
        
        turn =val.innerHTML="O";
        obj[id]=turn;
        user2++;
        // check(obj);
        move++;
        check(obj);
    }
}
}   
else{
    document.getElementById("container").disabled=true;
}
    
     
}
  
document.body.style.color="orange";


