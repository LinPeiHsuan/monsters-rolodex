import './card.style.css';

const Card = ({monster}) => {
    return (
        <div className='Card'>
            <img alt="monster_images" src={`https://robohash.org/${monster.id}?set=set2&size=200x200`} />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )
};

export default Card;