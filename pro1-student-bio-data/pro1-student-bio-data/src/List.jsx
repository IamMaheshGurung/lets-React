function List(props){

    const category=props.category;
    const itemsList=props.items


    const hobbiesItem = itemsList.map(item=> <li key={hobby.id}>{hobby.name}:&nbsp;<b>{hobby.interest}</b></li>);
    
    
    return (
        <div id="hobby">
            <h2>HOBBIES</h2>
            <ol> {hobbiesItem}</ol>
        </div>);
}
export default List