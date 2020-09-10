// ---------------- Main CARD --------------------
const GITHUB_URL = "https://api.github.com/users/NadinHub";
fetch(GITHUB_URL)
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  const profileImage = document.getElementById("profile-image");
  const profileName = document.getElementById("my-name");
  const profileLink = document.getElementById("l");
  profileImage.src = data.avatar_url;
  profileName.innerText = data.name;
  profileLink.href = data.html_url;
  });
// ------------ About ------------

const prevBtn = document.getElementById('prev');
const nextBtn = document.querySelector('#next');
let mapGal = [
 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577336.7617527427!2d36.82516238321753!3d55.58074822793288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2sus!4v1597502484149!5m2!1sen!2sus',
 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2740921501!2d-118.69192352053744!3d34.020161299625855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sru!4v1598693830181!5m2!1sen!2sru',
 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190029.0177344275!2d12.395913379380191!3d41.90998597307767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Metropolitan%20City%20of%20Rome%2C%20Italy!5e0!3m2!1sen!2sru!4v1598695083348!5m2!1sen!2sru'
];
let i = 0;
makeFooter();
function FunctionNext() {
  if (i<2) {i++}
  prevBtn.disabled = false;
  document.getElementById('map').src=mapGal[i];
  prevBtn.removeAttribute ('disabled');
  if (i==2) {
    nextBtn.disabled = true;
  }
}
nextBtn.addEventListener('click', FunctionNext);

prevBtn.addEventListener('click', function() {
  if (i>0) {i--}
  nextBtn.disabled = false;
  document.getElementById('map').src=mapGal[i];
  if (i==0) {
  prevBtn.disabled = true;
  }
});
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
// --------------- FOOTER -------------
function makeFooter() {
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
};