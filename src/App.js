import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [htmlEditor, setHtmlEditor] = useLocalStorage("html","");
  const [cssEditor, setCssEditor] = useLocalStorage("css","");
  const [jsEditor, setJsEditor] = useLocalStorage("js","")
  const [customDom, setCustomDom] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCustomDom(
        `
        <html>
          <body>${htmlEditor}</body>
          <style>${cssEditor}</style>
          <script>${jsEditor}</script>
        </html>
        `
      );
    }, 400);

    return () => clearTimeout(timeOut);
  }, [htmlEditor, cssEditor, jsEditor]);

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
