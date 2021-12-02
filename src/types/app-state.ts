import { CountryDetailsSqliteResponse, CountrySqliteResponse } from "./country";

export interface AppState {
    loading: boolean,
    modalOpen: boolean,
    countries: CountrySqliteResponse[],
    selectedCountry: string,
    selectedCountryDetails: CountryDetailsSqliteResponse,
    sort: SortDetails
}

export interface SortDetails {
    direction: SortDirection,
    field: SortField
}

export enum SortDirection {
    Ascending = 'ASC',
    Descending = 'DESC'
}

export enum SortField {
    Population = 'Population',
    Country = 'Name'
}