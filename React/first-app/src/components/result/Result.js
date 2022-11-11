import { Link } from 'react-router-dom';
import './Result.css';

function Result(props) {

    return <div className='result-item'>
        <span>{props.url}</span>
        <h4><Link to='./pages/counterPage'>{props.title}</Link></h4>
        <p>{props.summary}</p>
    </div>

}

export default Result;