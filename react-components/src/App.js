import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './components/data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
    <div>
      <Header></Header>
      <FeedbackList feedback = {feedback}></FeedbackList>
        
      

    </div>
    </>
  )
}

export default App