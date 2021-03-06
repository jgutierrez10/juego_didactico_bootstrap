var arreglo_icono_figura = new Array(
	"../../img/iconos/icon_auto.png",
	"../../img/iconos/icon_cereza.png",
	"../../img/iconos/icon_helado.png",
	"../../img/iconos/icon_manzana.png",
	"../../img/iconos/icon_patilla.png",
	"../../img/iconos/icon_tomate.png"
);

$(document).ready(function(){

	if($("#verificador").val() == 1){
		generar_op_suma();
	}
	else if($("#verificador").val() == 0){
		generar_op_resta();
	}else{
		alert("Undefined");
	}
});

function generarIndiceIcono(){
	var indice = Math.floor(Math.random() * ((arreglo_icono_figura.length - 1) - 0 + 1)) + 0;
	return indice;
}

function generar_op_suma(){
	var TAM_OPERACIONES = 5;
	var cont_operaciones = 0;
	var aleatorio1 = 0;
	var aleatorio2 = 0;
	var ruta_img;

	while(cont_operaciones < TAM_OPERACIONES)
	{
		ruta_img = arreglo_icono_figura[generarIndiceIcono()];

		$(".contenedor_operaciones_suma").append('<div id="tmp_row" class="row"></div');
		$("#tmp_row").attr('id', 'row_'+cont_operaciones);

		$("#row_"+cont_operaciones).append('<div id="tmp_panel_icon" class="col-md-3 panel_icon"></div>')
		$("#tmp_panel_icon").attr('id', 'panel_op1_'+cont_operaciones);

		$("#row_"+cont_operaciones).append('<div id="tmp_panel_icon" class="col-md-1 panel_operador"></div>')
		$("#tmp_panel_icon").attr('id', 'panel_sum_'+cont_operaciones);

		$("#row_"+cont_operaciones).append('<div id="tmp_panel_icon" class="col-md-3 panel_icon"></div>')
		$("#tmp_panel_icon").attr('id', 'panel_op2_'+cont_operaciones);

		$("#row_"+cont_operaciones).append('<div id="tmp_panel_icon" class="col-md-1 panel_operador"></div>')
		$("#tmp_panel_icon").attr('id', 'panel_igual_'+cont_operaciones);

		$("#row_"+cont_operaciones).append('<div id="tmp_panel_icon" class="col-md-3 panel_icon"></div>')
		$("#tmp_panel_icon").attr('id', 'panel_opr_'+cont_operaciones);

		while(1)
		{
			aleatorio1 = Math.round(Math.random()*10);
			aleatorio2 = Math.round(Math.random()*10);

			if(aleatorio1 > 0 && aleatorio2 > 0){
				break;
			}
		}

		for(i=0; i<aleatorio1; i++){
			$('#panel_op1_'+cont_operaciones).prepend('<img class="img_icon" src="'+ruta_img+'" />');
		}
		
		$('#panel_op1_'+cont_operaciones).append('<br><br><p id="tmp_badge" class="text-center numero_op"></p>');
		$("#tmp_badge").attr('id', 'badgeop1_'+cont_operaciones);

		$('#panel_sum_'+cont_operaciones).prepend('<img class="img_icon" src="../../img/iconos/icono_suma.png" />');

		for(i=0; i<aleatorio2; i++){
			$('#panel_op2_'+cont_operaciones).prepend('<img class="img_icon" src="'+ruta_img+'" />');
		}

		$('#panel_op2_'+cont_operaciones).append('<br><br><p id="tmp_badge" class="text-center numero_op"></p>');
		$("#tmp_badge").attr('id', 'badgeop2_'+cont_operaciones);

		$('#panel_igual_'+cont_operaciones).prepend('<img class="img_icon" src="../../img/iconos/icono_igual.png" />');

		for(i=0; i<(aleatorio1 + aleatorio2); i++){
			$('#panel_opr_'+cont_operaciones).prepend('<img class="img_icon" src="'+ruta_img+'" />');
		}
		$('#panel_opr_'+cont_operaciones).append('<br><p id="tmp_badge" class="text-center numero_op"></p>');
		$("#tmp_badge").attr('id', 'badgeopr_'+cont_operaciones);

		$(".contenedor_operaciones_suma").append('<hr>');

		aleatorio1 = 0;
		aleatorio2 = 0;
		cont_operaciones++;
	}
}

