import Card from './Card'
import './Raw.css'

export default function Raw({top, position, data, name}){
    const Image_URL = 'https://image.tmdb.org/t/p/original'
    let arr = [];
    for(let element in data){
        arr.push(<Card image={Image_URL + data[element].backdrop_path} key={element}/>)
    }

    return (
        <div className='raw-main' style={{position:position, top:top}}>
            <div className='raw-title'>{name}</div>
            <div className='card-container'>
                {arr}
            </div>
        </div>
    )
}