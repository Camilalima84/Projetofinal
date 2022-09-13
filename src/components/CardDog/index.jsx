

import './style.css';

export const CardDog = ({ data }) => {
    return (
        <>
        {data.map((item, key) => {
            return (
                <div key={key} className='card-dog'>{item.name}</div>
                
            )
        })}</>
    )
}