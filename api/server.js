import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'IP location activating... la concha de la lora se pudió' });
});

export default (req, res) => {
  app(req, res);
};
