
$(document).ready(function(){

	var cantidad_operaciones = 10;
	var contador_operaciones = 0;
	var resultado;

	$("#opcion_1").html("<");
	$("#opcion_2").html("=");
	$("#opcion_3").html(">");

	generarOperaciones();

	$(".btn_opciones").on('click', function(){
		var valorObtenido = $(this).val();
		var valor1 = parseInt($("#cuerpo_panel_1").html());
		var valor2 = parseInt($("#cuerpo_panel_2").html());

		if(comprobarResultado(valorObtenido,valor1,valor2)){
			$("#title_juego").html("Correcto");
			contador_operaciones++;

			if(comprobarCantidadOperaciones(cantidad_operaciones, contador_operaciones)){
				generarOperaciones();
			}else{
				$(".contenedor_juego").addClass("hide");
				$("#finalizar_juego").removeClass("hide");
				$("#my_modal").modal("show");
			}

		}else{
			$("#title_juego").html("Incorrecto");
			$(this).removeClass("btn-primary").addClass("btn-danger");
		}

	});

	$("#btn_comenzar").on('click', function(){
		$("#comenzar_juego").addClass("hide");
		$("#contenedor_juego").removeClass("hide");
	});

	$("#nuevo_juego").on('click', function(){
		$(".contenedor_juego").removeClass("hide");
		$("#finalizar_juego").addClass("hide");
		contador_operaciones = 0;
		generarOperaciones();
	});
});

function generarIndiceIcono(){
	var indice = Math.floor(Math.random() * ((arreglo_icono_figura.length - 1) - 0 + 1)) + 0;
	return indice;
}

function limpiarCampos(){
	$("#cuerpo_panel_1").html("");
	$("#cuerpo_panel_2").html("");
	$("#title_juego").html("");
	$("#opcion_1").removeClass("btn-danger").addClass("btn-primary");
	$("#opcion_2").removeClass("btn-danger").addClass("btn-primary");
	$("#opcion_3").removeClass("btn-danger").addClass("btn-primary");
}

function generarOperaciones(){
	limpiarCampos();

	if(generarProbabilidadIgualdad()){
		var aleatorio1 = Math.round(Math.random()*30);
		$("#cuerpo_panel_1").prepend(aleatorio1);	
		$("#cuerpo_panel_2").prepend(aleatorio1);

	}else{
		var aleatorio1 = Math.round(Math.random()*30);
		var aleatorio2 = Math.round(Math.random()*30);
		$("#cuerpo_panel_1").prepend(aleatorio1);
		$("#cuerpo_panel_2").prepend(aleatorio2);
	}
}

function comprobarResultado(signo, valor1, valor2){
	if(signo == "<"){
		if(valor1 < valor2){
			return true
		}
		return false;
	}
	else if(signo == "="){
		if(valor1 == valor2){
			return true;
		}
		return false;
	}
	else if(signo == ">"){
		if(valor1 > valor2){
			return true;
		}
		return false;
	}
	return false;
}

function generarProbabilidadIgualdad(){
	var valor = Math.floor(Math.random() * (40 - 1 + 1)) + 1;

	if(valor <= 10){
		return true;
	}
	return false;
}

function comprobarCantidadOperaciones(cantidad_op, contador_op){
	if(cantidad_op == contador_op){
		return false;
	}
	return true;
}
