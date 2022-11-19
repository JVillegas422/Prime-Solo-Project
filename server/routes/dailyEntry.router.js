const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// router.get('/', (req, res) => {

//   const query = `
//     SELECT * FROM user_prescriptions 
//     ORDER BY "prescription_name" ASC;
//   `;

//   pool.query(query)
//     .then( result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Get all user prescriptions', err);
//       res.sendStatus(500)
//     })

// });


router.get('/:id', (req, res) => {

  const sqlQuery = `
  SELECT * FROM daily_entry
  WHERE id = $1;
  `;

  const sqlParams = [id];

  pool.query(sqlQuery, sqlParams)
      .then(result => {
          res.send(result.rows[0]);
      })
      .catch(error => {
          console.log('error in get request', error)
          res.sendStatus(500);
      })

})

router.post('/', (req, res) => {
  let user_id = req.user.id;
  let newEntry = req.body;

  const sqlQuery = `
  INSERT INTO "daily_entry" 
    ("user_id", "prescription_name", "prescription_amount", "tstz", "quantity", "notes")
  VALUES 
    ($1, $2, $3, $4, $5, $6);
  `;

  const sqlParams = [
    user_id,
    newEntry.prescription_name,
    newEntry.prescription_amount,
    newEntry.tstz,
    newEntry.quantity,
    newEntry.notes,
  ];

  pool.query(sqlQuery, sqlParams)
      .then(() => {
          res.sendStatus(201);
      })
      .catch(error => {
          console.error('error adding in medform', error);
          res.sendStatus(500)
      });
});

module.exports = router;
