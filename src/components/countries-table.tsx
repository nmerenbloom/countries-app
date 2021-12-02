import { callCountryDetails, callGetAllCountries } from "../api-call";
import { sortIconHelper } from "../helpers/sort-icon-helper";
import { SortLogicHelper } from "../helpers/sort-logic-helper";
import {
  countryRowSelectedAction,
  setModalStatusAction,
  SetSortQueryAction,
  setSpinnerAction,
  updateCountriesGridAction,
} from "../state-management/actions";
import { useCustomContext } from "../state-management/app-context";
import { SortDetails, SortField } from "../types/app-state";
import { CountryDetailsSqliteResponse, CountrySqliteResponse } from "../types/country";

interface CountriesTableProps {
  countries: CountrySqliteResponse[];
}
export const CountriesTable = (props: CountriesTableProps) => {
  const { state, dispatch } = useCustomContext();

  const handleRowClick = async (index: number, name: string) => {
    dispatch(setSpinnerAction(true));
    try {
      const response: CountryDetailsSqliteResponse = await callCountryDetails({ name: name });
      if (response) {
        dispatch(countryRowSelectedAction(index, name, response));
        dispatch(setModalStatusAction(true));
        dispatch(setSpinnerAction(false));
      } else {
        alert('Details unavailable');
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setSpinnerAction(false));
    }
  };

  const handleSort = async (field: SortField) => {
    dispatch(setSpinnerAction(true));
    const sortQuery: SortDetails = SortLogicHelper(state, field);
    try {
      const res: CountrySqliteResponse[] = await callGetAllCountries({ ...sortQuery });
      if (res) {
        dispatch(SetSortQueryAction(sortQuery));
        dispatch(updateCountriesGridAction(res.slice(0, 50)));
        dispatch(setSpinnerAction(false));

      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <table className="mt-4 table table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th className="disabled">#</th>
            <th>
              <span onClick={() => handleSort(SortField.Country)} className="header rounded p-1">
                Country
                {state?.sort?.field === SortField.Country ? sortIconHelper(state) : null}
              </span>
            </th>
            <th className="">
              <span onClick={() => handleSort(SortField.Population)} className="header rounded p-1">
                Population
                {state?.sort?.field === SortField.Population ? sortIconHelper(state) : null}
              </span></th>
          </tr>
        </thead>
        <tbody>
          {props.countries?.map((c: CountrySqliteResponse, index) => {
            return (
              <tr key={index} onClick={() => handleRowClick(index, c.Name)}>
                <td>{index + 1}</td>
                <td>{c?.Name ?? 'Could not parse'}</td>
                <td>{c?.Population?.toLocaleString() ?? 'Unknown'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {!state?.loading && state?.countries.length === 0 ?
        <div className="alert alert-info mx-auto w-50 mt-5 p-2" role="alert">
          No results available at this time
        </div> : null}
    </div>
  );
};
