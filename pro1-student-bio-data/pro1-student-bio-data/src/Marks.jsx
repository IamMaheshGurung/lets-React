

function Marks(props){
    return(
        <>
            <div className="Marksheet">
                <h3 className="Term">FIRST TERMINAL EXAM</h3>
                <hr/>
                <p>TOTAL MARKS: {props.firstMark}</p>
                <p>PERCENTAGE:{props.firstPercentage}</p>
                <p>RESULT: {props.firstResult ? "PASS":"FAIL"}</p>
                <hr/>
                <hr/>
                <h3 className="Term">SECOND TERMINAL EXAM</h3>
                <hr/>
                <p>TOTAL MARKS: {props.secondMark}</p>
                <p>PERCENTAGE:{props.secondPercentage}</p>
                <p>RESULT: {props.secondResult ? "PASS":"FAIL"}</p>
                <hr/>
                <hr/>
                <h3 className="Term">THIRD TERMINAL EXAM</h3>
                <hr/>
                <p>TOTAL MARKS: {props.thirdMark}</p>
                <p>PERCENTAGE:{props.thirdPercentage}</p>
                <p>RESULT: {props.thirdResult ? "PASS":"FAIL"}</p>
            </div>
        </>
    )
}
export default Marks