// server database connection logic here for users.


// const env = require('./.env')
// const env = require('./env.json')
// const pgp = require('pg-promise');
// const db = pgp(`${process.env.SQL_ELEPHANT}`);


const env = require('dotenv').config();
const pg = require('pg');
const conString = 'postgres://zkhccldk:n-pSTAJ2oWoRUlLaekuGGpDvLUr7Bp37@ruby.db.elephantsql.com:5432/zkhccldk'
const client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM users', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    client.end();
  });
});
 


//+++++ Old Code from example below +++++ 


//   switch (event.httpMethod) {
//     case 'GET':
//       const rowList = await db.query('SELECT * FROM users');
//       return {
//         statusCode: 200,
//         headers: {'content-type': 'application/json'},
//         body: JSON.stringify(rowList)
//       };
//     default:
//       return { statusCode: 405, body: '' }
//   }
// }