import PropTypes from 'prop-types';

export default function Statistics({good, neutral, bad, total, positivePercentage}) {
    
    return (
        <div>
            <p>Good: <span>{good}</span></p>
            <p>Neytral: <span>{neutral}</span></p>
            <p>Bad: <span>{bad}</span></p>
            <p>Total: <span>{total}</span></p>
            <p>Positive feedback: <span>{positivePercentage + `%`}</span></p>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}