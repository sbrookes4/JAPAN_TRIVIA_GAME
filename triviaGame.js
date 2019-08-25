$("#activityBox").hide();
$(".moot").hide();
var score = 0;
var time = 60;
var countdownTimer = {}; 
$("#countdown").html(time);

function trivia(){

$("#activityBox").show();
$("#readyImageContainer").hide();


	countdownTimer = setInterval(function(){
		if(time === 0){
			clearInterval(countdownTimer);

			var q1UserAnswer = document.forms.question1.a.value;
			//alert("the user answered " + q1UserAnswer);
			if(q1UserAnswer === "04"){
				//this is right
				$('#rightWrong1').html("Tokyo!!! That's right!");
				score = score + 1;
			} else {
				$('#rightWrong1').html("The right answer is Tokyo.");
			}


			var q2UserAnswer = document.forms.question2.a.value;

			if(q2UserAnswer === "2"){
				//this is right
				$('#rightWrong2').html("The Shinkansen. That's right!");
				score = score + 1;
			} else {
				$('#rightWrong2').html("The right answer is The Shinkansen.");
			}


			var q3UserAnswer = document.forms.question3.a.value;

			if(q3UserAnswer === "7"){
				//this is right
				$('#rightWrong3').html("Mt. Fuji. That's right!");
				score = score + 1;
			} else {
				$('#rightWrong3').html("The right answer is Mt. Fuji.");
			}


			var q4UserAnswer = document.forms.question4.a.value;

			if(q4UserAnswer === "8"){
				//this is right
				$('#rightWrong4').html("That's right. Hyundai is Korean.");
				score = score + 1;
			} else {
				$('#rightWrong4').html("The right answer is Hyundai.");
			}



			var q5UserAnswer = document.forms.question5.a.value;

			if(q5UserAnswer === "12"){
				//this is right
				$('#rightWrong5').html("That's right! Hokkaido is.");
				score = score + 1;
			} else {
				$('#rightWrong5').html("Hokkaido is the northernmost island of Japan.");
			}


			var q6UserAnswer = document.forms.question6.a.value;

			if(q6UserAnswer === "19"){
				//this is right
				$('#rightWrong6').html("The Tokyo Sky Tree! That's correct!");
				score = score + 1;
			} else {
				$('#rightWrong6').html("The correct answer is the Tokyo Sky Tree.");
			}


			var q7UserAnswer = document.forms.question7.a.value;

			if(q7UserAnswer === "21"){
				//this is right
				$('#rightWrong7').html("WOW! You knew! Kimchi isn't Japanese.");
				score = score + 1;
			} else {
				$('#rightWrong7').html("Kimchi is a dish from Korea.");
			}

			var q8UserAnswer = document.forms.question8.a.value;

			if(q8UserAnswer === "27"){
				//this is right
				$('#rightWrong8').html("You know martial arts! Wing Chun isn't Japanese.");
				score = score + 1;
			} else {
				$('#rightWrong8').html("Wing Chun came from China.");
			}

			var q9UserAnswer = document.forms.question9.a.value;

			if(q9UserAnswer === "29"){
				//this is right
				$('#rightWrong9').html("You know kanji!!! 山 (yama) means mountain in Japanese.");
				score = score + 1;
			} else {
				$('#rightWrong9').html("山 (yama) means mountain in Japanese.");
			}

			var q10UserAnswer = document.forms.question10.a.value;

			if(q10UserAnswer === "32"){
				//this is right
				$('#rightWrong10').html("You know kanji well!!! 川 (kawa/gawa) means river in Japanese.");
				score = score + 1;
			} else {
				$('#rightWrong10').html("川 (kawa/gawa) means river in Japanese.");
			}
				$(".moot").show();
				$("#scoreText").html("You got " + score + " out of 10 right! Check out your answers!"    );
				//$("#SCORE").html(score);

		} else {
			time = time - 1;
		}
		$("#countdown").html(time);	


	}, 1000);

}



