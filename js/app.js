var questions = 
	[{id:1, 
	question:"1. What is the exact time of the men’s 100m sprint world record?", 
	options: [{value: 9.67, correct: false}, 
	{value: 9.58, correct: true}, 
	{value: 9.62, correct: false}, 
	{value: 9.79, correct: false}]}, 
	{id:2, 
	question: "2. This sport participated the first and final time in the 1900’s Summer Olympics, but it will be reintroduced in 2024 Summer Olympics. What’s the name of the sport?", 
	options: [{value: "Baseball", correct: false}, 
	{value: "Chess", correct: false}, 
	{value: "Cricket", correct: true}, 
	{value: "Roman wrestling", correct: false}]},
	{id:3, 
	question: "3. Who’s the NBA’s all-time scorer?", 
	options: [{value: "Michael Jordan", correct: false}, 
	{value: "Wilt Chamberlain", correct: false}, 
	{value: "Kareem Abdul-Jabbar", correct: true}, 
	{value: "Kobe Bryant", correct: false}]},
	{id:4, 
	question: "4. Everybody knows that the New York Yankees have the most World Series wins. But who is second on that list?", 
	options: [{value: "San Francisco Giants", correct: false}, 
	{value: "Oakland Athletics", correct: false}, 
	{value: "Boston Red Sox", correct: false}, 
	{value: "St. Louis Cardinals", correct: true}]},
	{id:5,
	question: "5. The L.A. Galaxy is the team that has won the most MLS Cups. However, what team has won the first MLS Cup? Hint: The Major League Soccer was founded in 1996.",
	options: [{value: "D.C. United", correct: true},
	{value: "Chicago Fire", correct: false},
	{value: "Kansas City Wizards", correct: false},
	{value: "Houston Dynamo", correct: false}]}]

var trackIndex = 0;
var score = 0;
$(document).ready(function() {
	// $(".question").click(function() {
	// 	var id = $(this).data("id");
	// 	for (var i = 0; i < questions.length; i++) {
	// 		if (id == questions[i].id) {

	// 			console.log(questions[i].question);	
	// 		}
	// 	}
	// })

	$('button').click(function() {
		$('.mainbox h2').hide();
		$('button').hide();
		$('.mainbox > p').text(questions[trackIndex].question);
		for (var i = 0; i < questions[trackIndex].options.length; i++) {
			var option = questions[trackIndex].options[i].value;
			var radioBtn = $("<input type='radio' name='answer1' value='" + option + "' data-value='" + option + "''>'" + option + "'<br>'")
			radioBtn.appendTo('#ans-choice');
		}
		$('#check-ans').show();


	})

	$('#check-ans').click(function() {
		var answer = $('#ans-choice input:checked').val();

		$('#explain').show();
		if (questions[trackIndex] !== undefined) {

		
			for (var i = 0; i < questions[trackIndex].options.length; i++) {
				if (questions[trackIndex].options[i].correct == true) {
					var correctAns = questions[trackIndex].options[i].value
					$('#explain').empty();

					if (answer == correctAns) {

						$('#explain').append('<p>'+'<span>Correct!</span> Usain Bolt holds the world record in men\'s 100m sprint. He has achieved this triumph in Berlin on August 16, 2009.'+'</p>');
						$('#explain').css('background-color', 'rgb(56, 146, 179)');				

					}

					else {
						$('#explain').append('<p>'+'Incorrect!'+'</p>');
						$('#explain').css('background-color', 'deeppink');
						$('#explain').append('<span id="scoreCheck">'+score+'</span>' + '/ '+'<span id="numQ">4</span>');
						$('#numQ').css('color', 'rgb(56, 146, 179)');
					}

					if (trackIndex === 1 && answer == correctAns) {
						
						$('#explain').empty();

						$('#explain').append('<p>'+'<span>Correct!</span> The 1900 Summer Olympics were held in France. The only two teams that have competed were Great Britain and the host France, in which the former had succeeded.'+'</p>');
					}

					else if (trackIndex === 2 && answer == correctAns) {
							
							$('#explain').empty();

							$('#explain').append('<p>'+'<span>Correct!</span> Kareem Abdul-Jabbar has scored 38,387 points in his NBA career. Second is Karl Malone with 36,928, The "Black Mamba" is third with 33,226 and MJ is forth on the All-time scoring list with 32,292.'+'</p>');
					}

					else if (trackIndex === 3 && answer == correctAns) {

							$('#explain').empty();

							$('#explain').append('<p>'+'<span>Correct!</span> The New York Yankees have won 27 titles, accounting for 25% of all series played and 43% of the wins by American League teams. The St. Louis Cardinals have won 11 World Series (10%) and 24% of the 46 National League victories.'+'</p>');
					}
					if (answer == correctAns) {
						score++;
						$('#explain').append('<span id="scoreCheck">'+score+'</span>' + '/ '+'<span id="numQ">5</span>');
					}
				}
			}
		}

		trackIndex++;
		var addNextBtn = '<a id="next" href="#" data-track-index="'+ trackIndex +'"><i class="fa fa-share"></i>&nbspNext question</a>';
		$('#next-container').empty();
		$('#next-container').append(addNextBtn);
		// $('#next').data('track-index', trackIndex);
		// console.log(trackIndex);
		$('#next').click(function(event) {
			$('#explain').hide();
			var index = $(this).data('track-index');
			console.log(index);

			if (questions[index] == undefined) {
					$('#next-container').empty();
				}
			else {
				$('#ans-choice').empty();
				$('.mainbox > p').text(questions[index].question);

				for (var i = 0; i < questions[index].options.length; i++) {
					var option = questions[index].options[i].value;
					var radioBtn = $("<input type='radio' name='answer1' value='" + option + "' data-value='" + option + "''>'" + option + "'<br>'")
					radioBtn.appendTo('#ans-choice');
				
				}
			}

			event.preventDefault();
		})
	})
})