import React, { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [visible, setVisible] = useState(false);
  return <Counter />;
};
export default App;
