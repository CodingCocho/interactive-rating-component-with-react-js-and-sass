import {useState} from 'react';
import starImage from '../images/icon-star.svg';
import thankYouImage from '../images/illustration-thank-you.svg'
import {RatingRadio} from './RatingRadio';
import './styles/RatingComponent.css';

export const RatingComponent = () =>
{

    const [rating,setRating] = useState(0);

    const getRating = () =>
    {
        let selectedRadio = document.getElementsByClassName('rating-radio-container-selected');
        if(selectedRadio.length === 0)
        {
            return;
        }
        let idRating = selectedRadio[0].id;
        setRating(idRating);
        let stateElements = [
            document.getElementById('state-element-1'),
            document.getElementById('state-element-2'),
            document.getElementById('state-element-3'),
            document.getElementById('state-element-4'),
            document.getElementById('state-element-5'),
        ]

        let stateElements2 = [
            document.getElementById('state-element-6'),
            document.getElementById('state-element-7'),
            document.getElementById('state-element-8'),
            document.getElementById('state-element-9'),
        ]
        
        for(let locator = 0; locator < stateElements.length; locator++)
        {
            stateElements[locator].style.display = 'none';
        }

        for(let locator = 0; locator < stateElements2.length; locator++)
        {
            stateElements2[locator].style.display = 'block';
        }

        
    }

    return(
        <div
        className="rating-component-container"
        >
            {/* Hold container for star image */}
            <div 
            className="star-image-container"
            id='state-element-1'
            >
                <img 
                alt="star" 
                className="star-image" 
                src={starImage} 
                />
            </div>
            
            <p 
            className="rating-question"
            id='state-element-2'
            >
                How did we do?
            </p>
            
            <p 
            className="rating-instructions"
            id='state-element-3'
            >
                Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!
            </p>

            <div 
            className="rating-button-row"
            id='state-element-4'
            >
                <RatingRadio 
                id="1"
                />
                <RatingRadio 
                id="2"
                />
                <RatingRadio
                id="3"
                />
                <RatingRadio
                id="4"
                />
                <RatingRadio
                id="5"
                />
            </div>

            <button
            className="submit-button"
            id='state-element-5'
            onClick={getRating}
            >
                SUBMIT
            </button>

            <img 
            alt="thank-you" 
            className="thank-you-image" 
            id="state-element-6" 
            src={thankYouImage} 
            />

            <div 
            className="rating-selected-container" 
            id="state-element-7"
            >
                <p 
                className="rating-message"
                >
                    You selected {rating} out of 5
                </p>
            </div>

            <p 
            className="thank-you-message" 
            id="state-element-8"
            >
                Thank you!
            </p>

            <p 
            className="appreciation-message" 
            id="state-element-9"
            >
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!
            </p>
        </div>
    )
}