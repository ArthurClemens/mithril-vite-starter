import m from "mithril";
import "./App.css";

export const App = () => {
  // Local state ...
  return {
    view: () => {
      return m("div", "My Mithril App");
    },
  };
};
