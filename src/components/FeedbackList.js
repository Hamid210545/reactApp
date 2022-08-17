import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from "../context/FeedbackContext"



function FeedbackList() {
    const { feedback } = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return <h1 className='no-feedback'>No Feedback Yet</h1>
    }

    return (
        <div className="container">
            {
                feedback.map(item => {
                    return <FeedbackItem
                        key={item.id}
                        item={item}
                    />
                })
            }
        </div >
    )
}

export default FeedbackList
