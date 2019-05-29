/*

var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher',	
};

var Person = function(name, yearOfBirth, job){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = function(){
	 console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');

john.calculateAge();

var jane = new Person('Jane', 1969,'designer');

var mark = new Person('Mark', 1948,'retired');


jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);




object.create

var personProto = {
	calculateAge: function(){
		console.log(2016 - this.yearOfBirth);
		}
	};


var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
	{
	name: {value: 'Jane'},
	yearOfBirth: {value: 1969},
	job:{value: 'designer'},
});





function game() {
	var score = Math.random() * 10;
	console.log(score >= 5);
}	

game();

/*
(function(goodluck){
var score = Math.random() * 10;
	console.log(score >= 5 - goodluck);	
})(5);
	
//

function retirement(retirementAge){
	var a = 'years left until retirement.';
	return function(yearOfBirth){
		var age = 2019 - yearOfBirth;
		console.log((retirementAge - age) + a) 
	} 
}

	
var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);	
retirementGermany(1990);
retirementIceland(1990);




function interviewQuestion(job){
	if (job === 'designer') {
		return function(name){
			console.log(name + ', can you please explain what UX design is?');
		}
	else if(job === 'teacher'){
		return function(name){
			console.log('What subject do you teach,' + name + '?');
	}	

	}  else {
		return function(name){
			console.log('Hello' + name + 'What do you do?');
	}	

	}

}
}



function findOutProfession(job){
			if  (job === undefined){
				console.log("Welcome, fellow citizen.")
			} else {
			a = 'Welcome fellow ' + job;
			console.log(a);
		}
		return function(name){
			if (job === 'designer') {
			console.log(name + ', can you please explain what UX design is?');
		}
			else if  (job === 'teacher'){
			console.log('What subject do you teach, ' + name + '?');
	}	
	  		else {
			console.log('Hello ' + name + "." + ' What do you do all day long?' + "Isn't it a bit tough?");
}
}
}

findOutProfession()("David"); 




//Lecture: Bind, Call and Apply


var John = {
	name: "John",
	age: 26,	
	job: "teacher",
	presentation: function(style, TimeOfDay){
		if(style === 'formal'){
			console.log('Good ' + TimeOfDay + 'Ladies and gentlemen.' + 'I \'m ' + this.name + '.' +
						'I\'m a ' + this.age + 'year old man.' + 'I\ am a' this.job + '.');

		} else if(style === 'friendly'){
			console.log('Hey! What\'s up?' + 'I\'m ' + this.name +
			 '.' + 'I\'m a '+ this.age + 'year old man.' + 
			  'I am a ' this.job + '.' + 'Have a nice' + TimeOfDay + '.');


		}


		}

	};

john.presentation('formal',
 'morning');	





var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
	var arrRes = [];
	for (i = 0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));	
}
	return arrRes;
}


function calculateAge(el){
	return 2016 - el;
}

function isFullAge(limit, el){
	return el >= limit;
}


var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);



//Quiz ch. 5


var Person = function(name, yearOfBirth, job){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = function(){
	 console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');

john.calculateAge();

var jane = new Person('Jane', 1969,'designer');

var mark = new Person('Mark', 1948,'retired');


jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);



///HERE MINE


//creating questions//

//function constructor//
var question = function theQuestion(questionitself, answers, corranswer){
	this.questionitself = "What day is it today?";
	this.answers = ['1: Today is a normal day.',
					 '2: Today is not a normal day.', 
					 '3:Today is a birthday.',];
	this.corranswer = 3;

}


	//more questions//
//array for answers for quest2

var ques2answers =  ['1: Jack London\'s.','2: William Shakesepare\'s.', '3:Forever Young Starik\'s.'];

var question2 = new question("Whoose birthday is it?", quest2answers, 3);

//array for answers for quest3
var ques3answers =  ['1: Not much.','2: Happy birthday!', '3: Nothing. Just another day.'];

var question3 = new question("What does it mean?", quest3answers, 2);

//store questions in an array//

var arrayOfQuestions = [this.questionitself, question2.questionitself, question3.questionitself];
	
	//show question and answers in console log.//

	//method for randomly choosing an answer

	 //get a random number//
	
	var randomNumber = Math.floor((Math.random()* Math.floor(max)

question.prototype.showAQuestion = function showRandomQues(max){

//show the chosen question
	if(randomNumber === 0){
	console.log(arrayOfQuestions[0]);
} else if(randomNumber === 1){
	console.log(arrayOfQuestions[1]);
} else {
	console.log(arrayOfQuestions[2]);
}
}

//call method to show questions 
question.showAQuestion(3);

/*
function choose(correct, false){
					 	if(promptanswer === 3){
					 		console.log('That is correct!');
					 	} else {
					 		console.log('Sorry.That is not correct.');
					 	}

					 }


*/


//try again

