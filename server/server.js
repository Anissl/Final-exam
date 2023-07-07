import { create, router as _router, defaults, bodyParser } from 'json-server';
const server = create();
const router = _router('db.json');
const middlewares = defaults();

server.use(middlewares);
server.use(bodyParser);

server.post('/register', (req, res, next) => {
  const newUser = req.body;
  const users = router.db.get('users');

  users.push(newUser).write();

  res.status(200).json({ message: 'Registration successful!' });
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});