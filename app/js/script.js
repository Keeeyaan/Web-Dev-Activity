const b = document.getElementById("login-overlay");
const visibility = document.getElementById("login-open");

login.addEventListener('click', function(){
    console.log('click login');

    if(b.classList.contains('overlay')) {
        b.classList.remove('overlay');
        visibility.style.visibility = "hidden";
    } else {
        b.classList.add('overlay');
        visibility.style.visibility = "visible";
    }
}); 