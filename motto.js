
	var timer = setInterval(refresh, 5000);

	var motto = [
	"Una criptomoneda bien bonita", 
	"Le chauché proyecté",
	"dejale caer to' el peso",
	"Por la razón o la chaucha",
	"Aquí no se cae el sistema",
	"リサフランク420 / 現代のコンピュー",
	"Johnny 100 Chauchas",
	"Make Chaucha Great Again"
	];

	function refresh () {
		var rnd = Math.floor(Math.random()*motto.length);
		var rnd_past = -1;

		if(rnd != rnd_past) {
			$("#motto").html(motto[rnd]);
			rnd_past = rnd;
		}
		
	}