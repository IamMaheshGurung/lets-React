import { FcGoogle } from "react-icons/fc";
function Form(){
    return(
        <div className="bg-rose-50 px-10 py-20 border-red-700 rounded-3xl">
            <div>
            <h1 className="text-5xl font-semibold">Welcome Back;</h1>
            <p className='font-medium text-lg text-rose-800 mt-4'>Welcome back! please enter your details.</p>
        <div>
            <div>
                <label className='text-lg font-medium'>Username:</label>
                <input
                    className="w-full border-2 border-rose-700 rounded-xl p-4" 
                    type="text"
                    placeholder="spongebob"/>
            </div>
            <div>
                <label>Email ID:</label>
                <input
                    className="w-full border-2 border-rose-700 rounded-xl p-4"
                    type="text"
                    placeholder="linked email"/>
            </div>
            <div>
                <label>Password:</label>
                <input
                    className="w-full border-2 border-rose-700 rounded-xl p-4" 
                    type="password"
                    placeholder="*******"/>
            </div>
        </div>
        <div>
            <div>
                <input
                   
                    type="checkbox"
                    id="remember"/>
                    <label for="remember"  className="ml-2 text-purple-800">remember for 30 days</label>
            </div>
            <button className="font-medium text-base text-rose-500">Forgot Password</button>
        </div>
        </div>
        <div>
            <div className="flex item-center justify-center">
                <button className="hover:bg-rose-900 hover:w-80 active:w-60 active:duration-1000 active:transition-all bg-purple-900 text-white w-full h-10 border-none border-rose-700 rounded-xl p-1">SIGN IN</button>
            </div>
            </div>
            <div className="hover:text-rose-300 mt-4 border-2 rounded-xl  w-full flex justify-center items-baseline space-x-7">
                <FcGoogle className="justify-center h-5 w-5"/>
                <p className="text-base font-semibold">Sign with google</p>
            </div>
        
        </div>
    )


}
export default Form;