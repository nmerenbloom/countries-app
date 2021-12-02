const Database = require("better-sqlite3");

const db = new Database(
  "C:/Users/nmerenbloom/Downloads/Ex_Files_SQL_EssT/Ex_Files_SQL_EssT/Exercise Files/db/world.db",
  {
    fileMustExist: true,
  }
);

const AllCountriesGet = (req, res) => {
  return db
    .prepare(`SELECT Name, Population FROM Country ORDER BY ${req.field} ${req.direction}`)
    .all();
};

const CountryDetailsGet = (req) => {
  return db
    .prepare(
      "SELECT c.Name, c.LocalName, c.Continent, c.Region, c.Population, ci.Name AS Capital, tl.Language FROM Country AS c JOIN City AS ci ON  c.Capital = ci.ID JOIN TopLanguage AS tl ON tl.Name = c.Name WHERE c.Name = ?"
    )
    .get(req.name);
};

const AlternateDetailsGet = (req, res) => {
  return db
    .prepare(`SELECT * FROM Country WHERE Name = '${req.name}'`)
    .get();
};

exports.AllCountriesGet = AllCountriesGet;
exports.CountryDetailsGet = CountryDetailsGet;
exports.AlternateDetailsGet = AlternateDetailsGet;
