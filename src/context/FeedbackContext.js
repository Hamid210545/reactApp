import { v4 as uuid } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 9
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 8
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // add function
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuid()
        setFeedback([newFeedback, ...feedback])
    }

    // delete funciton
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure to delete this item ?')) {
            setFeedback(feedback.filter((item) => item.id != id))
        }
    }

    // set Items to be updated

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //updated feedback

    const updatedFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
    }


    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updatedFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext


