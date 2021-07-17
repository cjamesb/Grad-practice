const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api.js');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, '../'))); //serve index.html //////////////////////

/*//////////////////////////

BELOW HERE THERE BE ERRORS

*/ app.use('/', (req, res) => {
  res.status(404).send(`you done messed up.  That don't exist`);
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: `express error cought unkonwn middleware error`,
    status: 500,
    message: { err: 'Hark! An error !!!' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`In the port thats (kinda) close to the hole at ${PORT}`));
//
