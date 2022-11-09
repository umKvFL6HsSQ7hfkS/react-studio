// TODO: create a component that displays a single bakery item
import "../bakery-component.css";

export default function BakeryItem({item, prop2, updateCart}){


    return (
        // <img src="public/images/anika.png"> </img>
        <div > {prop2} {item.name} {item.price}
        <img class="bakery-img" src={item.image}/>
        <button onClick={() => {
            updateCart(item);
        }}>
        Add to cart </button>
        </div>

    )
}
