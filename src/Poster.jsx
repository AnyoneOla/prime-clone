import './Poster.css'

export default function Poster({img, title, desc}){

    return (
        <div className='poster-main'>
            <div className='poster-up-effect' />
            <div className='poster-left-effect' />
            <img src={img} />
            <div className='poster-head'>
                {title}
            </div>
            <div className='poster-text'>
                {desc.slice(0,200) + '...'}
            </div>
            <div className='poster-down-effect' />
        </div>
    )
}