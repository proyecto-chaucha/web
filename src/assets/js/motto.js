let motto = [
	"Una criptomoneda bien bonita", 
	"Le chauché proyecté",
	"dejale caer to' el peso",
	"Por la razón o la chaucha",
	"Aquí no se cae el sistema",
	"リサフランク420 / 現代のコンピュー",
	"Johnny 100 Chauchas",
	"Make Chaucha Great Again"
]

function refresh () 
{
	let position = Math.floor(Math.random() * motto.length)
	let last_used = -1

	if(position != last_used) 
	{
		$("#motto").html(motto[position])
		last_used = position
	}
	
}

let timer = setInterval(refresh, 5000)
