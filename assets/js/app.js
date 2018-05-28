
/*Imagina que estás pidiendo comida en un restaurante. Tu plato favorito es ceviche, así que lo elegirías si está en el menú. Si no hay ceviche, elegirías tacos al pastor. Si eso no está, te irías por empanada chilena. En el caso raro que ninguna de esas opciones esté disponible, te irías por una hamburguesa. Escribe una función, que de acuerdo a la disponibilidad de los platos en el menú, decidas qué ordenar. */

function MyFavouriteFood(){
	var order = promt("¿Que deseas ordenar?");
	var food = document.getElementById("question1").value;
	if(food.toLowerCase() == "ceviche"){
		
	}
}


/*function newFunction(){
	var y = document.getElementById("game").value;
	if(y.toLowerCase() == "s"){
		document.getElementById("quizz").style.display = "block";
	}else{
		document.getElementById("warningBlock") = "Bueno Chao";
	}

	}

function lastFunction(){
	var questionOne = document.getElementById("question1").value;
	if(questionOne.toLowerCase()=="Peru"){
		document.getElementById("rigthAnswerText").innerHTML = document.getElementById("rigthAnswerText").innerHTML + "<div class="answer">" +   "<p>¡Muy Bien!</p>"
		"</div>";
	}else{
     	document.getElementById("wrongAnswerText").innerHTML = document.getElementById("wrongAnswerText").innerHTML +  "<div class="answer">" + "    <p>laboratoria se fundo en Peru</p>"
     	"</div>";
	}

   var questionTwo = document.getElementById("question2").value;
	if(questionTwo.toLowerCase()=="4"){
		document.getElementById("rigthAnswerText").innerHTML = document.getElementById("rigthAnswerText") + "<div class="answer">" +"  <p>¡Muy Bien!</p>"
		"</div>";

	}else{
     	document.getElementById("wrongAnswerText").innerHTML = document.getElementById("wrongAnswerText").innerHTML + "    <p>Laboratoria opera en 4 paises</p>";
	}	
	}

	
function finally(){
	document.getElementById("scoreboard");
}