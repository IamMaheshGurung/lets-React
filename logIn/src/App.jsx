import Form from "./Form"

function App() {
  

  return (
    <>
    <div className="bg-rose-100 flex w-full h-screen">

      <div className="w-full flex items-center justify-center lg:w-1/2">
       <Form/>
      </div>
      <div className="hidden lg:flex h-full relative items-center w-1/2 justify-center bg-purple-50">
        <div className="w-60 h-60 bg-gradient-to-tr from-rose-500 animate-bounce duration-2000 rounded-full"></div>
        <div className="w-40 h-40 bg-gradient-to-tr from-purple-500 animate-bounce duration-1000 rounded-full"></div>
        <div className="w-20 h-20 bg-gradient-to-tr from-blue-500 animate-bounce duration-500 rounded-full"></div>
        <div className="w-full h-1/2 absolute bg-white/10 bottom-10  backdrop-blur-lg"></div>
      </div>
    </div>
      
    </>
  )
}

export default App
