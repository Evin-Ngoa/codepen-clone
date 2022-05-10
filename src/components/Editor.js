import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = ( props ) => {
  const { renderName, onChange, value, language } = props;

  const handleChange = (editor, data, value) => {
    onChange(value)
  }

  return (
    <div className="editor-wrapper">
      <div className="title">
        {renderName}
        <button>O/C</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
        }}
      />
    </div>
  );
};

export default Editor;
