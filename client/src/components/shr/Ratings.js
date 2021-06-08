import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

const Ratings = ({value, text, color}) => {
    return (
        <div className="rating">
            <span style={{color}}>
            <FontAwesomeIcon icon={value >= 1 ? faStar : value >= 0.5 ? faStarHalf : farStar } /> 
            <FontAwesomeIcon icon={value >= 2 ? faStar : value >= 1.5 ? faStarHalf : farStar } /> 
            <FontAwesomeIcon icon={value >= 3 ? faStar : value >= 2.5 ? faStarHalf : farStar } /> 
            <FontAwesomeIcon icon={value >= 4 ? faStar : value >= 3.5 ? faStarHalf : farStar } /> 
            <FontAwesomeIcon icon={value >= 5 ? faStar : value >= 4.5 ? faStarHalf : farStar } /> 
            </span>
            <span>{text && text}</span>
        </div>
    )
}

//*pasamos un default por si el color llegara a no venir del padre!
    Ratings.defaultProps = {
        color: '#f8d825'
    }

export default Ratings
