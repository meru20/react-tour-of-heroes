import {Link} from 'react-router-dom';
import {FaStar, FaRegStar} from'react-icons/fa';
import {GiBatMask} from'react-icons/gi';
const HeroCardComponent = ({heroes}) => {
    return(
        <div className='row'>
        {heroes.map ((hero,index) => {
            return (
                <div className='col-sm-12 col-md-3' key={hero.id}>
                    <div className='card mb-3'>
                        <div className='card-header text-center'>
                            {hero.publisher}
                            </div>
                            <img src={hero.image_url} alt={hero.superhero} className='card-img-top'/> 
                            <div className='card-body'>
                                <h4 className='card-title'>{hero.superhero ==='Batman'? <GiBatMask/> : ''}{hero.superhero}</h4>
                                <h6 className='text-secondary' >"{hero.alter_ego}"</h6>
                                <div className='my-2'>
                                    <strong>First Appearance:</strong>{hero.first_appearance}</div>
                                    <div className='my-2'>
                                        <strong>Characters:</strong>
                                        {hero.characters.map((character,i) => {
                                            return(
                                                <small>{character} {i === hero.characters.length -1 ? '':', '} </small>
                                            )
                                        })}
                                    </div>
                                   <div className='my-2 d-flex justify-content-between'>
                                       <Link to={`/heroes/${hero.id}`} className='card-link'>View Details</Link>
                                       <a href='' className='card-link'>
                                           {!hero.featured ? <FaStar/>: <FaRegStar/>}
                                           
                                       </a>
                                   </div> 
                            </div>

                    </div>  
                </div>          
            )

        })}

    </div>
    )
}
export default HeroCardComponent;
