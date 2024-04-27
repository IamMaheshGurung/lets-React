function UserGreeting(props){

    if(props.isLoggedIn){
        return <h2>Welcome{props.userName}</h2>;
    }
        return<h2>Please Log in first to see result</h2>

}


export default UserGreeting