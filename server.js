const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h1>Login Null</h1>
    <form method="POST" action="/login">
      <input name="user" placeholder="Usuario" required><br><br>
      <input name="pass" type="password" placeholder="Contraseña" required><br><br>
      <button>Entrar</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  res.send(`Bienvenido ${req.body.user} 👊`);
});

app.listen(PORT, () => console.log('Servidor ON'));
