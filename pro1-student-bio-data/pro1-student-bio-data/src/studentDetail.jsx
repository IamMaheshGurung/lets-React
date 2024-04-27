import Marks from "./Marks"

function Students(props){
    return(
        <>
        <div className="idCard">
            <h3 id="mainSub">PERSONAL DATA</h3>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Address:{props.address}</p>
            <p>Student: {props.isStudent ? "Yes":"No"}</p>
            <Marks firstMark={ 75} firstPercentage=" 75%" firstResult="true"
            secondMark={78} secondPercentage=" 78%" secondResult="true"
            thirdMark={89} thirdPercentage=" 89%" thirdResult="true"/>
        </div>
        
        </>
    )
}
export default Students