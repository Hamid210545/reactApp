import { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from './RatingSelect'
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setButtonDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const { addFeedback, feedbackEdit, updatedFeedback } = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setButtonDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleText = (e) => {
        setText(e.target.value)

        if (text === '') {
            setButtonDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setButtonDisabled(true)
        } else {
            setButtonDisabled(false)
            setMessage(null)
        }
    }

    const hanldeSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }

            if (feedbackEdit.edit === true) {
                updatedFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            setText('')
        }
    }

    return (
        <Card className="feedback-form">
            <form onSubmit={hanldeSubmit}>
                <h4 className="feedback-question">How would you rate our service?</h4>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="feedback-input-group">
                    <input
                        type="text"
                        placeholder="write a review..."
                        onChange={handleText}
                        value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>


        </Card>
    )
}

export default FeedbackForm