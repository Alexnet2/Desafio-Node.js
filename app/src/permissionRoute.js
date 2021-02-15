/**
 * @author Alex Sandro Mateus de Oliveira
 * @email alexnet2@hotmail.com
 * @create date 2021-02-15 06:58:46
 * @modify date 2021-02-15 06:58:46
 * @desc Desafio Node
 */

const permissions = [];
const PermissionRoute = (app) => {
  app.get("/api/admin/permission", (req, res) => {
    res.status(200).send(permissions);
  });
  app.post("/api/admin/permission", (req, res) => {
    permissions.push(req.body.permission);
    res.status(200).send(permissions);
  });
  app.delete("/api/admin/permission", (req, res) => {
    const index = permissions.findIndex(
      (permission) => permission == req.body.permission
    );
    if (index == -1) res.status(500).send("Error database");

    permissions.splice(index, 1);
    res.status(200).send(permissions);
  });
};
module.exports = PermissionRoute;
