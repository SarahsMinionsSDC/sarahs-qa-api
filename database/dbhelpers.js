const client = require('./index.js')

const dbhelpers = {
  getQuestions: (req, callback) => {
    let { page } = req.query
    let { count } = req.query
    if (page === undefined) {
      page = 1
    }
    if (count === undefined) {
       count = 5
    }
    let queryStr =
      `SELECT product_id, jsonb_agg(jsonb_build_object('question_id', question_id, 'question_body', question_body, 'questions_date', question_date, 'asker_name',asker_name, 'question_helpfulness', question_helpfulness, 'reported', reported)) as "results"
      FROM questions
      WHERE product_id=${req.params.product_id}
      GROUP BY questions.product_id LIMIT ${count} OFFSET ${(page - 1) * 20}`
    client.query(queryStr, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },
  getAnswers: (req, callback) => {
    let { page } = req.query
    let { count } = req.query
    if (page === undefined) {
      page = 1
    }
    if (count === undefined) {
       count = 5
    }
    let queryStr =
      `SELECT question, jsonb_agg(jsonb_build_object('answer_id', answer_id, 'body', body, 'date', date, 'answerer_name', answerer_name, 'helpfulness', helpfulness, 'photos', photos)) as "results"
      FROM answers
      WHERE question=${req.params.question_id}
      GROUP BY answers.question LIMIT ${count} OFFSET ${(page - 1) * 20}`
    client.query(queryStr, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },
  postQuestion: (req, callback) => {
    let queryStr =
      `INSERT INTO questions (question_body, asker_name, asker_email, product_id, question_helpfulness, reported) VALUES ('${req.body.question_body}', '${req.body.asker_name}', '${req.body.asker_email}', ${req.body.product_id}, ${0}, ${0})`
    client.query(queryStr, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },
  postAnswer: (req, callback) => {
    let queryStr = `INSERT INTO answers (question, body, answerer_name, answerer_email, helpfulness) VALUES ('${req.params.question_id}', '${req.body.body}', '${req.body.answerer_name}', '${req.body.answerer_email}', '${0}')`
    client.query(queryStr, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },
  voteQuestionHelpful: (req, callback) => {
    let queryStr = `UPDATE questions SET question_helpfulness=question_helpfulness+1 WHERE question_id=${req.params.question_id}`
    client.query(queryStr, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, err)
      }
    })
  },
  voteAnswerHelpful: (req, callback) => {
    let queryStr = `UPDATE answers SET helpfulness=helpfulness+1 WHERE answer_id=${req.params.answer_id}`
    client.query(queryStr, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, err)
      }
    })
  },
  reportQuestion: (req, callback) => {
    let queryStr = `UPDATE questions SET reported=1 WHERE question_id=${req.params.question_id}`
    client.query(queryStr, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, err)
      }
    })
  },
  reportAnswer: (req, callback) => {
    let queryStr = `UPDATE answers SET reported=1 WHERE answer_id=${req.params.answer_id}`
    client.query(queryStr, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, err)
      }
    })
  }
}

module.exports = dbhelpers