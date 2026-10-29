
// função para mostrar o horário atual
function mostrarHorario(){
    let agora= new Date();

    let horario=agora.toLocaleTimeString("pt-br", {    
        timeZone:"America/Sao_Paulo"
    });
    document.getElementById("horario").innerHTML = horario;
}

mostrarHorario();
setInterval(mostrarHorario, 1000);

function verificarIdade(){
let idade=Number(document.getElementById("idade").value);

if (idade>=18) {
    document.getElementById("resultado").innerHTML="Entrada permitida";
} else {
    document.getElementById("resultado").innerHTML="Entrada não autorizada";
}};

function tema() {
    document.body.classList.toggle("escuro");
}

