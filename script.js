function rolarParaProdutos() {
    document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
}

function adicionarCarrinho(produto) {
    alert(produto + " foi adicionado ao carrinho!");
}

// Newsletter
document.getElementById("formNewsletter").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const msg = document.getElementById("mensagem");

    msg.textContent = "Obrigado! Você receberá nossas novidades em: " + email;
});
