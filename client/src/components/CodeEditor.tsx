import { tags as t } from '@lezer/highlight';
import CodeMirror from '@uiw/react-codemirror';
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { loadLanguage} from '@uiw/codemirror-extensions-langs';
import { draculaInit } from '@uiw/codemirror-theme-dracula';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/reduxtoolkit/store';
import {  updateCodevalue  } from '@/reduxtoolkit/slice/comSlice';
export default function CodeEditor() {
  const currentLanguage = useSelector((state:RootState)=>state.comSlice.currentLanguage);
const fullCode = useSelector((state:RootState)=>state.comSlice.fullCode);
  const dispatch = useDispatch();
    const [] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((value: string) => {
    // console.log('val:', typeof val);
    // setValue(val);
    dispatch(updateCodevalue(value));
    
  }, []);
  return (
    <CodeMirror value={fullCode[currentLanguage]} height="70vh" width='90vh'extensions={[loadLanguage(currentLanguage)!]} onChange={onChange}
    
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

