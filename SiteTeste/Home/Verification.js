let loggedIn = sessionStorage.getItem("LogginID");

if(loggedIn) {
    console.log("FOI");
}
else {
    window.location.href = 'http://127.0.0.1:5500/Login/Login.html';
}