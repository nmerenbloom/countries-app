import { setModalStatusAction } from "../state-management/actions";
import { useCustomContext } from "../state-management/app-context";
import { CountryDetailsSqliteResponse } from "../types/country";

interface DetailsModalProps {
  details: CountryDetailsSqliteResponse;
}

export const DetailsModal = (props: DetailsModalProps) => {
  const { details } = props;
  const { state, dispatch } = useCustomContext();
  return (
    <div className="custom-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{details.Name}</h5>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column">
              <p>
                <b>Local Name: </b> {details.LocalName}
              </p>
              <p>
                <b>Capital City: </b> {details.Capital}
              </p>
              <p>
                <b>Location: </b> {details.Continent} ({details.Region})
              </p>
              <p>
                <b>Population: </b> {details.Population.toLocaleString()}
              </p>
              <p>
                <b>Majority Language: </b> {details.Language}
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => dispatch(setModalStatusAction(false))}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
