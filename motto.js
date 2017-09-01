
	var timer = setInterval(refresh, 5000);

	var motto = [
	"una criptomoneda bien bonita", 
	"le chauché proyecté",
	"dejale caer to' el peso",
	"no se me ocurre que escribir",
	"por la razón o la chaucha",
	"aqui no se cae el sistema",
	"jhonny 100 chauchas"
	];

	function refresh () {
		var rnd = Math.floor(Math.random()*motto.length);
		$("#motto").html(motto[rnd]);
	}