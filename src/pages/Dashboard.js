import {useState, useEffect} from 'react';
import {heroData} from '../data/heroes';
import HeroCardComponent from '../components/HeroCard';

const DashboardPage = () => {
    const [heroes, setHeroes] = useState([]);
    const [alert,setAlert] = useState(false);
    useEffect(() => {
        let featured = heroData.filter(hero => hero.featured); 
        
        setHeroes(featured);
    }, [alert]);
    const updateFeatured = heroId => {
        // first find the hero from heroData by heroId
        let foundHero = heroData.find(hero => hero.id === +heroId);
    
        // updated foundHero.featured to be opposite of its current value
        foundHero.featured = !foundHero.featured;
    
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 2000);
        console.log(foundHero);
      };
    
    return(
        <div id='DashboardPage'>
        <div className='row text-center mt-3'>
            <div className='col'>
            <h2>Welcome to the tour of Heroes!</h2>
            <h4 className='text-secondary'>Featured Hereos</h4>
            </div>
        </div>
        <div className='row'>
         {heroes.map ((hero,index) => {
            return (
                <div className='col-sm-12 col-md-3' key={hero.id}>
       <HeroCardComponent hero={hero} updateFeatured={updateFeatured}/>
       </div>          
            )

       })}

    </div>
        </div>
    )
}
export default DashboardPage;