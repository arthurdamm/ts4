import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
// import helmet from 'helmet';
import dotenv from 'dotenv';

import db from './libs/db';
import User from './models/User';

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

app.get('/users', async (req: Request, res: Response): Promise<Response> => {
  try {
    const users = await User.findAll();
    return res.json(
      users.map(
        ({
          firstName,
          lastName,
          email,
        }: {
          firstName: string;
          lastName: string;
          email: string;
        }) => ({
          firstName,
          lastName,
          email,
        })
      )
    );
    return res.json({ users });
  } catch (error) {
    console.log({ error });
    return res.json({ error });
  }
});

try {
  console.log({ db, User });

  app.listen(port, () => console.log(`Running on port ${port}!!`));
  // doStuffWithUser();
} catch (err) {
  console.log({ err });
}