/*
(function(){

		var question = {
	theQuestion : "What is my favourite color?",
	answers : ['1 red','2 blue','3 different'], 
	correct : 1,	
}

var protoquestion = function(theQuestion, answers, correct){
	this.theQuestion = theQuestion
	this.answers = answers
	this.correct = correct 
}

var question2 = new protoquestion("What is the day today?", ["1 Monday", "2 Tuesday", "3 Wednesday"], 1);
var question3 = new protoquestion('What is the best film ever?',["1 Seven Samurai", "2 Snowhite", "3 Far from the Madding Crowd"], 3);

//show in console.log random question with answers
var randomquestion = function(max){
	return Math.floor((Math.random()*Math.floor(max))); 
}
var kostka = randomquestion(3);
//put in array 

questions = [question, question2, question3];


// show correct question in console.log

questions[kostka].showquesandanswer = function(kostka){
	console.log(questions[kostka].theQuestion);
	console.log(questions[kostka].answers);
}

questions[kostka].showquesandanswer(kostka);


//ask for correct answer by prompt

questions[kostka].correctanswer = parseInt(prompt("What is the correct answer? (enter 1-3)", ""));

//check if the number chosen is correct

questions[kostka].checkifcorrect = function(ans){
	if(ans === questions[kostka].correct){
		alert("correct answer!");
	} else
	alert("that is not correct!");
}

questions[kostka].checkifcorrect(questions[kostka].correctanswer);

})();


//EXPERT level

(function(){

		var question = {
	theQuestion : "What is my favourite color?",
	answers : ['1 red','2 blue','3 different'], 
	correct : 1,	
}

var protoquestion = function(theQuestion, answers, correct){
	this.theQuestion = theQuestion
	this.answers = answers
	this.correct = correct 
}

var question2 = new protoquestion("What is the day today?", ["1 Monday", "2 Tuesday", "3 Wednesday"], 1);
var question3 = new protoquestion('What is the best film ever?',["1 Seven Samurai", "2 Snowhite", "3 Far from the Madding Crowd"], 3);

//another try defining scoring

protoquestion.prototype.scorecorrect = 0;
protoquestion.prototype.scoreincorrect = 0;


//function for next question repetition

function nextQuestion(){

//show in console.log random question with answers
var randomquestion = function(max){
	return Math.floor((Math.random()*Math.floor(max))); 
}
var kostka = randomquestion(3);
//put in array 

questions = [question, question2, question3];


// show correct question in console.log

questions[kostka].showquesandanswer = function(kostka){
	console.log(questions[kostka].theQuestion);
	console.log(questions[kostka].answers);
}

questions[kostka].showquesandanswer(kostka);


//ask for correct answer by prompt

questions[kostka].correctanswer = (prompt("What is the correct answer? (enter 1-3)", ""));

if(questions[kostka].correctanswer !== "exit"){

//check if the number chosen is correct

questions[kostka].checkIfCorrectAndScore = function(ans){
	if(ans === questions[kostka].correct){
		alert("correct answer!");
		protoquestion.prototype.scorecorrect = +1;
		console.log(questions[kostka].scorecorrect);
	} else {	
	alert("that is not correct!");
	protoquestion.prototype.scoreincorrect = +1;
	console.log(questions[kostka].scoreincorrect);
}
}

questions[kostka].checkIfCorrectAndScore(parseInt(questions[kostka].correctanswer));
} else {
	return false;
}
nextQuestion();
}
nextQuestion();

})();


*/

//closures again//
//write this as a closure function//
/*
var personProto = {
	calculateAge: function(){
		console.log(2016 - this.yearOfBirth);
		}
		};


var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
	{
	name: {value: 'Jane'},
	yearOfBirth: {value: 1969},
	job:{value: 'designer'},
});
*/
/*
function interviewQuestion(job){
	if (job === 'designer') {
		return function(name){
			console.log(name + ', can you please explain what UX design is?');
		}
	else if(job === 'teacher'){
		return function(name){
			console.log('What subject do you teach,' + name + '?');
	}	

	} else{
		return function(name){
			console.log('Hello' + name + 'What do you do?');
	}	

	}

}
}



function interviewQuest(job){
	a = job;
	return function(name){
		if (job === 'designer') {
			console.log(name + ', can you please explain what UX design is?');
		}
	else if(job === 'teacher'){
			console.log('What subject do you teach,' + name + '?');
	}  else {
			console.log('Hello' + name + 'What do you do?');
	}

}
}

var teach = interviewQuest("designer")("josh");

*/
//budget cotroller
var budgetController = (function(){

	//some code


})();

    //UI controller 

var UIcontroller = (function() {

	//some code
})();


    //global app controller

var controller = (function(budgetCtrl, UICtrl){

	// 1.Get the field input data

	// 2. Add the item to the budget controller

	// 3. Add the item to the UI

	// 4.Calculate the budget

	// 5. Display the budget on the UI


})(budgetController, UIcontroller);








