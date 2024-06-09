import { tags as t } from '@lezer/highlight';
import CodeMirror from '@uiw/react-codemirror';
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { loadLanguage} from '@uiw/codemirror-extensions-langs';
import { draculaInit } from '@uiw/codemirror-theme-dracula';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/reduxtoolkit/store';
import {  updateCurrentLanguage, updateCurrentCode  } from '@/reduxtoolkit/slice/comSlice';
export default function CodeEditor() {
  const currentLanguage = useSelector((state:RootState)=>state.comSlice.currentLanguage);
const currentCode = useSelector((state:RootState)=>state.comSlice.currentCode);
  const dispatch = useDispatch();
    const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((value: string) => {
    // console.log('val:', typeof val);
    // setValue(val);
    
  }, []);
  return (
    <CodeMirror value={currentCode} height="70vh" width='90vh'extensions={[loadLanguage(currentLanguage)!]} onChange={onChange}
    
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

