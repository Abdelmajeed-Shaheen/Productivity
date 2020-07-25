import { ADD_ITEM, DELETE_ITEM } from "../actions/actionTypes";

const inistialState = {
  inboxList: JSON.parse(localStorage.getItem("inboxList"))
  ? JSON.parse(localStorage.getItem("inboxList"))
  : [],
};

const reducer = (state = inistialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = { title: action.payload, done: false };
      const newInbox = state.inboxList.concat(newItem)
      localStorage.setItem("inboxList", JSON.stringify(newInbox));
      return {
        ...state,
        inboxList: newInbox,
      };
    case DELETE_ITEM:
      const deleteItem = action.payload;
      const InboxAfterDelete = state.inboxList.filter((item) => item !== deleteItem)
      localStorage.setItem("inboxList", JSON.stringify(InboxAfterDelete));
      return {
        ...state,
        inboxList: InboxAfterDelete,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
