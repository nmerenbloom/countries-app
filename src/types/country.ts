export interface CountrySqliteResponse {
    Name: string,
    Population: number
}

export interface CountryDetailsSqliteResponse {
    Name: string,
    LocalName: string,
    Continent: string,
    Region: string,
    Population: number,
    Capital: string,
    Language: string
}

export interface CountryDetailBasicSqliteResponse {
    Code: string,
    Name: string,
    Continent: string,
    Region: string,
    SurfaceArea: number,
    IndepYear: number,
    Population: number,
    LifeExpectancy: number,
    GNP: number,
    GNPOld: number,
    LocalName: string,
    GovernmentForm: string,
    HeadOfState: string,
    Capital: string,
    Code2: string
}