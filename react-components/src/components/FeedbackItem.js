import React from 'react'
import Card from './shared/Card'
import { FaTimes} from 'react-icons/fa'
 
function FeedbackItem({item, handleDelete}) {
  
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
      <button className='close' onClick={() => handleDelete(item.id)}>
      <FaTimes  color ='purple'></FaTimes>
      </button>
    </Card>
  )
}

export default FeedbackItem
