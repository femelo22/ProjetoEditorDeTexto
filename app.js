var mostrarImagem = false;
var modoEdicao = true;


function ativarEditor(){ //está função ativa o modo de edição do iframe
    richTextField.document.designMode = 'On';
}

function execCmd (command){
    richTextField.document.execCommand(command, false, null); //ou apenas ('bold')
}

function execCommandWithArg (command, arg){//ativa os select's e as cores
    richTextField.document.execCommand(command, false, arg);
}

function toggleSource (){
    if(mostrarImagem){
        richTextField.document.getElementsByTagName('body')[0].innerHTML = richTextField.document.getElementsByTagName('body')[0].textContent;
        mostrarImagem = false;
    }else{
        richTextField.document.getElementsByTagName('body')[0].textContent = richTextField.document.getElementsByTagName('body')[0].innerHTML;
        mostrarImagem = true;
    }
}

function toggleEdit (){
    if(modoEdicao){
        richTextField.document.designMode = 'Off';
        modoEdicao = false;
    }else{
        richTextField.document.designMode = 'On';
        modoEdicao = true;
    }
}
