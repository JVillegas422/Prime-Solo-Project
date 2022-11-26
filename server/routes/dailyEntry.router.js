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


  // GET single item
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    // Get all of the prescriptions in the table
    const sqlText = `
        SELECT * FROM "daily_entry" 
        WHERE id = $1
        ORDER BY id ASC;
    `;
    const sqlParams = [id]; // $1 = req.params.id

    pool.query(sqlText, sqlParams)
        .then((result) => {
            res.send(result.rows[0]);   
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});


// Edit 
router.put('/:id/edit', (req, res) => {
  let idToUpdate = req.params.id;

  const sqlQuery = `
  UPDATE "daily_entry"
  SET 
  "prescription_name" = $1, 
  "prescription_amount" = $2, 
  "addDate" = $3,
  "quantity" = $4,
  "notes" = $5
  WHERE
    "id" = $6;
  `;

  const sqlValues = [
    req.body.prescription_name,
    req.body.prescription_amount,
    req.body.addDate,
    req.body.quantity,
    req.body.notes,
    idToUpdate
  ];

  pool.query(sqlQuery, sqlValues)
      .then((result) => {
          res.sendStatus(201);
      })
      .catch(error => {
          console.error(`Error making DB query ${sqlQuery}`, error);
          res.sendStatus(500)
      });
});

// Delete
router.delete('/:id', (req, res) => {
  let user_id = req.user.id;
  let idToDelete = req.params.id;

  const queryText = `
    DELETE FROM "daily_entry" 
    WHERE "id" = $1 AND "user_id" = $2;
  `;

  pool.query(queryText, [idToDelete, user_id])
      .then(() => {
          res.sendStatus(200);
      })
      .catch((err) => {
          console.log('Error in delete', err);
          res.sendStatus(500);
      });
});

module.exports = router;
