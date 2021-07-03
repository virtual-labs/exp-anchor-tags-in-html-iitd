
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Q1. It is an HTML tag used to create hyperlinks. The tag identifies what is clicked on and where it links to.",
      answers: {
        a: "Anchor Tag &lt;a&gt; &lt;/a&gt;",
        b: "Beginning Tag &lt;html&gt;",
	c: "Ending Tag &lt;/p&gt;",
	d: "Break Tag &lt;/br&gt;"
      },
      correctAnswer: "a"
    },

    {
      question: "Q2.Why won't this anchor tag work?  &lt;a href=https://www.google.com/&gt;click here&lt;/a&gt;",
      answers: {
        a: "The link is incorrect. it should be ref, not href",
        b: "The URL is missing quotation marks",
	c: "There is no anchor tag in the code",
	d: "The href is missing a closing tag"
      },
      correctAnswer: "b"
    },

    {
      question: "Q3. Which is an attribute of Anchor tag?",
      answers: {
        a: "alt",
        b: "href",
        c: "URL",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
	
	{
      question: "Q4.  Which attribute contains the URL to a linked web page?",
      answers: {
        a: "src",
        b: "type",
        c: "href",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
	
	{
      question: "Q5. What is the correct HTML Code for creating a hyperlink?",
      answers: {
        a: "&lt;a href='vlab.co.in'›View Labs&lt;/a&gt;",
        b: "&lt;a&gt;View Labs&lt;/a&gt;",
        c: "&lt;a URL=vlab.co.in›View Labs&lt;/a&gt;",
        d: " &lt;a name=vlab.co.in›View Labs&lt;/a&gt;"
      },
      correctAnswer: "a"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
