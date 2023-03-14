import { useEffect,useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {getFilteredCategory} from "../api"
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList'; 

function Category() {
    const navigate = useNavigate();
    const clickHandler = ()=>{
        navigate(-1)
    }
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    useEffect(()=>{
        getFilteredCategory(name).then(data =>{
            setMeals(data.meals)
        })
    },[name])
    
    return <>

    {!meals.length ? (<Preloader/>) : 
    (<div>
        <button className='btn back-btn' onClick={clickHandler}>Back</button>
        <MealList meals={meals}/></div>)}
    </>

}
export {Category}