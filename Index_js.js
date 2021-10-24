
function ValidarCampos() {

    let corAlerta = "#FBBAAC";
    let corPadrao = "#FFF";

    let nome = document.getElementById('pnome');
    let cpf = document.getElementById('CPF');
    let end = document.getElementById('end');
    let tel = document.getElementById('tel');
    let cel = document.getElementById('cel');
    let num = document.getElementById('num');

    
    if(nome.value == ""){
        nome.style.backgroundColor = corAlerta;
        nome.focus();
        return;
    }
    if(cpf.value == ""){
        cpf.style.backgroundColor = corAlerta;
        cpf.focus();
        return;
    }
    if(tel.value == ""){
        tel.style.backgroundColor = corAlerta;
        tel.focus();
        return;
    }
    if(cel.value == "")
    {
        cel.style.backgroundColor = corAlerta;
        cel.focus();
        return;
    }
    if(end.value == "")
    {
        end.style.backgroundColor = corAlerta;
        end.focus();
        return;
    }
    if(num.value == ""){

        num.style.backgroundColor = corAlerta;
        num.focus();
        return;
    }
    

    //Apos validado irá perguntar se deseja enviar realmente o cadastro e colocar fundos em branco
    nome.style.backgroundColor = corPadrao;
    let confirmado = confirm("Podemos enviar seu cadastro?")
    if(confirmado == true){
        nome.value = "";
        cpf.value = "";
        end.value = "";
        tel.value = "";
        cel.value = "";

        window.location.href = 'enviado.html';
    }

}
