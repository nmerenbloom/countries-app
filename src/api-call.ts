import axios from "axios";
import { AlternateDataMapper } from "./helpers/alt-data-mapper";
import { SortDetails } from "./types/app-state";

export const callGetAllCountries = async (sort: SortDetails) => {
    try {
        const response = await axios.post("/api/all", { ...sort });
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const callCountryDetails = async (country: { name: string }) => {
    try {
        const response = await axios.post("/api/details", { ...country });
        if (response.statusText === "GOOD_DATA") {
            return response.data;
        } else if (response.statusText === "ALTERNATE_DATA") {
            return AlternateDataMapper(response.data);
        }
    } catch (error) {
        console.log(error);

    }
};
