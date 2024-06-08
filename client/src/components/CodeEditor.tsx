import { tags as t } from '@lezer/highlight';
import CodeMirror from '@uiw/react-codemirror';
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { loadLanguage} from '@uiw/codemirror-extensions-langs';
import { draculaInit } from '@uiw/codemirror-theme-dracula';
import { useSelector } from 'react-redux';
import { RootState } from '@/reduxtoolkit/store';
export default function CodeEditor() {
  const currentLanguage = useSelector((state:RootState)=>state.comSlice.currentLanguage);
    const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: any) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  return (
    <CodeMirror value={value} height="70vh" width='90vh'extensions={[loadLanguage(currentLanguage)!]} onChange={onChange}
    
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

