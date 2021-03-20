const router = require('express').Router()
const controller = require('./controller.js')

router
  .route('/qa/questions/:product_id')
  .get(controller.getQuestions)
  .post(controller.postQuestion)

router
  .route('/qa/questions/:question_id/answers')
  .get(controller.getAnswers)
  .post(controller.postAnswer)

router
  .route('/qa/questions/:question_id/helpful')
  .put(controller.voteQuestionHelpful)

router
  .route('/qa/answers/:answer_id/helpful')
  .put(controller.voteAnswerHelpful)

router
  .route('/qa/questions/:question_id/report')
  .put(controller.reportQuestion)

router
  .route('/qa/answers/:answer_id/report')
  .put(controller.reportAnswer)

module.exports = router