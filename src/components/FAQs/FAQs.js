import React from 'react';
import './FAQs.css';
import { questions, answers } from "../../utilities/FAQ_questions_answers.js";

const FAQs = () => {
  const handleToggleAnswerFAQ = ({ target }) => {
    const regex = /\d+/;
    let selectedQuestion = target.id;
    let selectedId = selectedQuestion.match(regex)[0];
    let questionElement = document.getElementById(`answer_${selectedId}`);
    let plusElement = document.getElementById(`plus_input_${selectedId}`);
    let faqList = document.getElementById('faq-list');

    //Check all list items for answer-on class to remove if true
    for (let i = 0; i < faqList.childNodes.length; i++) {
      let currentAnswer = document.getElementById(`answer_${i + 1}`);
      let currentPlus = document.getElementById(`plus_input_${i + 1}`);

      //Take action if answer exists in for question other than current selection
      if (questionElement !== currentAnswer) {
        if (typeof (currentAnswer) != 'undefined'
          && currentAnswer != null
          && currentAnswer.classList.contains('answer-on')) {
          currentAnswer.classList.toggle('answer-on');
          currentAnswer.classList.toggle('answer-off');
          questionElement.classList.remove('animateAnswer');

          //Check all list items toggled + symbol to turn off if true
          if (currentPlus.hasAttribute('checked')) {
            currentPlus.removeAttribute('checked');
          } else {
            currentPlus.setAttribute("checked", true);
          }
        }
      }
    }

    //Toggle answer-on-off for selected list item
    questionElement.classList.toggle('animateAnswer');
    questionElement.classList.toggle('answer-on');
    questionElement.classList.toggle('answer-off');

    //Toggle + symbol for selected list item
    if (plusElement.id.includes(selectedId)) {
      if (plusElement.hasAttribute('checked')) {
        plusElement.removeAttribute('checked');
      } else {
        plusElement.setAttribute("checked", true);
      }
    }
  }

  const questionContainer = questions.map((question, index) => {
    return (
      <li id={`list_item_${index + 1}`} key={`question_${index + 1}`}>
        <div
          onClick={handleToggleAnswerFAQ}
          id={`question_container_${index + 1}`}
          className='question-container'>
          <div id={`question_text_box_${index + 1}`} className='questions-text-box'>
            <p id={`question_${index + 1}`} className='question'>{`${question}`}</p>
          </div>
          <div id={`plus_toggle_${index + 1}`} className="plus-toggle">
            <input readOnly type="checkbox" id={`plus_input_${index + 1}`} />
            <label htmlFor={`plus_input_${index + 1}`}></label>
          </div>
        </div>
        <p id={`answer_${index + 1}`} className='answer-off' key={`answer_${index + 1}`}>{`${answers[index]}`}</p>
      </li>
    )
  })

  return (
    <>
      <div className='nav-placeholder'></div>
      <div className='faqs-container'>
        <h1>FAQs</h1>
        <ol id='faq-list'>
          {questionContainer}
        </ol>
      </div>
    </>
  )
}

export default FAQs;