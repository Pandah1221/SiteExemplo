let loggedIn = sessionStorage.getItem("LogginID");

if(loggedIn) {
    console.log("FOI");
}
else {
    window.location.href = '../Home/Home.html';
}