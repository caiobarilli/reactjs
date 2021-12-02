import React, { useCallback, useState } from "react";

import Button from "./Components/UI/Button/Button";
import ToogleParagraph from "./Components/Toggle/ToogleParagraph";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP");

  const onToggleButton = useCallback(() => {
    setShowParagraph((prevShowParragraph) => !prevShowParragraph);
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <ToogleParagraph show={showParagraph} />
      <Button onClick={onToggleButton}> Show Paragraph </Button>
    </div>
  );
}

export default App;
