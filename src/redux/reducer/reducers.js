import { CURRENT_PAGE, PAGE_DIRECTION, PAGE_ORIENTATION } from "../actions/actions";

const initialState = {
  page: 0,
  direction: "left",
  deviceOrientation: "portaid",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_PAGE:
      return { ...state, page: action.value };
    case PAGE_DIRECTION:
      return { ...state, direction: action.value };
    case PAGE_ORIENTATION:
      return { ...state, deviceOrientation: action.value };
    default:
      return state;
  }
};

export default reducer;
