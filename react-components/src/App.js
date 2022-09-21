import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './components/data/FeedbackData'
import FeedbackItem from './components/FeedbackItem'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App() {
  
  const [feedback, setFeedback] = useState(FeedbackData)
  
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')){
    setFeedback(feedback.filter((item) => item.id !== id))
  }
}
  return (
    <>
    <div>
      <Header></Header>
      <div className='container'>
      <FeedbackForm></FeedbackForm>
      <FeedbackStats feedback={feedback}></FeedbackStats>
      <FeedbackList feedback = {feedback} handleDelete = {deleteFeedback}></FeedbackList>
        
      
    </div>
    </div>
    </>
  )
}

export default App