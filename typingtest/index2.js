let words = ['anil','words','output','document','optimizer','Embedding','misspelling','Representations'];


let div=document.getElementById('container');
let ans=document.getElementById('ansbox');

let new_arr=[];
let id=0;

words.map((ele)=> new_arr.unshift(ele));

function print(){
    console.log(id);
    div.innerHTML=new_arr[id];
    id+=1;
    // console.log(index);
}
// print(id);
// print(id);
// console.log(words.length);
// console.log(id);

    function aa(){
        let interval = setInterval(print(),1000);
    }
       
    
    aa();
    


