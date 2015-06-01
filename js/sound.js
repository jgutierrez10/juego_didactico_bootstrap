//Arreglo para definir archivo segun el id del numero seleccionado
	var arreglo_sonido_numero = new Array(
		"../../sounds/numero_cero.mp3",
		"../../sounds/numero_uno.mp3",
		"../../sounds/numero_dos.mp3",
		"../../sounds/numero_tres.mp3",
		"../../sounds/numero_cuatro.mp3",
		"../../sounds/numero_cinco.mp3",
		"../../sounds/numero_seis.mp3",
		"../../sounds/numero_siete.mp3",
		"../../sounds/numero_ocho.mp3",
		"../../sounds/numero_nueve.mp3",
		"../../sounds/numero_diez.mp3"
	);

	var arreglo_sonido_figura = new Array(
		"../../sounds/figura_cuadrado.mp3",
		"../../sounds/figura_circulo.mp3",
		"../../sounds/figura_triangulo.mp3",
		"../../sounds/figura_piramide.mp3",
		"../../sounds/figura_rectangulo.mp3",
		"../../sounds/figura_rombo.mp3",
		"../../sounds/figura_ovalo.mp3",
		"../../sounds/figura_estrella.mp3"
	);

//<![CDATA[
// Definir lista de extensiones y el tipo de fichero de audio asociado. Puedes añadir más
	var html5_audiotypes={ 
		"mp3": "audio/mpeg",
		"mp4": "audio/mp4",
		"ogg": "audio/ogg",
		"wav": "audio/wav"
	}

	function createsoundbite(sound)
	{
		var html5audio=document.createElement('audio')
		if (html5audio.canPlayType){ //Comprobar soporte para audio HTML5
		for (var i=0; i<arguments.length; i++){
		var sourceel=document.createElement('source')
		sourceel.setAttribute('src', arguments[i])
		if (arguments[i].match(/.(w+)$/i))
		sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
		html5audio.appendChild(sourceel)
		}
		html5audio.load()
		html5audio.playclip=function(){
		html5audio.pause()
		//html5audio.currentTime=0
		html5audio.play()
		}
		return html5audio
		}
		else{
		return {playclip:function(){throw new Error('Su navegador no soporta audio HTML5')}}
		}
	}

	//Inicializar sonidos
	//var hover1 = createsoundbite('https://googledrive.com/host/0B3b6MFUtZc42dzVwTEdJM1JwZHc/silbido.mp3');
	//var hover2 = createsoundbite('https://googledrive.com/host/0B3b6MFUtZc42dzVwTEdJM1JwZHc/claxon.mp3');

	//Nótese que se pueden añadir ficheros con otras extensiones para mayor compatibilidad
	//var click1 = createsoundbite('../sounds/sonido.mp3');
	//]]>

$(document).ready(function(){
	
	$(".reproduce_numero").on('click', function(){
		var i=0;
		var id = $(this).attr('id');

		for(i=0; i<arreglo_sonido_numero.length; i++){
			if(i == id)
			{
				var click_numero = createsoundbite(arreglo_sonido_numero[i]);
				click_numero.playclip();				
			}
		}
	});

	$(".reproduce_figura").on('click', function(){
		var i=0;
		var id = $(this).attr('id');
		for(i=0; i<arreglo_sonido_figura.length; i++){
			if(i == id)
			{
				var click_figura = createsoundbite(arreglo_sonido_figura[i]);
				click_figura.playclip();				
			}
		}
	});
});
