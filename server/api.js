import express from "express";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import {
  AllCountriesGet,
  CountryDetailsGet,
  AlternateDetailsGet,
} from "./db-calls.js";


const httpRestEndpoint = express.Router();

export const routes = () => {
  httpRestEndpoint.post("/api/all", async (request, response) => {
    const allCountriesResponse = AllCountriesGet(request.body);
    response.send(allCountriesResponse);
  });

  httpRestEndpoint.post("/api/details", async (request, response) => {
    const countryDetails = CountryDetailsGet(request.body);
    if (countryDetails) {
      response.send({ type: 'primary', dataObject: countryDetails });
    } else {
      const alt = AlternateDetailsGet(request.body);
      if (alt) {
        response.send({ type: 'alternate', dataObject: alt });
      } else {
        response.sendStatus(500);
      }
    }
  });

  httpRestEndpoint.get("/api/spongebob", async (request, response) => {
    const __filename = fileURLToPath(import.meta.url);
    response.sendFile(join(dirname(__filename), "/spongebob.png"));
  });

  return httpRestEndpoint;
};
