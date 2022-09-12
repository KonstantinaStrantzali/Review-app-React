import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
    <Header/>
    <div className="container">
      <FeedbackList feedback={feedback}></FeedbackList>
   
    </div>
    </>
  );
}

export default App;
