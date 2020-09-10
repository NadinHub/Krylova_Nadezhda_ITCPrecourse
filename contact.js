//------------ Contact form --------------
let firstName = document.querySelector('#firstname'); //input
let lastName = document.querySelector('#lastname'); //input
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let commentTex = document.querySelector ('#comment');
const button1 = document.querySelector ('.button'); //button

button1.onclick = function() {
  // console.log(firstName.value);
  let b = firstName.value;
  console.log('Name: ' + b);
  // firstName.value = '';
  console.log ('Last name: ' + lastName.value);
  console.log('Email: ' + email.value);
  console.log('Phone number: ' + phone.value);
  console.log('Comment: ' + commentTex.value);
}
function checkParams() {
  if (firstName.value.length != 0 && email.value.length >=3 && phone.value.length >=3 && commentTex.value.length != 0)
  button1.removeAttribute('disabled') ;
  };

  // // --------------- FOOTER -------------
const tech = ["HTML", "CSS", "JavaScript"];
let sentence = "This page built using: ";
const and = "and ";
// Functionality
tech.forEach(function(name1,index) {
  if(index === tech.length -1) {
    sentence += and + name1;
  }
  else if(index === tech.length -2) {
    sentence += name1 + " ";
  }
  else{
    sentence += name1 + ", ";
  }
});
console.log(sentence);
document.getElementById('12').innerHTML = sentence;