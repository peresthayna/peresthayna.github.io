let botao = document.getElementById('criar-matriz');
let matrizHtml = document.getElementById('matriz');

botao.addEventListener("click", function(e)
{

  e.preventDefault();

  let numeroLinhas = document.getElementById('linhas').value;
  let numeroColunas = document.getElementById('colunas').value;
  if(!validar(numeroLinhas, numeroColunas))
    return;
  let contador = 1;

  let matriz = [];
  matrizHtml.innerHTML = "";

  for(let i = 0; i < numeroLinhas; i++)
  {
    matrizHtml.innerHTML += "<span>[";
    matriz[i] = [];
    for(let j = 0; j < numeroColunas; j++)
    {
      matriz[i][j] = contador;
      contador++;
    }
    matrizHtml.innerHTML += matriz[i].join(", ") + "]</span><br>";
  }
  
});

let validar = function(numeroLinhas, numeroColunas)
{
  if(!numeroColunas || !numeroLinhas)
  {
    alert("Preencha os valores corretamente.");
    return false;
  }
  if(Number.isNaN(numeroLinhas) || Number.isNaN(numeroColunas))
  {
    alert("Valores devem ser numéricos.");
    return false;
  }
  if(Number.parseInt(numeroLinhas) < 1 || Number.parseInt(numeroColunas) < 1)
  {
    alert("Valores devem ser maiores que 0.");
    return false;
  }
  return true;
}