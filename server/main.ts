import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
// import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

// app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  const str: string = 'Hello Express!!!';

  return res.json(str);
});

try {
  app.listen(port, () => console.log(`Running on port ${port}!!`));
} catch (err) {
  console.log({ err });
}
