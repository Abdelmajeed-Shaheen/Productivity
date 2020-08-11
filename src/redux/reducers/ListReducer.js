import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  ORDER_ITEMS,
  SEARCH,
} from "../actions/actionTypes";

const inistialState = {
  inboxList: JSON.parse(localStorage.getItem("inboxList"))
    ? JSON.parse(localStorage.getItem("inboxList"))
    : [],
  projects: JSON.parse(localStorage.getItem("prolist"))
    ? JSON.parse(localStorage.getItem("prolist"))
    : [],
};

const reducer = (state = inistialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let ID = 0;
      state.inboxList.forEach((item) => {
        if (item.id > ID) {
          ID = item.id;
        }
      });
      const newItem = action.payload;
      newItem["id"] = ID + 1;
      const regex = new RegExp(/#\w+/g);
      const match = regex.exec(newItem.title);
      let prolist = state.projects;
      if (match) {
        let prvpro = prolist.find((pro) => pro.name === match[0]);
        if (!prvpro) {
          const proname = { ID: Date.now() + 1, name: match[0] };
          prolist = [...prolist, proname];
          localStorage.setItem("prolist", JSON.stringify(prolist));
          newItem["proID"] = proname.ID;
        } else {
          newItem["proID"] = prvpro.ID;
        }
      } else {
        newItem["proID"] = 0;
      }
      const newInbox = [newItem, ...state.inboxList];
      localStorage.setItem("inboxList", JSON.stringify(newInbox));
      return {
        ...state,
        inboxList: newInbox,
        projects: prolist,
      };
    case DELETE_ITEM:
      const deleteItem = action.payload;
      let newprolist = state.projects;
      const InboxAfterDelete = state.inboxList.filter(
        (item) => item.ID !== deleteItem.ID
      );
      const anotheritemforpro = InboxAfterDelete.filter(
        (item) => item.proID === deleteItem.proID
      );
      if (anotheritemforpro.length === 0) {
        newprolist = newprolist.filter((item) => item.ID !== deleteItem.proID);
      }
      localStorage.setItem("inboxList", JSON.stringify(InboxAfterDelete));
      localStorage.setItem("prolist", JSON.stringify(newprolist));
      return {
        ...state,
        inboxList: InboxAfterDelete,
        projects: newprolist,
      };
    case EDIT_ITEM:
      state.inboxList[action.payload.index].title = action.payload.val;
      localStorage.setItem("inboxList", JSON.stringify(state.inboxList));
      return {
        ...state,
        inboxList: state.inboxList,
      };
    case ORDER_ITEMS:
      localStorage.setItem("inboxList", JSON.stringify(action.payload));
      return {
        ...state,
        inboxList: action.payload,
      };
    case SEARCH:
      if (action.payload) {
        const searchlist = JSON.parse(
          localStorage.getItem("inboxList")
        ).filter((item) => item.title.includes(action.payload));
        const prosearch = JSON.parse(
          localStorage.getItem("prolist")
        ).filter((item) => item.name.includes(action.payload));
        return {
          ...state,
          inboxList: searchlist,
          projects: prosearch,
        };
      } else {
        return {
          ...state,
          inboxList: JSON.parse(localStorage.getItem("inboxList")),
          projects: JSON.parse(localStorage.getItem("prolist")),
        };
      }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
