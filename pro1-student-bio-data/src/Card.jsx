import profilePic from './profile.jpg'
function Card(){

    return(
        <div className="Card">
            <img id = "profile" src={profilePic}/>
            <h1 id="name">Mahesh Gurung</h1>
            <p id="description">I love bike riding</p>
        </div>
    )
}
export default Card;