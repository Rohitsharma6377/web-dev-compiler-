import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable';
import CodeEditor from './CodeEditor';
import HelpHeader from './HelpHeader';
import Rendercode from './Rendercode';
const Compile = () => {
  
  return (<>
  <ResizablePanelGroup
      direction="horizontal"
      className=" bg-gray-700"
    >
      <ResizablePanel defaultSize={70} className='h-[calc(100vh-60px)] min-w-[350px]' >
        <HelpHeader/>
        <div className="flex h-[390px] w-[496px] min-h-[400px] mb-10 min-w-[300px] items-center justify-center   ">
          <CodeEditor/>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={80} className='h-[calc(100vh-60px)] min-w-[350px]'>
        
        <Rendercode/>
      </ResizablePanel>
    </ResizablePanelGroup>
  </>
  )
}

export default Compile;
