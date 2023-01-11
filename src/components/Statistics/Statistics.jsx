import PropTypes from 'prop-types';

export function Statistics({good, neutral, bad, total, positivePercentage}) {
    return <>
                <ul>
                    <li><p>Good:<span> {good}</span></p></li>
                    <li><p>Neutral:<span> {neutral}</span></p></li>
                    <li><p>Bad:<span> {bad}</span></p></li>
                    </ul>
                <ul>
                    <li><p>Total:<span> {total}</span></p></li>
                    <li><p>Positiv feedback:<span> {positivePercentage}%</span></p></li>
                </ul>
            </>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}