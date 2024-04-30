import Header from './Header.jsx'
import Students from './studentDetail.jsx'
import UserGreeting from './Greeting.jsx'
import Parents from './Parents.jsx'


function App() {
  return (
    <>
      <Header/>
      <UserGreeting isLoggedIn={true} userName=" Mahesh Gurung,"/>
      <Students name="Mahesh Gurung" age={30} address="Harewa 06, Shantipur Gulmi" isStudent="yes"/>
      <Parents name="Mahesh Gurung"/>
      
    </>
  )
}


export default App
