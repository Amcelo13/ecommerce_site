//------------------------Hamburger Button Functioning---------------------------------------//
const bar = document.getElementById('bar');
// Now after clicking 
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

//Condition in this..
if(bar){      //If anyone clicks on the hamburger button
  bar.addEventListener('click',() =>{
    nav.classList.add('active');
  })
}

if(close){    //If anyone clicks on the hamburger button
  close.addEventListener('click',() =>{
    nav.classList.remove('active');
  })
}