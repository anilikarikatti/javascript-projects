let words = ['anil','words','output','document','optimizer','Embedding','misspelling','Representations',
"ables",    
"about",
"above",
"ability",
"accept",
"according",
"account",
"across",
"act",
"action",
"activity",
"actually",
"add",
"address",
"administration",
"admit",
"adult",
"affect",
"after",
"again",
"against",
"age",
"agency",
// "agent",
// "ago",
// "agree",
// "agreement",
// "ahead",
// "air",
// "all",
// "allow",
// "almost",
// "alone",
// "along",
// "already",
// "also",
// "although",
// "always",
// "American",
// "among",
// "amount",
// "analysis",
// "and",
// "animal",
// "another",
// "answer",
// "any",
// "anyone",
// "anything",
// "appear",
// "apply",
// "approach",
// "area",
// "argue",
// "arm",
// "around",
// "arrive",
// "art",
// "article",
// "artist",
// "as",
// "ask",
// "assume",
// "at",
// "attack",
// "attention",
// "attorney",
// "audience",
// "author",
// "authority",
// "available",
// "avoid",
// "away",
// "baby",
// "back",
// "bad",
// "bag",
// "ball",
"bank"];
let div=document.getElementById('container');
let ans=document.getElementById('ansbox');
let  num=4;

let id;

let p1=document.getElementById('1');
let p2=document.getElementById('2');
let p3=document.getElementById('3');
let p4=document.getElementById('4');


// let a1 = words.map(print);

let start=0;
let stop=4;

let a1=0;
let a2=0;
let a3=0;
let a4=0;


let ansarray=[];

let correct_entered=[];

let count=0;
/*
pri();
function pri(){


    for(let i=start;i<stop;i++){
        if(i < words.length){
        
            if(i % 4 == 1){
                p1.innerHTML=words[i];
            }
        
            else if(i % 4 == 2){
            p2.innerHTML=words[i];
            // return element;
            }
             else if(i % 4 == 3){
            p3.innerHTML=words[i];
            // return element;
            id =setInterval(margin,1000);
            
            }
            else if (i % 4==0){
            p4.innerHTML=words[i];
            // num+=4;
            // console.log(num);
            // return element;
                    
            }
        }
        
    }
}
*/
// function print(element,index){
//     if(index < num){
//         if(index % 4 == 1){
//             p1.innerHTML+=element;
            
//             return element;
//         }
//         else if(index % 4 == 2){
//             p2.innerHTML+=element;
//             return element;
//         }
//         else if(index % 4 == 3){
//             p3.innerHTML+=element;
//             return element;
            
//         }
//         else if (index % 4==0){
//             p4.innerHTML+=element;
//             // num+=4;
//             // console.log(num);
//             return element;
            
//         }
        
//     }
//     else{
//         id =setInterval(margin,1000);
//     }
    
// }

// console.log(a1)

let index1=0;
let index2=0;
let index3=0;
let index4=0;


let arr0 = words.filter((element,index)=>{ if (index % 4 === 0) return element});

let arr1 = words.filter((element,index)=>{ if (index % 4 === 1) return element});

let arr2 = words.filter((element,index)=>{ if (index % 4 === 2) return element});

let arr3 = words.filter((element,index)=>{ if (index % 4 === 3) return element});


// console.log(arr1);

function print(arr,place,index){
    // console.log(place);
    // console.log(arr);
    // console.log(index);
    // console.log(arr[index]);

    if(count < words.length-1){

      place.innerHTML=arr[index];
    
      id = setInterval(margin,1000);
    //   console.log(count);
    //   console.log(words.length)

      count+=1;
  
    }
    else{
        correct();
    }
    
}

print(arr1,p1,index1);
print(arr2,p2,index2);
print(arr3,p3,index3);
print(arr0,p4,index4);


 
function margin(){
    p1.style.marginLeft=a1+'px';
    p2.style.marginLeft=a2+'px';
    p3.style.marginLeft=a3+'px';
    p4.style.marginLeft=a4+'px';
    
    if(a1 > 760){
        
        p1.innerHTML="";
        index1+=1;
        clear();
        a1=0;
        margin();
        if(index1 < arr1.length){
            print(arr1,p1,index1);
        }
        
        
       
        
    }
    else{
        a1+=35;
    }
    if(a2 > 760){
        
        p2.innerHTML="";
        index2+=1;
        clear();
        a2=0;
        margin();
        if(index2 < arr2.length){
            print(arr2,p2,index2);
        }
        
        
    }else{
        a2+=35;
    }
    if(a3 > 760){
       
        p3.innerHTML="";
        index3+=1;
        clear();
        a3=0;
        margin();
        if(index3 < arr3.length){
            print(arr3,p3,index3);
        }
        
        
    }
    else{
        a3+=30;
    }
    if(a4 > 760){
        
        p4.innerHTML="";
        index4+=1;
        clear();
        a4=0;
        margin();
        if(index4 < arr0.length){
            print(arr0,p4,index4);
        }
        
        
        
    }
    else{
        a4+=35;
    }
    
    
}

function clear(){
    clearInterval(id);
}

let k=0;

function answer(e){
    ansarray=e.target.value;
    
    let doc=div.textContent;
    
    if(doc.includes(ansarray)){
        // console.log(doc);
        check();
        k+=1;
    }
    // if(document.body.innerHTML.search('e.target.value')){
        
    // }
    // console.log(ansarray);
    
    // console.log(correct_entered);
    e.target.value="";
    
    
}

// console.log(ansarray);

ans.addEventListener("keydown",function(e){
    if(e.code === "Enter"){

        answer(e);
    }
});


function check(){
  
    correct_entered[k] = words.filter((element)=> ansarray.includes(element)) 
}

function correct(){
    alert("you entered "+ correct_entered.length + " words correctly");
}


