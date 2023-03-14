import { useState, useEffect } from 'react';
import {Preloader} from '../components/Preloader';
import {getMealById} from "../api";
import { useParams, useNavigate } from 'react-router-dom';


function Meal (){
    const {id} = useParams()
    const [meal, setMeal] = useState([]);
    const navigate = useNavigate();
    const clickHandler = ()=>{
        navigate(-1)
    }
    useEffect(()=>{
        getMealById(id).then((data) =>{
            setMeal(data.meals[0]);
            
        })

    },[id])
    const {
        strMeal: name,
        strCategory:category,
        strInstructions: recepie,
        strMealThumb: img,
        strArea: area,
        strYoutube: video
    } = meal;

    return <>
        {!meal.idMeal ? <Preloader/> : (
            <div className='meal main-content'>
                 <button className='btn back-btn' onClick={clickHandler}>Back</button>
                <h1>{name}</h1>
                <img src={img} alt={name} />
                <p>Category: {category}</p>
                <p>Area: {area}</p>
                {video ? (<div>
                    <h5>Vodeo recipe</h5>
                    <iframe src={`https://www.youtube.com/embed/${video.slice(-11)}`} title={id} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
                </div>): null}
                <p>{recepie}</p>
                <table>
                    <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(meal).map((key) =>{
                                if(key.includes('Ingredient') && meal[key]){
                                    return (
                                        <tr key={key}>
                                        <td>{meal[key]}</td>
                                        <td>
                                            {meal[`strMeasure${key.slice(13)}`]}
                                        </td>
                                    </tr>)
                                }
                                return null;
                            })
                        }
                    </tbody>
                </table>
            
           
            </div>
        )}
    </>
}

export {Meal}