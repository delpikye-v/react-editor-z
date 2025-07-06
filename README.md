<div align="center">
    <h1>react-editor-z</h1>
    <a href="https://www.npmjs.com/package/react-editor-z">react-editor-z</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/p/sandbox/cdl2fd">LIVE EXAMPLE</a></b>
</div>

---

[![NPM](https://img.shields.io/npm/v/react-editor-z.svg)](https://www.npmjs.com/package/react-editor-z) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![downloads](https://img.shields.io/npm/dt/react-editor-z.svg)


#### Description

A customizable wrapper component built on top of [@monaco-editor/react](https://www.npmjs.com/package/@monaco-editor/react) - Default json mode

🔍 JSON mode with built-in validation
📦 Access to internal editor ref
---


#### Preview
![JSON](https://github.com/delpikye-v/react-editor-z/blob/main/preview.png)

#### Usage

Install the package

```js
npm install react-editor-z
```

Import the module in the place you want to use:
```js
import CodeEditor from "react-editor-z";

```
#### Snippet
```js
    // default json
    <ReactCodeEditor
      // language="json"
      // value={value}
      // onChange={(value) => {
      //   setValue(value);
      // }}
      height="240px"
    />
```
---

#### props

see <b>index.d.ts</b>

```js
extends EditorProps
```

| Prop       | Type                                               | Description                                                              |
| ---------- | -------------------------------------------------- | ------------------------------------------------------------------------ |
| `readOnly` | `boolean`                                          | If `true`, the editor will be in read-only mode.                         |
| `rawJson`  | `boolean`                                          | If `true`, raw JSON will be response to `onChange` even if it's invalid. |
| `style`    | `React.CSSProperties`                              | Inline styles to apply to the editor.                                    |
| `getRefs`  | `(refsEditor: React.MutableRefObject<any>) => any` | Callback to access internal editor refs.                                 |
| `onChange` | `(value?: string \| any, error?: boolean) => any`  | Called when the content changes; includes error status for JSON parsing. |

<br />

#### Note

<br />

#### RUN

<b><a href="https://codesandbox.io/p/sandbox/cdl2fd">LIVE EXAMPLE</a>

<br />

#### License

MIT
