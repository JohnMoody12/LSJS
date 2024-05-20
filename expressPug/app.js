const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");

const COUNTRY_DATA = [
  {
    path: "/english",
    flag: "flag-of-United-States-of-America.png",
    alt: "US Flag",
    title: "Go to US English site",
  },
  {
    path: "/french",
    flag: "flag-of-France.png",
    alt: "Drapeau de la france",
    title: "Aller sur le site français",
  },
  {
    path: "/serbian",
    flag: "flag-of-Serbia.png",
    alt: "Застава Србије",
    title: "Идите на српски сајт",
  },
];

const LANGUAGE_CODES = {
  english: "en-US",
  french: "fr-FR",
  serbian: "sr-Cryl-rs",
};

app.set("views", "./views");
app.set("view engine", "pug");

const staticLogger = (req, res, next) => {
  let ext = path.extname(path.basename(req.url));
  if (ext === ".css" || ext === ".png" || ext === ".jpg") {
    console.log(
      `Serving static file: ${req.url} from path basename of ${path.basename(
        req.url
      )}`
    );
  }
  next();
};

app.locals.currentPathClass = (path, currentPath) => {
  return path === currentPath ? "current" : "";
};

app.use(staticLogger);
app.use(express.static("public"));
app.use(morgan("common"));

app.get("/", (req, res) => {
  req.params.language = "english";
  res.redirect("/english");
});

app.get("/:language", (req, res, next) => {
  const language = req.params.language;
  const languageCode = LANGUAGE_CODES[language];
  if (!languageCode) {
    next(new Error(`Language not support ${language}`));
  } else {
    res.render(`hello-world-${language}`, {
      countries: COUNTRY_DATA,
      currentPath: req.path,
      language: LANGUAGE_CODES[language],
    });
  }
});

app.use((err, req, res, _next) => {
  console.log(err);
  res.status(404).send(err.message);
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
