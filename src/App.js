import React, { useState } from "react";
import Editor from "./components/Editor";

function App() {
  const [htmlEditor, setHtmlEditor] = useState("");

  return (
    <div className="sector top-sector">
      <Editor
        language="xml"
        renderName="HTML"
        value={htmlEditor}
        onChange={setHtmlEditor}
      />

      <div className="sector">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
