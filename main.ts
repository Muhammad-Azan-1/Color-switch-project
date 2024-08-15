let buttons : NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button');
let body  = document.querySelector('body') as HTMLBodyElement ;  


buttons.forEach((button:Element)=>{
    button.addEventListener('click', (evt) => {
         console.log(evt.target); // on which thing we target so that the event comes    
 
})
} )