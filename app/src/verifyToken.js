/**
 * @author Alex Sandro Mateus de Oliveira
 * @email alexnet2@hotmail.com
 * @create date 2021-02-14 11:08:55
 * @modify date 2021-02-14 11:08:55
 * @desc Desafio Node
 */

const jwt = require("jsonwebtoken");
const naoValidarToken = (req) => {
  return req.originalUrl === "/api/login";
};
const validarAdmin = (req)=>{
  var url = req.originalUrl.split('/');
  return url.includes('admin');
}
const VerifyToken = (req, res, next) => {
  if (naoValidarToken(req)) return next();

  const token = req.headers["x-api-token"];
  if(!token)
  return res
    .status(403)
    .send({ auth: false, message: "Token não fornecido." });
  jwt.verify(token,process.env.SECRET, function (err, token) {
    if (err)
      return res
        .status(500)
        .send({
          auth: false,
          message: "Token inválido.",
        });
        if(validarAdmin(req) && token.role_id==1){
          return next();
        }else if(!validarAdmin(req) && token.role_id!=1){
          return next();
        }else if(validarAdmin(req) && token.role_id!=1){
          return res.status(401).send('Você não term permissão para acessar esta rota')
        }
  });
};

module.exports = VerifyToken;