import { Link } from "react-router-dom";

function CategoryItem(props) {
  const {
    idCategory: id,
    strCategory: catName,
    strCategoryThumb: catImg,
    strCategoryDescription: catDescr,
  } = props;

  return  <div className="card">
            <div className="card-image">
                <img src={catImg} alt={catName}/>
            </div>
            <div className="card-content">
            <span className="card-title">{catName}</span>
                <p className="card-descr">{catDescr.slice(0, 60)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${catName}`} className="btn"> Whatch category </Link>
            </div>
        </div>
}
export { CategoryItem };
