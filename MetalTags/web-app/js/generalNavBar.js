
/*SCRIPT DA BARRA DE NAVEGACAO (Modifica a cor dos itens clicados*/
$(".nav-button").click(function(){
	$(".nav-button").removeClass("active");
	$(this).addClass("active");
});
