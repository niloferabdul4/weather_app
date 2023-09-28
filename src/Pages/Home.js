import React, { useContext, useState } from 'react'
import { HomeContainer,MainWrapper,
        Top,Bottom,Center,
        Temperature,TemperatureWrapper,
        Location,LocationWrapper,
        Description,DescriptionWrapper,
        Feels,Humidity,Wrapper,
        Wind,SubTitle,Select,Option } from './styles'
import Search from '../Components/Search'
import { AppContext } from '../Context/AppContextProvider'

const Home = () => {
    const {location,data}=useContext(AppContext)
    const [isFahrenheit,setIsFahrenheit]=useState(true)
  
  return (
    <>
    <HomeContainer>
        <MainWrapper>      
       <Top>     
            <Search/>           
       </Top>
        <Center>
            <LocationWrapper>
                <Location>{`${location.toUpperCase()}`}</Location>
            </LocationWrapper>
            {data.main? 
            ( <TemperatureWrapper>
                <Temperature>{isFahrenheit ? (`${data.main.temp.toFixed()}`) : (`${((data.main.temp-32)*5/9).toFixed()}`)} {isFahrenheit ? 'ºF' :'ºC'}</Temperature>
                <Select onChange={()=>setIsFahrenheit(fahrenheit=>!fahrenheit)}>
                    <Option value='Fahrenheit' >Fahrenheit</Option>
                    <Option value='Celcius' >Celcius</Option>
                </Select>
                </TemperatureWrapper>
            )
            :
            null
            }
             {data.weather? 

                (<DescriptionWrapper>
                <Description>{data.weather[0].description}</Description>
                </DescriptionWrapper>
                )
                :
                null
                }
        </Center>
            
        <Bottom>
           {data.main?
            (<Wrapper>
                 <SubTitle>Feels Like</SubTitle>
                 {data.main? (<Feels>{data.main.feels_like}°</Feels>):null}
            </Wrapper>
            )
            :
            null}
            {data.main? 
            (<Wrapper>
                <SubTitle>Humidity</SubTitle>
                {data.main? (<Humidity>{data.main.humidity}%</Humidity>):null}
            </Wrapper>
            )
            :
            null
            }
            {data.wind? 
            (<Wrapper>
                <SubTitle>Wind Speed</SubTitle>
                <Wind>{`${data.wind.speed} MPH`}</Wind>
            </Wrapper>
            )
            :
            null}
      </Bottom>
      </MainWrapper>
    </HomeContainer>
      
    </>
  )
}

export default Home
