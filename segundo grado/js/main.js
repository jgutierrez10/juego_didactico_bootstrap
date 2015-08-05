var arreglo_nombre_numero = new Array(
		"Cero",
		"Uno",
		"Dos",
		"Tres",
		"Cuatro",
		"Cinco",
		"Seis",
		"Siete",
		"Ocho",
		"Nueve",
		"Diez"
	);

var arreglo_nombre_figura = new Array(
		"Cuadrado",
		"Círculo",
		"Triángulo",
		"Pirámide",
		"Rectángulo",
		"Rombo",
		"Óvalo",
		"Estrella"
	);

$(document).ready(function(){

	$("#boton-comenzar").on('click', function(){
		 $(location).prop('href',"assets/views/index-jugador.html");   
	});

	$("#jugar-numeros").on('click', function(){
		 $(location).prop('href',"../views/aprende_numeros.html");   		
	});

	$("#jugar-figuras").on('click', function(){
		 $(location).prop('href',"../views/aprende_figuras.html");   		
	});

	$(".reproduce_numero").on('click', function(){
		var i=0;
		var id = $(this).attr('id');
		for(i=0; i<arreglo_nombre_numero.length; i++){
			if(i == id)
			{
				$("#info_numeros").text(arreglo_nombre_numero[i])
				$("#info_numeros").show("low");
			}
		}
	});

	$(".reproduce_figura").on('click', function(){
		var i=0;
		var id = $(this).attr('id');
		for(i=0; i<arreglo_nombre_figura.length; i++){
			if(i == id)
			{
				$("#info_figuras").text(arreglo_nombre_figura[i]);
				$("#info_figuras").show("low");
			}
		}
	});
});