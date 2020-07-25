import { ADD_ITEM, DELETE_ITEM } from "../actions/actionTypes";

const inistialState = {
  inboxList: [],
};

const reducer = (state = inistialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = { title: action.payload, done: false };
      return {
        ...state,
        inboxList: state.inboxList.concat(newItem),
      };
    case DELETE_ITEM:
      const deleteItem = action.payload;
      return {
        ...state,
        inboxList: state.inboxList.filter((item) => item !== deleteItem),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
