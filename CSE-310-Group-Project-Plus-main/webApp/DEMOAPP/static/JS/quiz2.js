var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC, chD, eBlank;

// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
    {
        question: "What types of operations did we cover in Lesson 2?",
        a: "Addition, Subtraction, Multiplication, Division",
        b: "Addition, Subtraction, Multiplication, Division, Prime, Factorial Division, Modulus Division, Exponentiation",
        c: "Addition, Subtraction, Multiplication, Division, Modulus Division, Exponentiation, Floor Division",
        d: "Modulus Division, Exponentiation, Floor Division, Ceiling Division, Iteration, Addition, Subtraction, Multiplication, Division",
        answer: "C"
    },
    {
        question: "What is the result if you do the following: x = 5 * 6 + 3",
        a: "20",
        b: "33",
        c: "45",
        d: "NULL",
        answer: "B"
    },
    {
        question: "What is the result if you do the following: y = 50 % 3",
        a: "3",
        b: "30.33",
        c: "2",
        d: ".66667",
        answer: "C"
    },
    {
        question: "What is the result if you do the following: a = 20 // 15",
        a: "75%",
        b: "1.33333",
        c: "1",
        d: ".66667",
        answer: "C"
    },
    {
        question: "If I use Modulus Division, it will output the remainder as a decimal or percent",
        a: "True",
        b: "False",
        answer: "B"
    },
    {
        question: "What is the result if you do the following: b = 2 ** 4",
        a: "16",
        b: "8",
        c: "32",
        d: "1.6",
        answer: "A"
    },
];

function get(x){
    return document.getElementById(x);
}

// this function renders a question for display on the page
function renderQuestion(){
    test = get("test");
    if(pos >= questions.length){
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        get("test_status").innerHTML = "Test completed";
        // resets the variable to allow users to restart the test
        pos = 0;
        correct = 0;
        // stops rest of renderQuestion function running when test is completed
        return false;
    }
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
        
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    chD = questions[pos].d;
    // display the question
    test.innerHTML = "<h3>"+question+"</h3>";
    // display the answer options
    // the += appends to the data we started on the line above
    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    }

function checkAnswer(){
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    // checks if answer matches the correct choice
    if(choice == questions[pos].answer){
        //each time there is a correct answer this value increases
        correct++;
    }
        
    // changes position of which character user is on
    pos++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
}

// Add event listener to call renderQuestion on page load event
 window.addEventListener("load", renderQuestion);

