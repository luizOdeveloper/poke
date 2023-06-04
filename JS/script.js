$ = document.querySelector.bind(document); 

function abrirMenu(){
    let elemento = "#body";

    let largura = $(elemento).clientWidth;

    let menu_compra = document.getElementById('menuOculto');
    let container_menu = document.getElementById('container');

    if(largura > 1000){
        container_menu.style.display="flex"
        container_menu.style.width="600px"
        menu_compra.style.width="600px";
    }

    else{
        container_menu.style.display="flex"
        menu_compra.style.transition="0.10s";
        menu_compra.style.width="100%";
    }
}

function fecharmenu(){
    document.getElementById('menuOculto').style.width="0px";
}