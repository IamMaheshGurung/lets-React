import { FaPlus } from "react-icons/fa";
function Input(){
    return(
        <div className="p-3 flex justify-between">
            <input type="text" placeholder="May I remind you something 🤓" className="p-3 focus:outline-none w-full mx-auto border-slate-500 rounded "/>
            <div className='cursor-pointer w-[50px] h-[50px bg-red-700 text-white rounded-[50%] flex justify-center items-center p-2 ml-3'>
            <FaPlus/>
            </div>
        </div>
    )
}

export default Input