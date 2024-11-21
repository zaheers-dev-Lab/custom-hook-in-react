import {useState, useEffect} from "react";

export default function useCounter(initializer, componentName){
    const [counter , setCounter] = useState(initializer);
     
    // Increases the value of counter by 1
       function resetCounter(){
        setCounter(counter + 1);
        value= counter;
    }
     
 
    useEffect(() => {
        // Some logic that will be used in multiple components
        console.log("The button of the "
        + componentName + " is clicked "
        + counter + " times.");
    } , [counter , componentName]); 
     
    // Calls the useEffect hook if the counter updates
    return resetCounter;
}
 