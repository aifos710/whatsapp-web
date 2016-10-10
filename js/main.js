window.addEventListener("load", cargarPagina)

function cargarPagina(){

	var listaContacs = document.getElementById("contacts");
	var primerChat = document.getElementById("primerChat");
	primerChat.addEventListener("click", selectPrimerChat);
	var inputMsj = document.getElementById("mensajes");
	inputMsj.addEventListener("keyPress", agregarMsj);
}

function selectPrimerChat(){ //al seleccionar rel primer chat apareceran el header del mismo y sus msj
	var labo = document.getElementById("primerChat");
	var conversa = document.getElementById("conversa");
	conversa.classList.remove("none");
	var header = document.getElementById("header");
	header.classList.remove("none");
}

	
function agregarMsj(e){
	
	var mensaje = document.createElement("div");
	mensaje.textContent = mensajes.value;
	var conversa = document.getElementById("conversa"); 

	if (e.keyCode == 13) {
		conversa.appendChild();//imprimir en section de msj
	} else {

	}
}

