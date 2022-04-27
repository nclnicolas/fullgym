import { useEffect, useState } from "react"
import productos from "../utiles/productos";
import ItemDetail from "./ItemDetail";
import customFetch from "../utiles/customFetch";
import { useParams } from "react-router-dom";
import {detalleProducts} from "../utiles/fetchFirebase"

const ItemDetailContainer = () => {
    const [datos, setDato] = useState({});
    const { id } = useParams();

    useEffect(() => {
        detalleProducts(id)
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={datos} />
    );
}
export default ItemDetailContainer;
