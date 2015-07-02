$(document).ready(function(){
	var cantidad_operaciones = 5;
	var contador_operaciones = 0;
	var resultado;

	resultado = generarOperacion();


	$(".btn_opciones").on('click', function(){
		var valorObtenido = $(this).html();
		if(valorObtenido == resultado){
			$("#title_juego").html("Correcto");
			contador_operaciones++;

			if(comprobarCantidadOperaciones(cantidad_operaciones, contador_operaciones)){
				resultado = generarOperacion();
			}else{
				alert("juego terminado");
			}

		}else{
			$("#title_juego").html("Incorrecto");
			$(this).removeClass("btn-primary").addClass("btn-danger");
		}

	});
});

function generarOperacion(){
	var aleatorio1 = Math.round(Math.random()*20);
	var aleatorio2 = Math.round(Math.random()*20);
	var resultado = aleatorio1 + aleatorio2;
	
	limpiarCampos();

	for(i=0; i<aleatorio1; i++){
		$("#panel_op1").prepend('<img class="icon_operador" src="../../img/iconos/icon_auto.png"/>');
	}

	for(i=0; i<aleatorio2; i++){
		$("#panel_op2").prepend('<img class="icon_operador" src="../../img/iconos/icon_auto.png"/>');
	}

	$("#badge_op1").html(aleatorio1);
	$("#badge_op2").html(aleatorio2);

	generarResultadosAleatorios(resultado,1,5);

	return resultado;
}

function limpiarCampos(){
	$("#panel_op1").html("");
	$("#panel_op2").html("");
	$("#title_juego").html("");
	$("#opcion_1").removeClass("btn-danger").addClass("btn-primary");
	$("#opcion_2").removeClass("btn-danger").addClass("btn-primary");
	$("#opcion_3").removeClass("btn-danger").addClass("btn-primary");
	$("#opcion_4").removeClass("btn-danger").addClass("btn-primary");
	$("#opcion_5").removeClass("btn-danger").addClass("btn-primary");
}

function generarResultadosAleatorios(resultado, minimo , maximo){

	var indice = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
	var i = 0;

	while(i <= maximo){
		if(i == indice){
			$("#opcion_"+indice).html(resultado);
		}else{
			var ale = Math.round(Math.random()*20);
			$("#opcion_"+i).html(ale);
		}

		i++;
	}
}

function comprobarCantidadOperaciones(cantidad_op, contador_op){
	if(cantidad_op == contador_op){
		$(".contenedor_juego").addClass("hide");
		return false;
	}
	return true;
}
