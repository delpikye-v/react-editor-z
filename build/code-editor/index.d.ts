import React from "react";
import { EditorProps } from "@monaco-editor/react";
export interface IFCodeEditorProps extends Omit<EditorProps, "onChange"> {
    readOnly?: boolean;
    rawJson?: boolean;
    style?: React.CSSProperties;
    getRefs?: (refsEditor: React.MutableRefObject<any>) => any;
    onChange?: (value?: string | any, error?: boolean) => any;
}
declare const CodeEditor: React.FC<IFCodeEditorProps>;
export default CodeEditor;
