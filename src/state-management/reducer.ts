import { AppState, SortDirection, SortField } from "../types/app-state"
import { Action, ActionTypes } from "./actions"

export const reducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case ActionTypes.UPDATE_COUNTRIES_GRID:
            return {
                ...state,
                countries: action.payload.countries
            }
        case ActionTypes.UPDATE_SELECTED_COUNTRY:
            return {
                ...state,
                selectedCountry: action.payload.name,
                selectedCountryDetails: action.payload.details
            }
        case ActionTypes.SET_SPINNER_STATUS:
            return {
                ...state,
                loading: action.payload
            }
        case ActionTypes.SET_MODAL_STATUS:
            return {
                ...state,
                modalOpen: action.payload
            }
        case ActionTypes.UPDATE_SORT_QUERY:
            return {
                ...state,
                sort: action.payload
            }
        default:
            return state
    }
}





export const initialState: AppState = {
    loading: false,
    modalOpen: false,
    countries: [],
    selectedCountry: '',
    selectedCountryDetails: {
        Name: '',
        LocalName: '',
        Language: '',
        Population: 0,
        Continent: '',
        Region: '',
        Capital: ''
    },
    sort: {
        direction: SortDirection.Descending,
        field: SortField.Population
    }
}