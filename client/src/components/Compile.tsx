import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable';
import CodeEditor from './CodeEditor';
import { tags as t } from '@lezer/highlight';
import { dracula, draculaInit } from '@uiw/codemirror-theme-dracula';
import HelpHeader from './HelpHeader';
const Compile = () => {
  
  return (<>
  <ResizablePanelGroup
      direction="horizontal"
      className=" bg-gray-700"
    >
      <ResizablePanel defaultSize={70}>
        <HelpHeader/>
        <div className="flex h-[390px] w-[496px] min-h-[400px] mb-10 min-w-[300px] items-center justify-center   ">
          <CodeEditor/>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={80}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center min-h-[200px] min-w-[300px] justify-center  p-6 border">
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
