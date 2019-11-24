function Quiz(questions) {
    this.score =0;
    this.score1=this.score;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score=this.score+3;
    }
    else{
        this.score--;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex +1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
var questions = [
    new Question("Washing soda is the common name for", ["Sodium carbonate", "Calcium bicarbonate","Sodium bicarbonate", "Calcium carbonate"], "Sodium carbonate"),
    new Question("Which of the gas is not known as green house gas?", ["Methane", "Nitrous oxide", "Carbon dioxide", "Hydrogen"], "Hydrogen"),
    new Question("Under Akbar, the Mir Bakshi was required to look after", ["military affairs", "the state treasury","the royal household", "the land revenue system"], "military affairs"),
    new Question("The treaty of Srirangapatna was signed between Tipu Sultan and",["Robert Clive", "Cornwallis","Dalhousie","Warren Hastings"],"Cornwallis"),
    new Question("The Vedic deity Indra is the God of",["Wind", "Eternity","Rain and Thunder","Fire"], "Rain and Thunder"),
    new Question("The Parliament of India cannot be regarded as a sovereign body because",["it can legislate only on subjects entrusted to the Centre by the Constitution", "it has to operate within the limits prescribed by the Constitution","the Supreme Court can declare laws passed by parliament as unconstitutional if they contravene the provisions of the Constitution","All of the above"],"All of the above"),
    new Question("Washing soda is the common name for", ["Sodium carbonate", "Calcium bicarbonate","Sodium bicarbonate", "Calcium carbonate"], "Sodium carbonate"),
    new Question("The minimum age to qualify for election to the Lok Sabha is", ["25 years", "21 years","35 years", "18 years"], "25 years"),
    new Question("Most modern TV's draw power even if turned off. The circuit the power is used in does what function?", ["Sound","Remote control","Color balance","High voltage" ],  "Remote control")

];
 
var quiz = new Quiz(questions);
populate();