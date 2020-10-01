import { CURRENT_PAGE, PAGE_DIRECTION } from "../actions/actions";

const initialState = {
  page: 0,
  direction: "left",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_PAGE:
      return { ...state, page: action.value };
    case PAGE_DIRECTION:
      return { ...state, direction: action.value };
    default:
      return state;
  }
};

export default reducer;
