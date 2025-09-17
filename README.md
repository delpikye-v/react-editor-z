# react-editor-z

[![NPM](https://img.shields.io/npm/v/react-editor-z.svg)](https://www.npmjs.com/package/react-editor-z)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![downloads](https://img.shields.io/npm/dt/react-editor-z.svg)

A customizable React wrapper component built on top of [@monaco-editor/react](https://www.npmjs.com/package/@monaco-editor/react) — with **default JSON mode**.

🔍 JSON mode with built-in validation
📦 Access to internal editor ref

---

## 🚀 Live Demo

👉 [Codesandbox Example](https://codesandbox.io/p/sandbox/cdl2fd)

---

## 📦 Installation

```bash
npm install react-editor-z
# or
yarn add react-editor-z
```

Import the module in the place you want to use:
```js
import CodeEditor from "react-editor-z";

```
#### Snippet
```js
    function App() {
      return (
        <CodeEditor
          // language="json"
          // value={value}
          // onChange={(val) => setValue(val)}
          height="240px"
        />
      );
    }
```
---

🔧 Props

react-editor-z extends EditorProps from @monaco-editor/react.

| Prop       | Type                                               | Description                                                          |
| ---------- | -------------------------------------------------- | -------------------------------------------------------------------- |
| `readOnly` | `boolean`                                          | If `true`, the editor will be in read-only mode.                     |
| `rawJson`  | `boolean`                                          | If `true`, raw JSON is returned in `onChange` even if invalid.       |
| `style`    | `React.CSSProperties`                              | Inline styles applied to the editor container.                       |
| `getRefs`  | `(refsEditor: React.MutableRefObject<any>) => any` | Callback to access internal editor refs.                             |
| `onChange` | `(value?: string \| any, error?: boolean) => any`  | Called on content change; includes error flag if JSON parsing fails. |


#### RUN

<b><a href="https://codesandbox.io/p/sandbox/cdl2fd">LIVE EXAMPLE</a>

<br />

📝 License

MIT