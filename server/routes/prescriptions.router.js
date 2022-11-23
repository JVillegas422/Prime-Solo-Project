const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('GET user prescriptions');
    let user_id = req.user.id;
    const sqlParams = [user_id];

    const sqlQuery = `
        SELECT "id", "prescription", "dosage", "count", "description" FROM "prescriptions"
        WHERE "user_id" = $1
        ORDER BY "prescription";
    `;

    pool.query(sqlQuery, sqlParams)
        .then((dbRes) => {
            res.send(dbRes.rows);
            console.log(dbRes.rows);
        })
        .catch((err) => {
            console.log('Error in prescription database query', err);
        });
});

router.post('/', (req, res) => {
    let user_id = req.user.id;
    let newPrescription = req.body;
  
    const sqlQuery = `
    INSERT INTO "prescriptions" 
      ("user_id", "prescription", "dosage", "count", "description")
    VALUES 
      ($1, $2, $3, $4, $5);
    `;
  
    const sqlParams = [
      user_id,
      newPrescription.prescription,
      newPrescription.dosage,
      newPrescription.count,
      newPrescription.description,
    ];
  
    pool.query(sqlQuery, sqlParams)
        .then(() => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.error('Error adding prescription', error);
            res.sendStatus(500)
        });
  });

  // GET single item
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    // Get all of the prescriptions in the table
    const sqlText = `
        SELECT * FROM "prescriptions" 
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
router.put('/:id', (req, res) => {
  let idToUpdate = req.params.id;

  const sqlQuery = `
  UPDATE "prescriptions"
  SET
    "prescription" = $1, 
    "description" = $2, 
    "dosage" = $3, 
    "count" = $4 
  WHERE
    "id" = $5;
  `;

  const sqlValues = [
    req.body.prescription,
    req.body.description,
    req.body.dosage,
    req.body.count,
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
    DELETE FROM "prescriptions" 
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