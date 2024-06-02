import { tags as t } from '@lezer/highlight';
import CodeMirror from '@uiw/react-codemirror';
import React from 'react'
import { javascript } from '@codemirror/lang-javascript';
import { draculaInit } from '@uiw/codemirror-theme-dracula';
export default function CodeEditor() {
    const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: any, ) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  return (
    <CodeMirror value={value} height="90vh" width='70vh' extensions={[javascript({ jsx: true })]} onChange={onChange}
    theme={draculaInit({
        settings: {
          caret: '#c6c6c6',
          fontFamily: 'monospace',
        },
        styles: [
          { tag: t.comment, color: '#6272a4' },
        ]
      })} />
  )
}

