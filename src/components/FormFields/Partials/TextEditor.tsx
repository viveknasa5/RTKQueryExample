import React, { useEffect, useMemo } from "react";
import { ErrorMessage, useField, useFormikContext } from "formik";
import JoditEditor, { IJoditEditorProps } from "jodit-react";
import { Inputs } from "./type";
import { EditorOptions } from "../../../utilities/Constants";

type InsertMode = "insert_as_text" | "insert_as_html" | "insert_clear_html";

const TextEditor: React.FC<Inputs> = ({ name, label }) => {
  const [field, meta, helpers] = useField(name);

  console.log(meta, helpers, "sgln");
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    const toolbarBox = document.querySelector(
      ".jodit_sticky > .jodit-toolbar__box"
    ) as HTMLElement;
    if (toolbarBox) {
      toolbarBox.style.position = "static";
    }
  }, []);

  const config = useMemo<IJoditEditorProps["config"]>(
    () => ({
      readonly: false,
      placeholder: "",
      defaultActionOnPaste: "insert_as_html" as InsertMode,
      defaultLineHeight: 1.5,
      enter: "div",
      buttons: [
        "bold",
        "italic",
        "|",
        {
          name: "ul",
          list: {
            circle: "Circle",
            square: "Square",
          },
        },
        "ol",
        "|",
        "font",
        "fontsize",
        "|",
        "outdent",
        "indent",
        "align",
        "|",
        "fullsize",
        "brush",
        "|",
        "table",
        "link",
        "|",
        "undo",
        "redo",
      ],
      buttonsMD: EditorOptions,
      buttonsSM: EditorOptions,
      buttonsXS: EditorOptions,
      statusbar: false,
      sizeLG: 900,
      sizeMD: 700,
      sizeSM: 400,
      toolbarAdaptive: false,
      toolbarSticky: false,
      autofocus: true,
      tabIndex: 1,
      askBeforePasteHTML: false,
      askBeforePasteFromWord: false,
      beautyHTML: true,
      useDefaultParagraphSeparator: "p",
      controls: {
        ul: {
          list: {
            circle: "Circle",
            square: "Square",
          },
        },
      },
    }),
    []
  );

  return (
    <div>
      {label && (
        <label htmlFor="yourUsername" className="form-label fs-14">
          {label}
        </label>
      )}
      <JoditEditor
        config={config}
        value={field.value}
        onChange={(newContent) => setFieldValue(name, newContent)}
        onBlur={() => {
          const content = document.querySelector(".jodit-wysiwyg")?.innerHTML;
          console.log("Content:", content); // Debugging: Check the output HTML
        }}
      />
      <div className="error-message">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default TextEditor;

// import React, { useEffect, useMemo } from "react";
// import { useField, useFormikContext } from "formik";
// import JoditEditor, { IJoditEditorProps } from "jodit-react";
// import { EditorOptions } from "@/constants";
// import { RichTextEditorProps } from "@/utility/types/reactTextEditor";

// type InsertMode = "insert_as_text" | "insert_as_html" | "insert_clear_html";

// const RichTextEditor: React.FC<RichTextEditorProps> = ({ name, label }) => {
//   const [field, meta, helpers] = useField(name);
//   const { setFieldValue } = useFormikContext();

//   useEffect(() => {
//     const toolbarBox = document.querySelector(
//       ".jodit_sticky > .jodit-toolbar__box"
//     ) as HTMLElement;
//     if (toolbarBox) {
//       toolbarBox.style.position = "static";
//     }
//   }, []);

//   const config = useMemo<IJoditEditorProps["config"]>(
//     () => ({
//       readonly: false,
//       placeholder: "",
//       defaultActionOnPaste: "insert_as_html" as InsertMode,
//       defaultLineHeight: 1.5,
//       enter: "div",
//       // options that we defined in above step.
//       buttons: EditorOptions,
//       buttonsMD: EditorOptions,
//       buttonsSM: EditorOptions,
//       buttonsXS: EditorOptions,
//       statusbar: false,
//       sizeLG: 900,
//       sizeMD: 700,
//       sizeSM: 400,
//       toolbarAdaptive: false,
//       toolbarSticky: false,
//       // readonly: false,
//       autofocus: true,
//       tabIndex: 1,

//       askBeforePasteHTML: false,
//       askBeforePasteFromWord: false,
//       // defaultActionOnPaste: 'insert_clear_html',

//       // placeholder: 'Write something awesome ...',
//       beautyHTML: true,
//       // toolbarButtonSize: "large",
//       // buttons: [
//       //     'source',
//       //     '|', 'bold', 'italic',
//       //     '|', 'ul', 'ol',
//       //     '|', 'font', 'fontsize', 'brush', 'paragraph',
//       //     '|', 'video', 'table', 'link',
//       //     '|', 'left', 'center', 'right', 'justify',
//       //     '|', 'undo', 'redo',
//       //     '|', 'hr', 'eraser', 'fullsize'
//       // ],
//       // extraButtons: ["uploadImage", "codeBlock"]
//     }),
//     []
//   );

//   return (
//     <div style={{ width: "100%" }} className="custom-editor-container">
//       <label className="text-sm font-extralight mb-2">{label}</label>
//       <JoditEditor
//         config={config}
//         value={field.value}
//         onChange={(newContent) => setFieldValue(name, newContent)}
//       />
//       {meta.touched && meta.error ? (
//         <div style={{ color: "red" }}>{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

// export default RichTextEditor;
