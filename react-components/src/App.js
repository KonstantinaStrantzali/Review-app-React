import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './components/data/FeedbackData'
import FeedbackItem from './components/FeedbackItem'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id))
  }
  return (
    <>
    <div>
      <Header></Header>
      <FeedbackList feedback = {feedback} handleDelete = {deleteFeedback}></FeedbackList>
        
      

    </div>
    </>
  )
}

export default App