import { MealItem } from "./MealItem";

function MealList ({meals=[]}){

    return <div className="cards-container">

        {meals.map(item =>{
            return  <MealItem key={item.idMeal} {...item}/>

           
        })}
    </div>
}

export {MealList}