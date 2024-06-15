import './Card.css'

export default function Card({image}){

    return (
        <div className='card-main'>
            <img src={image}  alt="" />
        </div>
    )
}