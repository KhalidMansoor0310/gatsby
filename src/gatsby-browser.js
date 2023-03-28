import React from "react";
import { Provider } from "react-redux";
import store from "./store/reducer";
export const wrapRootElement = ({ element }) => {
  console.log(element);
  return <Provider store={store}>{element}</Provider>;
};
