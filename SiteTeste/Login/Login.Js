const BtnNewUSer = document.getElementById("BtnNewUser").addEventListener('click', () => {
    let email = document.getElementById("nUser").value;
    let senha = document.getElementById("nPass").value;

    let usuario = {
        Nome: email,
        Num: senha
    };

    sessionStorage.setItem("User", JSON.stringify(usuario));
});

const BtnUserExist = document.getElementById("BtnUserExist").addEventListener('click', () => {
    let usuarioString = sessionStorage.getItem("User");
    let usuario = JSON.parse(usuarioString);
    
    let eUser = document.getElementById("eUser").value;
    let ePass = document.getElementById("ePass").value;

    if(eUser === usuario.Nome && ePass === usuario.Num) {
        sessionStorage.setItem('LogginID', true);
        window.location.href = "../Home/Home.html";
    }
    else {
        console.log("NO");   
    }
})
