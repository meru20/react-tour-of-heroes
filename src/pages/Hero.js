import {useEffect, useState } from 'react';
// import '../App.css';
import {heroData} from '../data/heroes';
import { useParams } from 'react-router-dom';
import {FaStar, FaRegStar} from'react-icons/fa';

const power = ['super strength','super speed','regeneration','flight','telekenises']

const HeroPage = () => {
    const [alert, setAlert] = useState(false)
    let { heroId} = useParams();
    const [hero,setHero] = useState({
        superhero: '',
      publisher: '',
      alter_ego: '',
      first_appearance: '',
      characters: [],
      featured: false,
      image_url:'',
   
    });
    useEffect(() => {
        let foundHero = heroData.find(h => h.id === +heroId); 
        // console.log('foundhero', foundHero);
        setHero(foundHero);
    }, [hero]);

    const updateFeatured = (supId) => {
        let foundHero=heroData.find(hero => hero.id === +heroId);
        
        foundHero.featured = !foundHero.featured;
        setAlert(true);
        setTimeout(()=>{
            setAlert(false);
        },2000)
        console.log('check feature',foundHero);
       

    }
    //console.log('params',heroId);
    return(
        <div id='hero'>
            <div className='row mt-4'>
                <div className='col'>
                    {/* /* single page hero */ }
                    <div className='card'>
                        <div className='row no-gutters'>
                            <div className='col-md-4 th-img-container'>
                                {/* <img src={hero.image_url} alt={hero.superhero}/> */}
                                <div className='th-hero-img' style={{backgroundImage:`url(${hero.image_url})`}}>
                                </div>
                            </div>
                            <div className='col-md-8 th-card-body'>
                                <div className='card-body'>
                                    {/* favorite and publlisher section */}
                                    <div className='th-card-header d-flex justify-content-between'>
                                    <span>
                                        <a href='javacript:void(0)' onClick={updateFeatured}>
                                            {hero.featured ?<FaStar style={{color:'gold'}}/> : <FaRegStar />}
                                            </a>
                                    </span>
                                    <span>
                                        {hero.publisher}
                                    </span>
                                    </div>
                                    {/* hero name */}
                                    <div className='th-card-name my-3'>
                                        <h2>
                                            <span>{hero.alter_ego},</span>
                                            <em>AKA {hero.superhero}</em>
                                        </h2>
                                    </div>
                                    {/* hero details */}
                                    <div className='th-card-details'>
                                    <div className='details'>
                                           <h4 className='text-primary'>About</h4>
                                           <p className='ml-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    <div className='details'>
                                           <h4 className='text-primary'>Powers</h4>
                                           <p className='ml-5'>
                                               {
                                                   power.map((power,i) => {
                                                       return (
                                                           <span
                                                           className='badge badge-pill badge-success mx-1'>{power}</span>
                                                       )
                                                   })
                                               }
                                           </p>
                                        </div>
                                        <div className='details'>
                                           <h4 className='text-primary'>First Appearance</h4>
                                           <p className='ml-5'>{hero.first_appearance}</p>
                                        </div>
                                        <div className='details'>
                                           <h4 className='text-primary'>Characters</h4>
                                           <p className='ml-5'>
                                               { 
                                               hero.characters?.map((ch,i) => {
                                                   return <span key={i}>
                                                       {ch}
                                                       {i === hero.characters.length -1 ? '':', '} 
                                                       </span>
                                               })
                                               }
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default HeroPage;