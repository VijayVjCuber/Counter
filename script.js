let disp = document.getElementsByTagName("h2")[0];
const buttons= document.querySelectorAll(".btns");
let selector = "";
let value = 0;


buttons.forEach(function(btn) {
    btn.addEventListener('click', function(){
        selector=btn.innerText;
        if(selector.toUpperCase()==="INCREASE"){
            value+=1;
        }
        else if(selector.toUpperCase()==="DECREASE"){
            value-=1;
        }
        else{
            value=0;
        }
        if(value>0){
            disp.style.color="green";
        }
        else if(value<0){
            disp.style.color="red";
        }
        else{
            disp.style.color="black";
        }
        disp.innerText = value.toString();
    });
});

disp.innerText = (value.toString());
