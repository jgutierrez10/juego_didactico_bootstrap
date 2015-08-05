var arreglo_icono_figura = new Array(
	"../../img/iconos/icon_auto.png",
	"../../img/iconos/icon_cereza.png",
	"../../img/iconos/icon_helado.png",
	"../../img/iconos/icon_manzana.png",
	"../../img/iconos/icon_patilla.png",
	"../../img/iconos/icon_tomate.png"
);
var arreglo_tmp = Array();
var ruta_img = arreglo_icono_figura[generarIndiceIcono()];

$(document).ready(function(){

	var cantidad_operaciones = 10;
	var contador_operaciones = 0;
	var resultado;

	resultado = generarOperaciones();

	$(".btn_opciones").on('click', function(){
		var valorObtenido = $(this).html();
		if(valorObtenido == resultado){
			$("#title_juego").html("Correcto");
			contador_operaciones++;

			if(comprobarCantidadOperaciones(cantidad_operaciones, contador_operaciones)){
				ruta_img = arreglo_icono_figura[generarIndiceIcono()];
				arreglo_tmp.length = 0;
				resultado = generarOperaciones();
			}else{
				$("#contenedor_juego").addClass("hide");
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
		ruta_img = arreglo_icono_figura[generarIndiceIcono()];
		arreglo_tmp.length = 0;
		resultado = generarOperaciones();
	});
});

function generarIndiceIcono(){
	var indice = Math.floor(Math.random() * ((arreglo_icono_figura.length - 1) - 0 + 1)) + 0;
	return indice;
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

function generarOperaciones(){
	var aleatorio1 = Math.round(Math.random()*20);
	var aleatorio2 = Math.round(Math.random()*20);
	var resultado = aleatorio1 + aleatorio2;
	limpiarCampos();


	for(i=0; i<aleatorio1; i++){
		$("#panel_op1").prepend('<img class="icon_operador" src="'+ruta_img+'"/>');
	}

	for(i=0; i<aleatorio2; i++){
		$("#panel_op2").prepend('<img class="icon_operador" src="'+ruta_img+'"/>');
	}

	$("#badge_op1").html(aleatorio1);
	$("#badge_op2").html(aleatorio2);

	generarOpcionesOperacion(resultado,1,5);

	return resultado;
}

function generarOpcionesOperacion(resultado, minimo, maximo){
	var indice = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo; //posicion del resultado
	var i = 1;
	var x = 0;
	
	if(generarResultadosAleatorios(resultado, maximo)){
		arreglo_tmp[(indice-1)] = resultado;

		while(i <= maximo){
			$("#opcion_"+i).html(arreglo_tmp[(i-1)]);
			i++;
		}

	}else{
		alert("paso false");
	}
}

function generarResultadosAleatorios(resultado, numOperaciones){
	var limiteInferior = resultado - 10;
	var limitesuperior = resultado + 10;
	var contador_resultado = 0;
	var numAleatorio;

	while(contador_resultado < numOperaciones)
	{	
		while(1){
			numAleatorio = Math.floor(Math.random() * (limitesuperior - limiteInferior + 1)) + limiteInferior;
			if(numAleatorio >= 0 && numAleatorio != resultado && comprobarExistenciaNumero(numAleatorio) == true){
				break;
			}
		}	

		arreglo_tmp.push(numAleatorio);
		contador_resultado++;
	}
	return true;
}

function comprobarExistenciaNumero(numero){
	var indice = 0;

	if(arreglo_tmp.length > 0){
		while(indice < arreglo_tmp.length){
			if(arreglo_tmp[indice] == numero){
				return false;
			}
			indice++;
		}	
	}
	return true;
}

function comprobarCantidadOperaciones(cantidad_op, contador_op){
	if(cantidad_op == contador_op){
		return false;
	}
	return true;
}
