document.querySelector("form").addEventListener("submit", (s) => {
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmar-senha").value;
  const mensagem = document.querySelector("senhas-erro");

  if (senha !== confirmarSenha) {
    s.preventDefault();
    mensagem.style.display = "block";
  }
});
