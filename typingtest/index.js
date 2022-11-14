let words = ['anil','words','output','document','optimizer','Embedding','misspelling','Representations'];
let div=document.getElementById('para');
let ans=document.getElementById('ansbox');
let interal;

let size;

let wo=80;



let newarray=[];

let delay=500;

function start(){
    interal = setInterval(margin1,delay);
    
}

   
let a=10;
i=0;
print(i)
function print(i){
    if(a<=20){
        div.style.marginLeft=a+'px';
        
        div.innerHTML=words[i];
        // console.log(words[i]);
        div.style.fontSize=wo+'px';
        ans.disabled=false;
        start();
    }
}

function margin1(){
    
    div.style.marginLeft=a+'px';
    // console.log(a);
    a+=20;
    stop();
}

function stop(){
    if(a>=650){
        clearInterval(interal);
        ans.value="";

        if(i<words.length-1){
            i++;
            // console.log(words.length);
            
            a=10;
            if(delay  > 200){
                delay-=100;
            }
            else{
                delay=100;
            }
            
           print(i);
           if(wo>20){
               wo-=20;
           }
           else{
               wo=15;
           }
        }
        else{
            // console.log(ansarray); 
             
             newarray=words.filter(elem=>ansarray.includes(elem));

             div.style.marginLeft='150px';

             div.innerHTML=" congratulations you answered "+newarray.length + " out of "+ words.length; 
             div.style.fontSize='30px';
            // console.log(newarray);       



        }
       
        
    }
    else{
        btn.addEventListener('click',con);
        
        function con(){

            
            ansarray[i]=ans.value;
            ans.disabled=true;

            
            // console.log(ansarray);

            
            
        }
        
    }

    
    
}


btn=document.getElementById('submit');



let ansarray=[];



