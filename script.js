import http from 'k6/http';
import { sleep, check } from 'k6';

// const url = 'http://localhost:4000/qa/questions/10'
// const url = 'http://localhost:4000/qa/questions/10/answers'
// const url = 'http://localhost:4000/qa/questions/10/helpful'
// const url = 'http://localhost:4000/qa/answers/259/helpful'
// const url = 'http://localhost:4000/qa/questions/10/report'
const url = 'http://localhost:4000/qa/answers/259/report'

// export default function() {
//   http.get(url);
//   sleep(1);
// }

// export default function() {
//   let data = {
//     question_body: 'where were these made?',
//     asker_name: 'kenny_g',
//     asker_email: 'kgceltics25@gmail.com',
//     product_id: 10,
//     question_helpfulness: 2,
//     reported: 0
//   }
//   http.post(url, JSON.stringify(data),
//   {headers: {'Content-type': 'application/json'}})
// }

// export default function() {
//   let data = {
//     question: 10,
//     body: 'these are made in the USA',
//     answerer_name: 'sandra_d',
//     answerer_email: 'sdominca@gmail.com',
//     helpfulness: 0
//   }
//   http.post(url, JSON.stringify(data),
//   {headers: {'Content-type': 'application/json'}})
// }

export default function () {
  let res = http.put(url);
  check(res, { 'status was 204': (r) => r.status == 204 });
  sleep(1);
}

// export let options = {
//   stages: [
//     { duration: '2m', target: 100 },
//     { duration: '5m', target: 100 },
//     { duration: '2m', target: 200 },
//     { duration: '5m', target: 200 },
//     { duration: '2m', target: 300 },
//     { duration: '5m', target: 300 },
//     { duration: '2m', target: 400 },
//     { duration: '5m', target: 400 },
//     { duration: '10m', target: 0 },
//   ],
// }

// export default function() {
//   const BASE_URL = 'http://localhost:4000'
//   let responses = http.batch([
//     [
//       'GET',
//       `${BASE_URL}/qa/questions/10`,
//       null
//     ],
//     [
//       'GET',
//       `${BASE_URL}/qa/questions/10/answers`,
//       null
//     ],
//     [
//       'GET',
//       `${BASE_URL}/qa/questions/9`,
//       null
//     ],
//     [
//       'GET',
//       `${BASE_URL}/qa/questions/9/answers`,
//       null
//     ],
//     [
//       'GET',
//       `${BASE_URL}/qa/questions/8`,
//       null
//     ],
//     [
//       'GET',
//       `${BASE_URL}/qa/questions/8/answers`,
//       null
//     ],
//     [
//       'GET',
//       `${BASE_URL}/qa/questions/7`,
//       null
//     ],
//     [
//       'GET',
//       `${BASE_URL}/qa/questions/7/answers`,
//       null
//     ]
//   ])
//   sleep(1)
// }