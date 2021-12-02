import { AppState, SortDetails, SortDirection, SortField } from "../types/app-state";

export const SortLogicHelper = (state: AppState, clickedField: SortField): SortDetails => {
    const currentDirection = state.sort.direction;


    if (currentDirection === SortDirection.Ascending) {
        return { field: clickedField, direction: SortDirection.Descending }
    }

    if (currentDirection === SortDirection.Descending) {
        return { field: clickedField, direction: SortDirection.Ascending }
    } else {
        return { ...state.sort };
    }


}