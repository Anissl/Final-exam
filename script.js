/* Burger menu */

const burgerMenu = document.querySelector('.burger-menu');
const navItems = document.querySelector('.nav-items');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navItems.classList.toggle('active');
});


/* server.js */

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/register', (req, res, next) => {
  const newUser = req.body;

  const db = router.db;
  const users = db.get('users');

  users.push(newUser).write();

  res.status(200).json({ message: 'Registration successful!' });
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});


/* Language change */

