import { tags as t } from '@lezer/highlight';
import CodeMirror from '@uiw/react-codemirror';
import React from 'react'
import { loadLanguage, langNames, langs } from '@uiw/codemirror-extensions-langs';
import { javascript } from '@codemirror/lang-javascript';
import { draculaInit } from '@uiw/codemirror-theme-dracula';
export default function CodeEditor() {
    const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: any, ) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  return (
    <CodeMirror value={value} height="100vh" width='80vh'  extensions={[loadLanguage('tsx')!]} onChange={onChange}
    
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

