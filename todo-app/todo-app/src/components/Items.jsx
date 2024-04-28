import { FaRegTrashCan } from "react-icons/fa6";


 function Items() {
  
  return (
    <div className="w-full border-b-2 p-3 flex justify-between">
      <div>
        <span className="pr-2 text-[14px] color text-slate-500">
          10:30AM
        </span>
        <span>
          ITEM
        </span>
      </div>
      <div>
      <FaRegTrashCan className="text-red-700"/>
      </div>
    </div>
  )
}
export default Items
