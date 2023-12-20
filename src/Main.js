import React, {useEffect, useReducer, useState} from 'react'
import BookingPage from './BookingPage';


function reducer(state, action) {
    if(action.type === "UPDATE WEEKEND") {
      return {
        availableTimes: ["7pm", "8pm", "9pm"]
      }
    }
    else {
      return {
        availableTimes: initializeTimes(),
      }
    }
}

function initializeTimes() {
  return ["7am", "8am", "9am"];
}



const Main = () => {

  const [state, dispatch] = useReducer(reducer, {availableTimes: initializeTimes()})
  const {availableTimes} = state;

  const updateWeekendTimes = () => {
    dispatch({type: "UPDATE WEEKEND"});
  }

  const updateWeekDayTimes = () => {
    dispatch({type: "UPDATE WEEKDAY"})
  }


  useEffect(()=> {
    fetch("https://rickandmortyapi.com/api/character")
    .then((res)=>res.json())
    .then((data) => {
      console.log(data);
    })
  },[])

  return (
    <>
    <BookingPage availableTimes={availableTimes} updateWeekendTimes={updateWeekendTimes} updateWeekDayTimes={updateWeekDayTimes}/>
    </>
  )
}

export default Main
