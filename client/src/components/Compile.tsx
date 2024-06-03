import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable';
import CodeEditor from './CodeEditor';
import { tags as t } from '@lezer/highlight';
import { dracula, draculaInit } from '@uiw/codemirror-theme-dracula';
import HelpHeader from './HelpHeader';
const Compile = () => {
  console.error(combinedMessage);
  return (<>
  <ResizablePanelGroup
      direction="horizontal"
      className=" bg-gray-700"
    >
      <ResizablePanel defaultSize={50}>
        <HelpHeader/>
        <div className="flex h-[585px] w-[456px] min-w-[300px] items-center justify-center p-6  ">
          <CodeEditor/>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={85}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={100}>
            <div className="flex h-full items-center min-w-[300px] justify-center  p-6 border">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  </>
  )
}

export default Compile;
