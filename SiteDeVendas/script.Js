function Btn_GETCEP()
{
    const cep = document.getElementById("input_CEP").value;
    const resultado = document.getElementById("resultado_CEP");

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        resultado.innerHTML = `
        <p>Bairro: ${data.bairro}</p> 
        <p>Logradouro: ${data.logradouro}</p>
        `;
    })
}



const Product1 = document.getElementById("pdt1"); //Variavel do produto 1, (const não muda o valor da variavel)
const Cart = document.getElementById("NumberCart"); //Variavel do carrinho
var IntCart = 0; //Variavel para comtabilizar itens dentro do carrinho

function ClickAdd()
{
    IntCart++;
    Cart.textContent = IntCart;
}