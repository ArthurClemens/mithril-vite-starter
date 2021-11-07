import m from "mithril";
import "./App.css";

export const App = () => {
  // Local state ...
  return {
    view: () => {
      return m("h1", "My Mithril App");
    },
  };
};
