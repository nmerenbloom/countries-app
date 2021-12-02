import express from "express";

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
      response.statusMessage = "GOOD_DATA";
      response.send(countryDetails);
    } else {
      const alt = AlternateDetailsGet(request.body);
      if (alt) {
        response.statusMessage = "ALTERNATE_DATA";
        response.send(alt);
      } else {
        response.sendStatus(500);
      }
    }
  });

  httpRestEndpoint.get("/api/spongebob", async (request, response) => {
    response.sendFile(__dirname + "/spongebob.png");
  });

  return httpRestEndpoint;
};
