import { ADD_ITEM, DELETE_ITEM } from "../actions/actionTypes";

const inistialState = {
  inboxList: JSON.parse(localStorage.getItem("inboxList"))
  ? JSON.parse(localStorage.getItem("inboxList"))
  : [],
  listList:[],
};

const reducer = (state = inistialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const done = action.payload.startsWith("x ")? true : false
      const cancel = action.payload.startsWith("~ ")? true : false
      const item = action.payload.startsWith("x ")||action.payload.startsWith("~ ")? action.payload.substring(2):action.payload
      const newItem = { title: item, done: done , cancel:cancel};
      let newList =[]
      if (newItem.title.includes("#")){
         newList = state.listList.concat(newItem)
      }
      const newInbox = state.inboxList.concat(newItem)
      localStorage.setItem("inboxList", JSON.stringify(newInbox));
      return {
        ...state,
        inboxList: newInbox,
        listList: newList
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
