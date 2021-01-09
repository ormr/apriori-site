export const showAnswer = (icon, questionBlock, answerBlock) => {
  icon.classList.toggle('btn_rotated');
  answerBlock.classList.toggle('faq-item__answer_hidden');
  questionBlock.classList.toggle('faq-item__question_answer-shown');
  setTimeout(() => answerBlock.classList.toggle('faq-item__answer_shown'), 100);
};
