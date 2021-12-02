import { SortDetails } from "../types/app-state"
import { CountryDetailsSqliteResponse, CountrySqliteResponse } from "../types/country"

export type Action = {
    type: ActionTypes,
    payload: any
}

export enum ActionTypes {
    UPDATE_SELECTED_COUNTRY,
    UPDATE_COUNTRIES_GRID,
    SET_SPINNER_STATUS,
    SET_MODAL_STATUS,
    UPDATE_SORT_QUERY
}

export const countryRowSelectedAction = (index: number, name: string, details: CountryDetailsSqliteResponse): Action => {
    return { type: ActionTypes.UPDATE_SELECTED_COUNTRY, payload: { index, name, details } }
}

export const updateCountriesGridAction = (countries: CountrySqliteResponse[]) => {
    return { type: ActionTypes.UPDATE_COUNTRIES_GRID, payload: { countries } }
}

export const setSpinnerAction = (spinningStatus: boolean): Action => {
    return { type: ActionTypes.SET_SPINNER_STATUS, payload: spinningStatus }
}

export const setModalStatusAction = (modalStatus: boolean): Action => {
    return { type: ActionTypes.SET_MODAL_STATUS, payload: modalStatus }
}

export const SetSortQueryAction = (sortQuery: SortDetails): Action => {
    return { type: ActionTypes.UPDATE_SORT_QUERY, payload: { ...sortQuery } }
}

