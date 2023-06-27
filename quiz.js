/*	Mohammed Mufeed K K
	Reg no: 12010633 
	Roll no: K20NSA32*/

(function() 
 {
  var allQuestions = [{
    question: "Who is making the Web standards?",
    options: ["Google", "The WWW Consortium", "Mozilla", "Microsoft"],
    answer: 1
  }, {
    question: "Choose the correct HTML element for the largest heading:",
    options: ["h1", "h2", "h5", "h6"],
    answer: 0
  }, {
    question: "Which character is used to indicate an end tag?",
    options: [">", "^", "#","/"],
    answer: 3
  },{
    question: "Which of the following tag represents a section of the document intended for navigation in HTML5?",
    options: ["footer", "nav", "section", "bottom"],
    answer: 1
  }, {
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: ["title", "src", "alt", "longdesc"],
    answer: 2
  },{
    question: "Fundamental HTML Block is known as ___________",
    options: ["HTML Body", "HTML Tag", "HTML Element", "HTML File"],
    answer: 1
  },{
    question: "Graphics defined by SVG is in which format?",
    options: ["HTML", "XML", "CSS", "JS"],
    answer: 1
  },{
    question: "In HTML, onblur and onfocus are:",
    options: ["Style Attributes", "HTML elements", "Event attributes", "Style elements"],
    answer: 2
  },{
    question: "Which input type defines a slider control?",
    options: ["range", "control", "search", "slide"],
    answer: 0
  },{
    question: "Which of the following attributes is used to add link to any element?",
    options: ["newref", "ref", "link", "href"],
    answer: 3
    }];
 
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('You must select an answer !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();