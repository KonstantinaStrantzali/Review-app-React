import React from 'react'
import Card from './shared/Card'
import { FaTimes} from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
  
function FeedbackItem({item}) {
  const {deleteFeedback} = useContext(FeedbackContext)
  
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
      <button className='close' onClick={() => deleteFeedback(item.id)}>
      <FaTimes  color ='purple'></FaTimes>
      </button>
    </Card>
  )
}

export default FeedbackItem
