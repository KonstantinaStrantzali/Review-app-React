import { createContext, useState } from "react";
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState( [{
        id : 1,
        text : "This is text",
        rating: 5,
    }
])
const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
      console.log(id)
      
    }
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

    return <FeedbackContext.Provider value= {{
        feedback,
        deleteFeedback,
        addFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>

}
export default FeedbackContext