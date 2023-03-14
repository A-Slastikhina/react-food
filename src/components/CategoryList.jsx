import { CategoryItem } from "./CategoryItem"
function CategoryList ({catalog=[]}){
    return <div className="cards-container" >
        {catalog.map(function(item){
           return <CategoryItem key={item.idCategory} {...item}/>
        })}
    </div>
}
export {CategoryList}