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
        if (response.data.type === 'primary') {
            return response.data.dataObject;
        } else if (response.data.type === 'alternate') {
            return AlternateDataMapper(response.data.dataObject);
        }
    } catch (error) {
        console.log(error);

    }
};
