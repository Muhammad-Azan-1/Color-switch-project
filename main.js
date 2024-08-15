var buttons = document.querySelectorAll('.button');
var body = document.querySelector('body');
buttons.forEach(function (button) {
    button.addEventListener('click', function (evt) {
        console.log(evt.target); // on which thing we target so that the event comes    
    });
});
