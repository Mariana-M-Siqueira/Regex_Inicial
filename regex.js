
function verificar(){
let letra = document.getElementById("letra").value; 
let regexa = /a|e|i|o|u/i;
let regexb = /[0-9]/;
let regexc = /\W/;
let regexd = /b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z/i;

if(regexa.test(letra)){
    alert("é uma vogal!")
}
else if(regexb.test(letra)){
    alert("é um número!")   
}
else if(regexc.test(letra)){
    alert("É um caracter especial!")
}
else if(regexd.test(letra)){
    alert("É uma consoante!")
}else{
    alert("Digite algum valor para apresentar o resultado!")
}

}