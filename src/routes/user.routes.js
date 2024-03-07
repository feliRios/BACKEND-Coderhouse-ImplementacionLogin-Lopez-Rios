import { Router } from "express";

const routerUser = Router();

// Middleware para proteger las vistas que requieren autenticacion
function auth(req, res, next){
  if(req.session?.rol || req.session?.admin){
    return next();
  }
  return res.status(401).send("Error: not authorized!");
}

routerUser.get("/login", (req, res) => {
  res.render("login", {});
});

routerUser.get("/register", (req, res) => {
  res.render("register", {});
})

routerUser.get("/profile", auth, (req, res) => {
  res.render("profile", {
    user: req.session.user
  });
});

export default routerUser;