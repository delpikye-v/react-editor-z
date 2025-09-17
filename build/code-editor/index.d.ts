import React from 'react';
import * as monaco from 'monaco-editor';
import { type EditorProps } from '@monaco-editor/react';
import './styles.scss';
interface IFCodeEditorIcons {
    copy?: React.ReactNode;
    formatJson?: React.ReactNode;
}
interface IFCodeEditorLabels {
    copy?: string;
    formatJson?: string;
}
export interface IFCodeEditorProps extends Omit<EditorProps, 'onChange'> {
    title?: string;
    readOnly?: boolean;
    rawJson?: boolean;
    style?: React.CSSProperties;
    getRefs?: (refsEditor: React.MutableRefObject<monaco.editor.IStandaloneCodeEditor | null>) => void;
    onChange?: (value?: string, error?: boolean) => void;
    debounceMs?: number;
    tabSize?: number;
    theme?: 'vs-light' | 'vs-dark';
    autoResize?: boolean;
    labels?: IFCodeEditorLabels;
    icons?: IFCodeEditorIcons;
    showHeader?: boolean;
}
declare const CodeEditor: React.FC<IFCodeEditorProps>;
export default CodeEditor;
