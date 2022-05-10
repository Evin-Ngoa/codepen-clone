import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

const Editor = (props) => {
  const { renderName, onChange, value, language } = props;
  const [openEditor, setOpenEditor] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className={`editor-wrapper ${openEditor ? "" : "collapse"}`}>
      <div className="title">
        {renderName}
        <button
          type="button"
          className="resize-btn"
          onClick={() => setOpenEditor((prevOpenEditor) => !prevOpenEditor)}
        >
          <FontAwesomeIcon icon={openEditor ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
        }}
      />
    </div>
  );
};

export default Editor;
