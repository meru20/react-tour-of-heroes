import {useState, useEffect} from 'react';
import {heroData} from '../data/heroes';
import HeroCardComponent from '../pages/HeroCard';

const DashboardPage = () => {
    const [heroes, setHeroes] = useState(heroData);
    useEffect(() => {
        let featured = heroData.filter(h => h.featured === true); 
        console.log('foundhero', featured);
        setHeroes(featured);
    }, []);
    
    return(
        <div id='DashboardPage'>
        <div className='row text-center mt-3'>
            <div className='col'>
            <h2>Welcome to the tour of Heroes!</h2>
            <h4 className='text-secondary'>Featured Hereos</h4>
            </div>
        </div>
       <HeroCardComponent heroes={heroes}/>
        </div>
    )
}
export default DashboardPage;