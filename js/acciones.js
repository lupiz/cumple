// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$ ('#siguiente_fecha') .on ('top' , function () { 
  navigator .vibrate (1000);
 });//  tap a btnvibrar
	
}); 
});

$(document).ready(function(e) {
	var nombre;
	$('#siguiente_nombre').click(function(e){
		nombre=$('#txtnombre').val();
		
		
	});//click siguiente nombre
	
	$('#siguiente_fecha').click(function(e){
		var fecha= new Date();
		

		fechaA = new Date(fecha.getFullYear() + '/' +(fecha.getMonth()+1) +'/'+ fecha.getDate());

		var diaC=$('#diacumple').val();
		var mesC=$('#mescumple').val();
		var yearC=$('#yearcumple').val();

		fechaC=new Date(fecha.getFullYear() +'/'+ mesC +'/'+ diaC);
		fechaCA = fechaC;
		

	
	if(fechaC > fechaA)
	{
       cuando=fechaC-fechaA;
	   faltan=((((cuando/1000)/60)/60)/24);
	  
	}
	else
	{
	fechaC=new Date((fecha.getFullYear()+1) +'/'+ mesC +'/'+ diaC);
	  cuando=fechaC-fechaA;
	   faltan=((((cuando/1000)/60)/60)/24);
	   
	}
	$('#Mnombre').text(nombre +' FALTAN');
		$('#Mdias').text(faltan);
		if (faltan==1)
		{
		$('#Mcumple').text('DIA PARA TU CUMPLE');
		}
		else
		{
			$('#Mcumple').text('DIAS PARA TU CUMPLE');
		}
		if (faltan <30)
		{
				
	$('#Mfelicidades').show();}

		edad=fecha.getFullYear()-yearC;
		if (fechaCA > fechaA)
		{
			edad=edad-1;
			$('#Medad').text('TIENES '+ edad  + ' AÑOS HOY');
		}
		else
		{
		$('#Medad').text('TIENES '+ edad  +  'AÑOS HOY');
		}
			function redondeo(numero, decimales)
{
var flotante = parseFloat(numero);
var resultado = Math.round(flotante*Math.pow(10,decimales))/Math.pow(10,decimales);
return resultado;
}
});// click sig fecha

	});//ready

