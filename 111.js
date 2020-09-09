/*
// function checkParams() {
//   if (firstName.value.length != 0 && email.value.length >=5 && phone.value.length >=5 && commentTex.value.length != 0) {
//     document.getElementsByClassName('button-form')[0].className += ' button-form_active';}
//   else {
//     document.getElementsByClassName('button-form')[0].className += ' button-form_disabled';}
//   }}
  
    // button1.removeAttribute('disabled')

//  else {
//   button.attributes('disabled', 'disabled');
//  }
// }

// const phoneField = document.querySelector('input[name="phone"]')
// const button = document.querySelector('button')
// phoneField.addEventListener('keyup', checkLength)

// const GITHUB_URL = "https://api.github.com/users/IsraelTechChallengeITC";

const GITHUB_URL = "https://api.github.com/users/NadinHub";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
  const profileImage = document.getElementById("profile-image");
  profileImage.src = data.avatar_url;
  });

  // const profileName = document.getElementById ("my-name");
  // document.createElement('h1')
  // profileName.h1 = data.name_url;
  // });

// function fOnMouse() {
//   const card1 = document.getElementById("card-wrapper");
//   card1.addEventListener(onmouseover,fOnMouse)

// --------------- FOOTER -------------
const tech = ["HTML", "CSS", "JavaScript"];
let sentence = "This page built using";
const and = "and ";
// Functionality
tech.forEach(function(name,index) {
  if(index === tech.length -1) {
    sentence += and + name;
  }
  else if(index === tech.length -2) {
    sentence += name + " ";
  }
  else{
    sentence += name + ", ";
  }
});
console.log(sentence);
document.getElementById('12').innerHTML = sentence;



//inner.HTML мы можем выставить другие тэги
//inner.Text можем вставить только текст
// method2---------------
// const arr1 = ["HTML", " CSS", " JavaScript"]
// const sentence = document.getElementById('sentence')
// let arrLast = arr1.pop()
// sentence.textContent = `This page was built using: ${arr1} and ${arrLast}`
// -----------------------------
//method 3
const arr1 = [ "HTML", " CSS", " JavaScript"]
const 

//   // const profileImage = document.getElementById("profile-image");
//   // profileImage.src = "https://github.com/NadinHub.png";

//   // document.getElementById("profile-image").setAttribute('src', "https://github.com/NadinHub.png");
//   document.getElementById("profile-image").scr = "https://github.com/NadinHub.png";

// ------------ About ------------

const prevBtn = document.getElementById('prev');
const nextBtn = document.querySelector('#next');
let mapGal = [
 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577336.7617527427!2d36.82516238321753!3d55.58074822793288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2sus!4v1597502484149!5m2!1sen!2sus',
 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2740921501!2d-118.69192352053744!3d34.020161299625855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sru!4v1598693830181!5m2!1sen!2sru',
 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190029.0177344275!2d12.395913379380191!3d41.90998597307767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Metropolitan%20City%20of%20Rome%2C%20Italy!5e0!3m2!1sen!2sru!4v1598695083348!5m2!1sen!2sru'
]
// const mapGalery = document.querySelectorAll('#map');
// let currentlySelected = 0;
let i = 0;
function FunctionNext() {
  if (i<2) {i++};
  prevBtn.disabled = false;
  document.getElementById('map').src=mapGal[i];
  prevBtn.removeAttribute ('disabled');
  if (i==2) {
    nextBtn.disabled = true;
  }
}
nextBtn.addEventListener('click', FunctionNext)

prevBtn.addEventListener('click', function() {
  if (i>0) {i--};
  nextBtn.disabled = false;
  document.getElementById('map').src=mapGal[i];
  if (i==0) {
  prevBtn.disabled = true;
  }
})
// function showPrevMap() {
//   document.getElementById('map').src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190029.0177344275!2d12.395913379380191!3d41.90998597307767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Metropolitan%20City%20of%20Rome%2C%20Italy!5e0!3m2!1sen!2sru!4v1598695083348!5m2!1sen!2sru';
//   document.getElementById('prev').style.display = 'none';
//   document.getElementById('next').style.display = 'inline-block';}

// function showNextMap() {
//   document.getElementById('map').src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2740921501!2d-118.69192352053744!3d34.020161299625855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sru!4v1598693830181!5m2!1sen!2sru';
//   document.getElementById('prev').removeAttribute ('disabled');
// document.getElementById('prev').style.display = 'inline-block'; }

// function showMoscow() {
//   document.getElementById('map').src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577336.7617527427!2d36.82516238321753!3d55.58074822793288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2sus!4v1597502484149!5m2!1sen!2sus';
// }

// const firstName = firstName
// function showInConsole() {
//   console.log(firstName + lastName);
// }

// document.querySelector ('button').onclick = () => {
//   console.log(document.querySelector('#firstname').value);
// }

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