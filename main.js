function testingNamedFunctions() {
    var greeting = "Morning Master";
    console.log(greeting);
}
let sendButton = document.getElementById('send');
let form = document.getElementById('form');


form.addEventListener('submit', function(e){
    e.preventDefault();
})

sendButton.addEventListener('click', function(e){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    name.value = '';
    email.value = '';
    message.value = '';
    
    alert("Does it feel better now?");
})