const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const saltRounds = 10;

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
); // enable cors
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userID",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "usuarios",
});

app.post("/registerr",(req,res)=>{
  const { adherent, adresse , username, nom ,activite,tele,ident,resp,cin,personne,rib,ca,mode,delai,encours} = req.body;
  db.query(
    `INSERT INTO demande SET adherent='${adherent}',adresse='${adresse}',username='${username}',nom='${nom}',activite='${activite}',tele='${tele}',ident='${ident}',resp='${resp}',cin='${cin}',personne='${personne}',rib='${rib}',ca='${ca}',mode='${mode}',delai='${delai}',encours='${encours}',iduser=( 
      SELECT id
      FROM user
      WHERE name = '${username}'
    )` ,
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  )
})

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/register", function (req, res) {
  const { name, password , email , telephone,societe} = req.body;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      console.log(err);
    }
     console.log(name)

    db.query(
      `INSERT INTO user (name, password, email , telephone , societe) VALUES ('${name}','${hash}','${email}','${telephone}','${societe}')`,
      function (error, results) {
        if (error) throw error;
        res.send(results);

      }
    );
  });
});

app.post("/login", function (req, res) {
  const { name, password } = req.body;
  db.query(
    `SELECT * FROM user WHERE name = '${name}'`,
    function (error, results) {
      if (error) throw error;
      Object.keys(results).forEach(function(key) {
        var row = results[key];
        console.log(row.id)
      });
      if (results.length > 0) {
        bcrypt.compare(password, results[0].password, function (err, result) {
          if (result) {
            req.session.user = results;
            res.status(200).send(results);
          } else {
            res.send({ message: "error, user or password incorrect" });
          }
        });
      } else {
        res.send({ message: "user does not exist" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
