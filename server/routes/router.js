const router = require('express').Router();
const miapi = require('../modules/mia_api');

// router.get('/', async (req, res) => {
//   try {    
//     const result = await miapi.searchForDepartment();
//     res.send(result);
//   } catch (err) {
//     res.sendStatus(500);
//     throw new Error('Error in get route', err)
//   }
// });

// router.get('/', (req, res) => {
//     let result = miapi.searchForDepartment();
//     .then((result) => {
//       res.send(result);
//     }).catch ((err) => {
//     res.sendStatus(500);
//     console.log('Error in get route', err);
//   })
// });

// router.get('/image/:id/:size', async (req, res) => {
//   try {
//     const { id, size } = req.params;
//     const result = await miapi.getImage(id, size);
//     res.send(result);
//   } catch (err) {
//     res.sendStatus(500);
//     throw new Error('Error in get route', err)
//   }
// });

module.exports = router;

//req.params.query