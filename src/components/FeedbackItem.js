import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from "./shared/Card"

function FeedbackItem({ item }) {

    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

    return (
        <Card>
            <div className='side-num-display'>{item.rating}</div>
            <button className='remove-btn' onClick={() => deleteFeedback(item.id)}>
                <i className='fas fa-times'></i>
            </button>
            <button onClick={() => editFeedback(item)} className='edit-btn'>
                <i className='fas fa-edit'></i>
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem

