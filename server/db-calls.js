
import Database from 'better-sqlite3';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);

const db = new Database(
  join(dirname(__filename), "data/world.db"),
  {
    fileMustExist: true,
  }
);

export const AllCountriesGet = (req, res) => {
  return db
    .prepare(`SELECT Name, Population FROM Country ORDER BY ${req.field} ${req.direction}`)
    .all();
};

export const CountryDetailsGet = (req) => {
  return db
    .prepare(`SELECT * FROM CountryLanguage WHERE Name = '${req.name}'`)
    .get();
};

export const AlternateDetailsGet = (req, res) => {
  return db
    .prepare(`SELECT * FROM Country WHERE Name = '${req.name}'`)
    .get();
};
