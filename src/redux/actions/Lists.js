import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "./actionTypes";

export const addItem = (value) => {
  const done = value.startsWith("x ") ? true : false;
  const cancel = value.startsWith("~ ") ? true : false;
  const title =
        value.startsWith("x ") || value.startsWith("~ ")
          ? value.substring(2)
          : value;
  const newItem = { ID:Date.now(),title: title, done: done, cancel: cancel };
  return {
    type: ADD_ITEM,
    payload: newItem,
  };
};

export const deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};

export const editItem = (item) => {
  return {
    type: EDIT_ITEM,
    payload: item,
  };
};