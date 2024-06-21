import { Button } from './ui/Button'
import { Save, Share2Icon } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrentLanguage } from '@/reduxtoolkit/slice/comSlice'
import { RootState } from '@/reduxtoolkit/store'
  

export default function HelpHeader() {
  const dispatch  = useDispatch();
  const currentLanguage = useSelector((state:RootState)=>state.comSlice.currentLanguage);
  return (
    <div className=' __helper_header h-[50px] bg-black text-white p-2 flex justify-between  items-center'>
        <div className="__btn_container flex gap-3">
<Button variant="succes" className=' flex justify-center items-center gap-1'> <Save size={30}  />save</Button>
<Button  variant="ghost" className='flex justify-center items-center gap-1' > <Share2Icon size={30} />share</Button>
        </div>
      <div className='__tab_switcher flex justify-center items-center  gap-1'>
      <small> Current Language:</small>
      <Select  defaultValue={currentLanguage} onValueChange={(value) => dispatch(updateCurrentLanguage( value as comSliceStateType["currentLanguage"]))}>
  <SelectTrigger className="w-[120px] bg-gray-800 text-white  outline-none focus:ring-0">
    <SelectValue/>
  </SelectTrigger>
  <SelectContent className=' bg-black text-white'>
    <SelectItem value="html">HTML</SelectItem>
    <SelectItem value="css">CSS</SelectItem>
    <SelectItem value="javascript">JAVASCRIPT</SelectItem>
  </SelectContent>
</Select>

      </div>
    </div>
  )
}
