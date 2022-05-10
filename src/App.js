import React, { useState } from "react";
import Editor from "./components/Editor";

function App() {
  const [htmlEditor, setHtmlEditor] = useState("");
  const [cssEditor, setCssEditor] = useState("");
  const [jsEditor, setJsEditor] = useState("");

  const customDom = `
  <html>
    <body>${htmlEditor}</body>
    <style>${cssEditor}</style>
    <script>${jsEditor}</script>
  </html>
  `;

  return (
    <>
      <div className="sector top-sector">
        <Editor
          language="xml"
          renderName="HTML"
          value={htmlEditor}
          onChange={setHtmlEditor}
        />

        <Editor
          language="css"
          renderName="CSS"
          value={cssEditor}
          onChange={setCssEditor}
        />

        <Editor
          language="javascript"
          renderName="JS"
          value={jsEditor}
          onChange={setJsEditor}
        />
      </div>
      <div className="sector">
        <iframe
          srcDoc={customDom}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
