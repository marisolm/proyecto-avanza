import {Link } from "react-router";
import "./Item.css";


const Item = ({ product }) => {
    const thumbnail = product.images?.length > 0 ? product.images[0] : product.image;

    return (
        <div className="item">
            <img className="item-img" src={thumbnail} alt={product.name} />
            <h3 className="item-title">{product.name}</h3>
            <p className="item-price">Precio: ${product.price}</p>
            <Link to={`/detail/${product.id}`} className="item-button">Más información</Link>
        </div>
    );
}

export default Item;