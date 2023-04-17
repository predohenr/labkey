Fundamentos de programação assíncrona
- Na programação assíncrona as funções não são executadas em ordem. Com o assincronismo, podemos interromper o código para conseguirmos alguma outra informação necessária para a continuar a execução. Isso significa que o código espera por uma outra parte do código e, enquanto espera, executa as demais partes.


Como usar em Javascript
- Esperar Por TimeOuts:
```
setTimeout(myFunction, 3000); //printa na tela Hello World! após 3 segundos
function myFunction() {
  console.log("Hello World!");
}
```
- Esperar por Intervalos:
```
setInterval(myFunction, 1); //funciona como um relógio, atualizando os números a cada milissegundo
function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  ('0' + d.getHours()).slice(-2) + ":" +
  ('0' + d.getMinutes()).slice(-2) + ":" +
  ('0' + d.getSeconds()).slice(-2) + ":" +
  ('0' + `${d.getMilliseconds()}`.slice(0, 2)).slice(-2);
}
```