function generar_op_resta(){
	var TAM_OPERACIONES = 5;
	var cont_operaciones = 0;
	var aleatorio1 = 0;
	var aleatorio2 = 0;

	while(cont_operaciones < TAM_OPERACIONES)
	{
		ruta_img = arreglo_icono_figura[generarIndiceIcono()];

		$(".contenedor_operaciones_resta").append('<div id="tmp_row" class="row"></div');
		$("#tmp_row").attr('id', 'row_'+cont_operaciones);

		$("#row_"+cont_operaciones).append('<div id="tmp_panel_icon" class="col-md-3 panel_icon"></div>')
		$("#tmp_panel_icon").attr('id', 'panel_op1_'+cont_operaciones);

		$("#row_"+cont_operaciones).append('<div id="tmp_panel_icon" class="col-md-1 panel_operador"></div>')
		$("#tmp_panel_icon").attr('id', 'panel_res_'+cont_operaciones);

		$("#row_"+cont_operaciones).append('<div id="tmp_panel_icon" class="col-md-3 panel_icon"></div>')
		$("#tmp_panel_icon").attr('id', 'panel_op2_'+cont_operaciones);

		$("#row_"+cont_operaciones).append('<div id="tmp_panel_icon" class="col-md-1 panel_operador"></div>')
		$("#tmp_panel_icon").attr('id', 'panel_igual_'+cont_operaciones);

		$("#row_"+cont_operaciones).append('<div id="tmp_panel_icon" class="col-md-3 panel_icon"></div>')
		$("#tmp_panel_icon").attr('id', 'panel_opr_'+cont_operaciones);

		while(1){
			aleatorio1 = Math.round(Math.random()*10);
			aleatorio2 = Math.round(Math.random()*10);

			if((aleatorio1 > 0 && aleatorio2 > 0) && (aleatorio1 >= aleatorio2)){
				break;
			}
		}

		for(i=0; i<aleatorio1; i++){
			$('#panel_op1_'+cont_operaciones).prepend('<img class="img_icon" src="'+ruta_img+'" />');
		}

		$('#panel_op1_'+cont_operaciones).append('<br><br><p id="tmp_badge" class="text-center numero_op"></p>');
		$("#tmp_badge").attr('id', 'badgeop1_'+cont_operaciones);

		$('#panel_res_'+cont_operaciones).prepend('<img class="img_icon" src="../../img/iconos/icono_resta.png" />');

		for(i=0; i<aleatorio2; i++){
			$('#panel_op2_'+cont_operaciones).prepend('<img class="img_icon" src="'+ruta_img+'" />');
		}

		$('#panel_op2_'+cont_operaciones).append('<br><br><p id="tmp_badge" class="text-center numero_op"></p>');
		$("#tmp_badge").attr('id', 'badgeop2_'+cont_operaciones);

		$('#panel_igual_'+cont_operaciones).prepend('<img class="img_icon" src="../../img/iconos/icono_igual.png" />');

		for(i=0; i<(aleatorio1 - aleatorio2); i++){
			$('#panel_opr_'+cont_operaciones).prepend('<img class="img_icon" src="'+ruta_img+'" />');
		}

		$('#panel_opr_'+cont_operaciones).append('<br><br><p id="tmp_badge" class="text-center numero_op"></p>');
		$("#tmp_badge").attr('id', 'badgeopr_'+cont_operaciones);

		$(".contenedor_operaciones_resta").append('<hr>');

		cont_operaciones++;
	}
}