import { useEffect } from 'react'

import { api } from '../../api';
import './style.css'

export const Home = () => {

    useEffect(() => {
       api.get('/breeds').then(response => {
        console.log(response)
       })
    }, []);

    return (
        <div className='pagina-home'>pagina de home</div>
    )
}