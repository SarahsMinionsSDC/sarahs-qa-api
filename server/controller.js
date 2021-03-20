const dbhelpers = require('../database/dbhelpers.js')

const controller = {
  getQuestions: (req, res) => {
    dbhelpers.getQuestions(req, (err, results) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(results.rows)
      }
    })
  },
  getAnswers: (req, res) => {
    dbhelpers.getAnswers(req, (err, results) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(results.rows)
      }
    })
  },
  postQuestion: (req, res) => {
    dbhelpers.postQuestion(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },
  postAnswer: (req, res) => {
    dbhelpers.postAnswer(req, (err, data) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(data)
      }
    })
  },
  voteQuestionHelpful: (req, res) => {
    dbhelpers.voteQuestionHelpful(req, (err, data) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(204).send('NO CONTENT')
      }
    })
  },
  voteAnswerHelpful: (req, res) => {
    dbhelpers.voteAnswerHelpful(req, (err, data) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(204).send('NO CONTENT')
      }
    })
  },
  reportQuestion: (req, res) => {
    dbhelpers.reportQuestion(req, (err, data) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(204).send('NO CONTENT')
      }
    })
  },
  reportAnswer: (req, res) => {
    dbhelpers.reportAnswer(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(204).send('NO CONTENT')
      }
    })
  }
}

module.exports = controller