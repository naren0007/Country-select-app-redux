import { ADD_STATE, REMOVE_STATE } from "../constant/type";


const intialState = {
  selectedCountry: [],
  uncheckedState: ''
};


export const appReducer = (state = intialState, action) => {

  switch (action.type) {
    case ADD_STATE:
      if (!state.selectedCountry.length) {
        state.selectedCountry.push({
          'country': action.payload.country,
          'state': [action.payload.state]
        })
      } else {
        state.selectedCountry.forEach(ele => {
          if (ele.country === action.payload.country) {
            ele.state.push(action.payload.state)
          }

          const matchedConutry = state.selectedCountry.find(element => element.country === action.payload.country);

          if (!matchedConutry) {
            state.selectedCountry.push({
              'country': action.payload.country,
              'state': [action.payload.state]
            })
          }
        })
      }

      return {
        ...state,
        selectedCountry: [...state.selectedCountry],
      };


    case REMOVE_STATE:
      state.selectedCountry.forEach(ele => {
        if (ele.country === action.payload.country) {
          if (ele.state.length == 1) {
            let index = state.selectedCountry.indexOf(ele);
            if (index > -1) {
              state.selectedCountry.splice(index, 1);
            }
          }
          else {
            let index = ele.state.indexOf(action.payload.state);
            if (index > -1) {
              ele.state.splice(index, 1);
            }
          }
        }
      })


      return {
        ...state,
        selectedCountry: [...state.selectedCountry],
        uncheckedState: action.payload.state
      }

    default:
      return state;
  }
};
