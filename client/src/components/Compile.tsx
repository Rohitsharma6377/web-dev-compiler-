import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable';
import CodeEditor from './CodeEditor';

const Compile = () => {
  return (<>
  <ResizablePanelGroup
      direction="horizontal"
      className=" bg-gray-700"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[585px] w-[456px] min-w-[300px] items-center justify-center p-6  ">
          <CodeEditor/>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={100}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70}>
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
