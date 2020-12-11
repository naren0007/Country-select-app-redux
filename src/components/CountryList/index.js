import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addState, removeState } from "../../actions/appActions";



export default function CountryList(props) {

  const dispatch = useDispatch();
  const uncheckState = useSelector((state) => state.app.uncheckedState);
  const refEl = useRef(null)

  const addToState = (country, state, e) => {
    if (e.target.checked) {
      let value = {
        country: country,
        state: state
      }
      dispatch(addState(value));
    } else {
      let value = {
        country: country,
        state: state
      }
      dispatch(removeState(value));
    }
  }

  useEffect(() => {
    if (uncheckState) {
      document.getElementById(uncheckState).checked = false;
    }
  }, [uncheckState])


  return (
    <>
      {props.data.map((data) => (
        <div className="listBlock mb-4" key={data.country}>
          <h5 class="mb-3">{data.country}</h5>

          {data.states.map((state) => (
            <label className="checkboxcontainer">{state}
              <input type="checkbox" id={state} onChange={(e) => addToState(data.country, state, e)} />
              <span className="checkmark"></span>
            </label>
          ))}

        </div>
      ))}
    </>
  )
}
