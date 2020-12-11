import React from 'react'
import { removeState } from "../../actions/appActions";
import { useDispatch } from "react-redux";

export default function SelectedListBlock({ data }) {

    const dispatch = useDispatch();

    const removeToState = (country, state) => {

        let value = {
            country: country,
            state: state
        }

        dispatch(removeState(value));
    }


 

    return (
        <div class="listBlock">
            <h5 className="mb-3">{data.country}</h5>
            <ul>
                {data.state.map((state) => (
                    <li className="d-flex justify-content-between align-items-center mb-3">
                        <span>
                            {state}
                        </span>
                        <i class="fas fa-times cursor-pointer" onClick={() => removeToState(data.country, state)}></i>
                    </li>
                ))}
            </ul>
        </div>
    )
}
