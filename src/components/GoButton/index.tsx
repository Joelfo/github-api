import './styles.css';

type Props = {
    type : "button" | "submit" | "reset";
    text : string;    
}

const GoButton = ({ type, text } : Props) => {
    return(<button type={ type } className="btn btn-primary go-btn">
        <p>{ text }</p>
    </button>);
}

export default GoButton;