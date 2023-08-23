
import Contact from "./Contact.js";

const formInfo=document.getElementById("formInfo");

let hasJob = false;
if(hasJob){
    display("Thanks for visiting");
}
else{
    display("I am currently looking for a job");
}

let today=new Date();
let dayOfWeek=today.getDay();
if(dayOfWeek==0 || dayOfWeek==6)
{
    display("Its the weekend");
}

function display(msg){

     formInfo.innerHTML="<p>"+msg+"</p>";
}

const contactForm=document.getElementById("contactForm");
contactForm.addEventListener("submit",function(event){
    event.preventDefault();
    const contact=new Contact(contactForm);
    contact.send();
})

const experiences=document.getElementsByClassName("experience");
for(let x=0;x<experiences.length;x++){
    const item=experiences[x];
    item.addEventListener("mouseenter",function(event){
        event.target.style="background-color:gray";
    });
    item.addEventListener("mouseleave",function(event){
        event.target.style="";
});
}