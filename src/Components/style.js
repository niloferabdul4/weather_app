import styled from "styled-components";
import { mobile } from "../Responsive";
import { tablet } from "../Responsive";


const SearchBar=styled.div`
   text-align: center;
   padding: 1rem;
  

`
const Input=styled.input`
  
   padding: 1em;
   width: 60%;;
   border: none;
  align-self: center;
   border-radius: 10px;
   font-size: 1.3rem;
   outline: none;
   background: rgba(255,255,255, 0.5);
  color: #f8f8f8;
   &:focus{
    border: none;
   }
   &::placeholder{
    color: #f8f8f8;

   }
   ${mobile({
        fontSize:'1rem',width:'100%'
    })}
     ${tablet({
        width:'100%'
    })}
`
const Button=styled.button`
   font-size: 1.3rem;
   padding: 1em;;
   border: none;
   border-radius: 10px;
   cursor: pointer;
   margin: 0 2em;
   font-weight: 540;
   background-color: rgba(255,255,255,0.8);
   &:hover{
      background-color: rgba(255,255,255,0.3);
   }
   ${mobile({
        fontSize:'1rem',marginTop:'1.5em'
    })}
     ${tablet({
        fontSize:'1.1rem',marginTop:'1.5em'
    })}

`

export {SearchBar,Input,Button}