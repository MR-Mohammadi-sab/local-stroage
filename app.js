const firstName=document.getElementById("name");
const lastName=document.getElementById("lastname");
const submit=document.getElementById("submit");
const show=document.getElementById("show");
const clear=document.getElementById("clear");
const content=document.getElementById("content")


submit.addEventListener("click",()=>{
   localStorage.setItem('Name',firstName.value);
   localStorage.setItem('lastName',lastName.value);
   firstName.value=""
   lastName.value=""
})

show.addEventListener("click",()=>{
    const getName=localStorage.getItem('Name')
    const getLastname=localStorage.getItem('lastName')
    console.log(getName,getLastname);
    const h6=document.createElement("h6")
    content.appendChild(h6).innerHTML=`your name is ${getName} and your lastname is ${getLastname}`
    h6.className="pb-3 ms-5"
    
})

clear.addEventListener("click" , ()=>{
    localStorage.clear()
    const h6=document.createElement("h6")
    content.appendChild(h6).innerHTML=`your name is Clear and your lastname is Clear`
    h6.className="pb-3 ms-5"
})

// localStorage.removeItem("key")****
