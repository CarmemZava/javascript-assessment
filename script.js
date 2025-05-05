function ParOuImpar(){
    let saida1 = document.getElementById("parouimpar");
    let numero = window.prompt("Qual o número que deseja verificar?");

    if(numero%2 == 0){
        saida1.innerHTML = `${numero} é par`
    } else{
        saida1.innerHTML = `${numero} é impar`
    }
}

function Notas(){
    let saida2 = document.getElementById("media");
    let saida3 = document.getElementById("mediapositiva");
    let saida4 = document.getElementById("medianegativa");


    let n = window.prompt("Quantas notas deseja introduzir?");
    let soma = 0;
    let somaP = 0;
    let somaN = 0;
    let contadorP = 0;
    let contadorN = 0;

    for(let i=1; i<=n; i++){
    nota = Number(prompt(`Digite a nota do ${i}º aluno`)); 
    soma+=nota;

    if(nota<10){
        classificacao = "negativa";
        somaN+=nota;
        contadorN++;

    }else{
        classificacao = "positiva";
        somaP+=nota;
        contadorP++;
    }
    }

    let media = soma/n;
    let mediaN = somaN/contadorN;
    let mediaP = somaP/contadorP;

    saida2.innerHTML = `A média dos alunos é ${media.toFixed(2)}`
    saida3.innerHTML = `A média das notas positivas é ${mediaP.toFixed(2)}`
    saida4.innerHTML = `A média das notas negativas é ${mediaN.toFixed(2)}`
}

function Producao(){
    let saida5 = document.getElementById("horas");
    let saida6 = document.getElementById("minutos");
    let saida7 = document.getElementById("segundos");

    let segundos = 0;
    let minutos = 0;
    let horas = 0;

    let tempo = window.prompt("Indique o tempo trabalhado em segundos?");

    if(tempo >= 3600){
        horas = Math.trunc(tempo/3600);
        tempo = tempo - (horas*3600)
        console.log(tempo)
    }

    if(tempo >= 60  && tempo < 3600){
        minutos = Math.trunc(tempo/60);
        tempo = tempo - (minutos*60)
        console.log(minutos)
    }

    if(tempo < 60){
        segundos = tempo;
        console.log(segundos)
    }

    saida5.innerHTML = `${horas} horas`
    saida6.innerHTML = `${minutos} minutos`
    saida7.innerHTML = `${segundos} segundos`

}

function CarregarArray(){
    let saida8 = document.getElementById("array");
    let saida9 = document.getElementById("arrayinvertida");

    let n = Number(prompt("Quantos números tem o array?"));

    myArray = new Array(n);

    
    for(let i=0; i<n; i++){
        myArray[i] = Number(prompt(`Digite o ${i + 1}º número`));
    }

    saida8.innerHTML += `${myArray}`;

    for(let i = n-1; i>=0; i--){
        saida9.innerHTML += `${myArray[i]} `;
    }
    
}

function Fatorial(){
    let saida10 = document.getElementById("fatorial");

    let n = Number(prompt("Qual número que deseja o fatorial?"));
    
    let fatorial = 1;
    // let contador = (n-1);

    while(n >= 1){
        fatorial = fatorial*n;
        n--;
    }

    console.log(fatorial)

    saida10.innerHTML = `O fatorial é ${fatorial}`;


}
