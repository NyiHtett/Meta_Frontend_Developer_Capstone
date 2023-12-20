import React, { useEffect, useReducer, useState } from "react";
import BookingPage from "./BookingPage";
import { fetchAPI, submitAPI } from "./utils/Api";
function reducer(state, action) {
  if (action.type === "UPDATE WEEKEND") {
    return {
      availableTimes: ["19:00 pm", "20:00 pm", "21:00 pm"],
    };
  } else {
    return {
      availableTimes: initializeTimes(),
    };
  }
}

function initializeTimes() {
  return fetchAPI(new Date());
}

const Main = () => {
  const [state, dispatch] = useReducer(reducer, {
    availableTimes: initializeTimes(),
  });
  const { availableTimes } = state;

  const updateWeekendTimes = () => {
    dispatch({ type: "UPDATE WEEKEND" });
  };

  const updateWeekDayTimes = () => {
    dispatch({ type: "UPDATE WEEKDAY" });
  };

  return (
    <>
      <BookingPage
        availableTimes={availableTimes}
        updateWeekendTimes={updateWeekendTimes}
        updateWeekDayTimes={updateWeekDayTimes}
      />
    </>
  );
};

export default Main;
