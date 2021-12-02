import React, { useEffect, useReducer } from "react";
import { callGetAllCountries } from "./api-call";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { CountrySqliteResponse } from "./types/country";
import { CountriesTable } from "./components/countries-table";
import { initialState, reducer } from "./state-management/reducer";
import {
  setSpinnerAction,
  updateCountriesGridAction,
} from "./state-management/actions";
import { DetailsModal } from "./components/details-modal";
import CustomContext from "./state-management/app-context";
import { HeroBanner } from "./components/hero";
import { LoadingSpinner } from "./components/loading-spinner";
import { Overlay } from "./components/overlay";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getAllCounttries = async () => {
      dispatch(setSpinnerAction(true));
      try {
        const res: CountrySqliteResponse[] = await callGetAllCountries({ ...state?.sort });
        if (res) {
          dispatch(updateCountriesGridAction(res.slice(0, 50)));
          dispatch(setSpinnerAction(false));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllCounttries();
  }, [state?.sort]);

  const stateManagementProviderValues = { state, dispatch };

  return (
    <CustomContext.Provider value={stateManagementProviderValues}>
      <HeroBanner></HeroBanner>
      <div className="m-2 p-2 d-flex text-center flex-column justify-content-center">
        {state?.loading || state?.modalOpen ? <Overlay></Overlay> : null}
        {state?.loading ? <LoadingSpinner></LoadingSpinner> : null}
        {state?.modalOpen ? <DetailsModal details={state?.selectedCountryDetails}></DetailsModal> : null}
        <CountriesTable countries={state?.countries}></CountriesTable>
      </div>
    </CustomContext.Provider>
  );
};

export default App;
