window.addEventListener("load", function(){
    foco();
});

function foco(){
    let switchPrendido = false;
    const boton = document.querySelector(".switch");
    const focoArriba = document.querySelector(".foco-arriba");
    const focoAbajo = document.querySelector(".foco-abajo");

    boton.addEventListener("click", function(){
        if(switchPrendido){
            boton.classList.remove("on");
            focoArriba.classList.remove("focoOn");
            focoAbajo.classList.remove("focoOn");
        }else{
            boton.classList.add("on");
            focoArriba.classList.add("focoOn");
            focoAbajo.classList.add("focoOn");
        }
        switchPrendido = !switchPrendido;
    });
}

