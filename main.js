

function testingNamedFunctions() {
    
    const greeting = ["Morning Master", "You stupid fuck!", "Do you think you're good...??", "Such a looser!", "Dafuq are you doing???" ];

    const random = Math.floor(Math.random() * greeting.length);
    console.log(random, greeting[random]);
  
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