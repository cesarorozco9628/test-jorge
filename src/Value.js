import React,{useState} from "react";
import Data from "./Quotes.json";
import QuotesBox from './QuotesBox';
import Colors from "./Colors.json";


const Text = (value) => {

    value = Math.floor(Math.random()*(0-102)+102);

    return value;
}
const view = (colors) => {

    colors = Math.floor(Math.random()*(0-17)+17);

    return colors;
}

const Value = ()=> {
    const [InValue, setInValue] = useState(0);
    const [InColors , setInColors ] = useState(0);

    const handleAll =() => {
        setInValue ( Text (InValue));
        setInColors ( view (InColors));
    }
    return(
        <QuotesBox 
        quotes = {Data.quotes[InValue].quote} 
        author ={Data.quotes[InValue].author} 
        ChangeText ={handleAll} 
        color = {Colors.colors[InColors].color}
        />
    )
}

export default Value;