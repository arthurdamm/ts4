import axios from 'axios';
import { helloExpress } from '../server/helloExpress';

it('returns hello express', async () => {
  const str: string = '3';
  expect(helloExpress()).toBe('HELLO Express!');
}, 5000);

it.only('tests the default route', async () => {
  const res = await axios({ method: 'get', url: 'http://localhost:5000' });
  expect(res.data).toBe('HELLO Express!');
}, 4000);
