const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('GET all entries');
    let user_id = req.user.id;
    const sqlParams = [user_id];

    const sqlQuery = `
        SELECT "id", "prescription_name", "prescription_amount", "addDate", "quantity", "notes" FROM "daily_entry"
        WHERE "user_id" = $1;    
    `;

    pool.query(sqlQuery, sqlParams)
        .then((dbRes) => {
            res.send(dbRes.rows);
            console.log(dbRes.rows);
        })
        .catch((err) => {
            console.log('Error making database query', err);
        });
});

router.post('/', (req, res) => {
  let user_id = req.user.id;
  let newEntry = req.body;

  const sqlQuery = `
  INSERT INTO "daily_entry" 
    ("user_id", "prescription_name", "prescription_amount", "addDate", "quantity", "notes")
  VALUES 
    ($1, $2, $3, $4, $5, $6);
  `;

  const sqlParams = [
    user_id,
    newEntry.prescription_name,
    newEntry.prescription_amount,
    newEntry.addDate,
    newEntry.quantity,
    newEntry.notes,
  ];

  pool.query(sqlQuery, sqlParams)
      .then(() => {
          res.sendStatus(201);
      })
      .catch(error => {
          console.error('error adding in daily entry form', error);
          res.sendStatus(500)
      });
});

module.exports = router;
