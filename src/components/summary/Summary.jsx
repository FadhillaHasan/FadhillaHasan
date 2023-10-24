import "./Summary.scss"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function Summary() {
    return (
        <div className="summary" id="summary">
            <div className="left">
                <div className="wrapper">
                    <h3>With the increase of AI and translation tools, translations are easily accessible.</h3>
                    <p> However, being able to convey the emotions, semantic nuances and message to the right audience is difficult for technology to grasp. With over 4 years of translation, proof-reading and editing experience, I'm sure I will be able to meet your needs!</p>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h3>I can help you communicate clearly by:</h3>
                    <ul>
                        <li>Correcting errors</li>
                        <li>Suggesting more specific word choices</li>
                        <li>Repairing faulty sentence structures</li>
                        <li>Repairing faulty sentence structures</li>
                        <li>Eliminating wordiness</li>
                        <li>Improving organization</li>
                        <li>Conforming documents to the appropriate style</li>
                        <li>Emphasizing your voice or brand voice</li>
                    </ul>  
                </div>
                <a href="#works">
                    <KeyboardArrowDownIcon style={{fontSize:100}} className="arrow" />
                </a>
            </div>
        </div>
    )
}
