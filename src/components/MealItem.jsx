import { Link } from "react-router-dom";

function MealItem (props){

    const{
        strMeal: mealName,
        strMealThumb: mealImg,
        idMeal:id
    } = props;

    return <div className="card">
    <div className="card-image">
        <img src={mealImg} alt={mealName}/>
    </div>
    <div className="card-content">
    <span className="card-title">{mealName}</span>
       
    </div>
    <div className="card-action">
        <Link to={`/meal/${id}`} className="btn"> Whatch meal recipe </Link>
    </div>
</div>
}

export {MealItem}