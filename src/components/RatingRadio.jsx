import './styles/RatingRadio.css'

export const RatingRadio = (props) =>
{
    const {id} = props;

    const selectHandler = () =>
    {
        let ratingRow = document.getElementsByClassName('rating-radio-container');
        for(let locator = 0; locator < ratingRow.length; locator++)
        {
            let containerNumber = (locator+1).toString();
            let container = document.getElementById(containerNumber);
            if(locator === id-1)
            {
                container.classList.add('rating-radio-container-selected');
            }
            else
            {
                container.classList.remove('rating-radio-container-selected');
            }
        }
    }

    return(
        <div 
        className="rating-radio-container"
        id={id}
        onClick={selectHandler}
        >
            <input 
            className="radio-button"
            name="rating"
            type="radio" 
            value={id}
            />
            <label
            htmlFor={id}
            >
                {id}
            </label>
        </div>
    )
}