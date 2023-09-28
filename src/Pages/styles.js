import styled from "styled-components";
import { mobile } from "../Responsive";
import { tablet } from "../Responsive";

const HomeContainer=styled.div`   
    height:100%;
    width:100%;
    ${mobile({
        height:'100%'
    })}
  
    
`

const MainWrapper=styled.div`
    height: 100%;
    padding: 4em;
    max-width:75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    ${mobile({
        padding:'3em 0.75em',maxWidth:'100%',fontSize:'1rem'
    })}
     ${tablet({
       padding:'3em 1em',maxWidth:'100%'
    })}
`

const Top=styled.div`
     width: 100%;
     margin: 1em auto;
    
`

const LocationWrapper =styled.div`
      padding: 0.5em 4em;
      ${mobile({
       padding: '0.75em'
    })}
`

const Location=styled.h2`
      font-weight: 540;
`

const TemperatureWrapper=styled.div`
   padding: 0.5em 4em;
   ${mobile({
       padding: '0.75em'
    })}
`

const Temperature=styled.h1`
   font-size:4rem;
   ${mobile({
        fontSize:'2rem'
    })}
  
`


const Select=styled.select`
     width:45%;
     padding: 0.6em;
     margin:1em;
     font-size: 1.2rem;
     background-color: rgba(255,255,255,0.8);
     border: none;
     border-radius: 10px;
     outline: none;
     &:focus{
        border: none;
     }
     ${mobile({
        fontSize:'0.95rem',marginTop:'1.5em'
    })}

`


const Option=styled.option`
    padding: 0.6em;
    cursor:pointer;

`
const DescriptionWrapper=styled.div`
     padding: 1.5em 4em;
     ${mobile({
       padding: '0.5em'
    })}
`

const Description=styled.h2`
    font-weight: 540;
`
const Center=styled.div`
     width: 100%;
     margin: 1em auto;
     text-align: center;
     ${mobile({
        margin:'2em 0em'
    })}

`
const Bottom=styled.div`
  width: 100%;
  margin: 1em auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  font-size: 1.6rem;
  ${mobile({
        margin:'1.7em 0em',
        fontSize:'1rem'
    })}

`

const Feels=styled.p`


`


const Humidity=styled.p`


`

const Wrapper=styled.div`
   background-color: rgba(0,0,0,0.2);
   padding: 1.5em;
   border-radius: 20px;
   font-weight:600;
   ${mobile({
        padding:'0.5em'
    })}
`

const Wind=styled.p`
  

`
const SubTitle=styled.h3`
    font-weight: 400;
    ${mobile({
        fontSize:'1rem'
    })}

`
export {HomeContainer,MainWrapper,
        Top,Bottom,
        SubTitle,Select,Option,
        Temperature,TemperatureWrapper,
        Location,LocationWrapper,
        Description,DescriptionWrapper,
        Feels,Humidity,Wind,Wrapper,Center}