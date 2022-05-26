import { useState, useEffect } from "react"
import getGifts from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        setTimeout(() => {
            getGifts(category)
                .then(images => setState({
                    data: images,
                    loading: false,
                }));
        }, 3000);
    }, [category]);

    return state;
}