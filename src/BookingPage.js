import React, {useState} from 'react'
import BookingForm from './BookingForm'

const BookingPage = (props) => {
    const [formatData, setFormatData] = useState({
        date: '',
        time: '',
        guest: 1,
        occasion: "birthday",
    });

    const handleSubmit = (e) => {
            e.preventDefault();
            console.log("form submitted", formatData);
    }

    const handleFormChange = (field, value) => {
            setFormatData((prevFormatData) => ({...prevFormatData, [field]: value}))
    }
    
    return (
      
    <BookingForm
    formatData = {formatData}
    handleFormChange = {handleFormChange}
    updateWeekDayTimes = {props.updateWeekDayTimes}
    updateWeekendTimes = {props.updateWeekendTimes}
    availableTimes = {props.availableTimes}
    handleSubmit = {handleSubmit}
    />
  )
}

export default BookingPage
