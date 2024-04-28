import Box from "./components/Box.jsx"
import Input from "./components/Input"

function App() {

  return (
    <>
      <div className="bg-redh-screen p-3">
        <div className="rounded mx-auto max-w-[750px] min-h-[750px] shadow-2xl bg-purple-200">
        <Input/>
        <Box/>
        </div>
      </div> 
    </>
  )
}

export default App
