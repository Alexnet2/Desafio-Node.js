/**
 * @author Alex Sandro Mateus de Oliveira
 * @email alexnet2@hotmail.com
 * @create date 2021-02-14 11:09:20
 * @modify date 2021-02-14 11:09:20
 * @desc Desafio Node
 */

const jwt = require("jsonwebtoken");

const users = [
  {
    id: 1,
    cpf: 12345678974,
    password: 15975332,
    role_id: 1,
  },
  {
    id: 2,
    cpf: 98765432112,
    password: 35795112,
    role_id: 2,
  },
];
const UserRoute = (app) => {
  app.post("/api/login", (req, res) => {
    const cpf = req.body.cpf;
    const password = req.body.password;

    const user = users.filter((user) => user.cpf === cpf)[0];
    if (user.password == password) {
      const data = {
        id: user.id,
        role_id: user.role_id,
      };
      const token = jwt.sign(data, process.env.SECRET, {
        expiresIn: 1200,
      });
      res.status(200).send(token);
    }
    res.status(401).send("Usuário ou senha inválidos");
  });
};

module.exports = UserRoute;
