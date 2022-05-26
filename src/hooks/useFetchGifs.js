import { useState, useEffect } from "react"
import getGifts from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifts(category)
            .then(images => setState({
                data: images,
                loading: false,
            }));
    }, [category]);

    return state;
}