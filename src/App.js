import * as React from "react";
import Layout from "./components/layout/layout";
import { GlobalStyles } from "./styles/global";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout />
    </>
  );
};

export default App;
