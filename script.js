const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
btn.style.backgroundColor = 'red';
btn.style.color ="white";
btn.textContent = 'Liked';
btn.classList.add('liked');
});

function searchGoogle() {
    var searchQuery = document.getElementById('searchInput').value;
    var url = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);
    window.open(url, '_blank');
  }

let alert = document.getElementById("alert");

alert.addEventListener('click', function(){
    window.alert("Thank you for subscribing for more articles");
})

// Get user input values of the user from the input
 
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let passWord = document.getElementById('password');
//get the data from local storage.
window.addEventListener("load",()=> {
    firstName.value =localStorage.getItem("firstName");
    lastName.value =localStorage.getItem("lastName");
    email.value =localStorage.getItem("email");
    passWord.value =localStorage.getItem("passWord");
})
//storing the data to local storage
firstName.addEventListener("change",() =>{
    //this the input value
    const data = firstName.value;
    localStorage.setItem("firstName",data)
})
lastName.addEventListener("change",() =>{
    //this the input value
    const data = lastName.value;
    localStorage.setItem("lastName",data)
})
email.addEventListener("change",() =>{
    //this the input value
    const data = email.value;
    localStorage.setItem("email",data)
})
passWord.addEventListener("change",() =>{
    //this the input value
    const data = passWord.value;
    localStorage.setItem("passWord",data)
})

const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
