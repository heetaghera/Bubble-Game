var bulb = document.querySelector(".bulb")
var a=document.querySelector(".btn")
var flag=0;
a.addEventListener("click",function(){
    if(flag==0){
        bulb.style.backgroundColor="transparent"
        flag=1;
    }
    else{
        bulb.style.backgroundColor="yellow"
        flag=0;
    }
})
