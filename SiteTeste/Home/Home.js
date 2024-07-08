const produto1 = {
    nome: 'PC Gamer UltraMax',
    valor: 'Grátis!'
};

const produto2 = {
    nome: 'Monitor Gamer',
    valor: 'R$ 4000.00'
};


let Cart = [];
function AddToCart(product) {
    Cart.push(product);
    ShowInCart();
}

let CartInfo = document.getElementById("Conteudo");

function ShowInCart() {
    
    CartInfo.innerHTML = "";

    Cart.forEach((Info, Index) => {
        if(Index < 5) {
            let NewItem = document.createElement("li");
            NewItem.textContent = `Nome do Produto: ${Info.nome} Valor do Produto: ${Info.valor}`;
            CartInfo.appendChild(NewItem);
        }
    });
}

const Btn1 = document.getElementById("BtnPro1").addEventListener('click', () => {
    AddToCart(produto1);
});

const Btn2 = document.getElementById("BtnPro2").addEventListener('click', () => {
    AddToCart(produto2);
})

function DelCart() {
    CartInfo.innerHTML = "";
    Cart = [];
}
const BtnRes = document.getElementById("BtnRes").addEventListener('click', () => {
    DelCart();
})