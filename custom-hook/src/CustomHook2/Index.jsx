import useCounter from "./useCounter"

export default function Index(){
    const clickedButton = useCounter(0 , "FirstComponent"); 
     
    return (
        <div>
            <h1> This is the First Component</h1>
            <button onClick={clickedButton}> 
                  Click here!
            </button>

        </div>
    );
}