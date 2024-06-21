import { RootState } from "@/reduxtoolkit/store";
import { useSelector } from "react-redux";

const Rendercode = () => {
  const fullCode = useSelector((state: RootState) => state.comSlice.fullCode);
  const combinedCode = `<html><style>${fullCode.css}</style><body>${fullCode.html}</body><script>${fullCode.javascript}</script></html>`;
  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCode
  )}`;
  return (
    <div className=" bg-white border-2 border-red-500 h-[calc(100vh-60px)]">
      <iframe className="h-full w-full" src={iframeCode}></iframe>
    </div>
  );
};

export default Rendercode;
