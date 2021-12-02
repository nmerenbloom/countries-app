import { CountryDetailBasicSqliteResponse, CountryDetailsSqliteResponse } from "../types/country";

export const AlternateDataMapper = (input: CountryDetailBasicSqliteResponse): CountryDetailsSqliteResponse => {
    return {
        Name: input.Name,
        LocalName: input.LocalName ?? 'Unknown',
        Continent: input.Continent ?? 'Unknown',
        Region: input.Region ?? 'Unknown',
        Population: input.Population ?? 'Unknown',
        Capital: input.Capital ?? 'Unknown',
        Language: 'Unknown'
    }
}