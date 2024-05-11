function List(props){

    const category=props.category;
    const itemsList=props.items


    const hobbiesItem = itemsList.map(item=> <li key={item.id}>{item.name}:&nbsp;<b>{item.interest}</b></li>);
    
    
    return (
        <div id="hobby">
            <h2>HOBBIES</h2>
            <ol> {hobbiesItem}</ol>
        </div>);
}
export default List