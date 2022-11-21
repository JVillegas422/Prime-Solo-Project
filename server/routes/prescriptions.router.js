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
      nenewPrescriptionwEntry.dosage,
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

  // router.get('/:id', (req, res) => {

//   const sqlQuery = `
//   SELECT * FROM daily_entry
//   WHERE id = $1;
//   `;

//   const sqlParams = [id];

//   pool.query(sqlQuery, sqlParams)
//       .then(result => {
//           res.send(result.rows[0]);
//       })
//       .catch(error => {
//           console.log('error in get request', error)
//           res.sendStatus(500);
//       })

// })
  
  module.exports = router;