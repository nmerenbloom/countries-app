import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './api.js';

const port = process.env.PORT || 3000;
const app = express();

app.use('/', express.static('./build'));
app.use(bodyParser.json({ extended: true }));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

app.use(routes());
