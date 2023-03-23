let lastname=document.getElementById("lastname");
let firsname=document.getElementById("firstname");
let middlename=document.getElementById("middlename");
let region=document.getElementById("region");
let citizenship=document.getElementById("citizenship");
let municipal=document.getElementById("municipal");
let birth=document.getElementById("birth");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form");

function validateInput(){
    //check username is empty 
    if(lastname.value.trim()===""){
       onError(lastname,"Last Name cannot be empty");
    }else{
        onSuccess(lastname);
    }

    if(firstname.value.trim()===""){
       onError(firstname,"First Name cannot be empty");
    }else{
        onSuccess(firstname);
    }

    if(middlename.value.trim()===""){
       onError(middlename,"Middle Name cannot be empty");
    }else{
        onSuccess(middlename);
    }

    if(region.value.trim()===""){
       onError(region,"Region cannot be empty");
    }else{
        onSuccess(region);
    }

     if(citizenship.value.trim()===""){
       onError(citizenship,"citizenship cannot be empty");
    }else{
        onSuccess(citizenship);
    }

    if(municipal.value.trim()===""){
       onError(municipal,"Municipality/City Of Birth cannot be empty");
    }else{
        onSuccess(municipal);
    }

    if(birth.value.trim()===""){
       onError(birth,"Country of Birth cannot be empty");
    }else{
        onSuccess(birth);
    }

}
document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}