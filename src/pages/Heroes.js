import {useState} from 'react';
import {heroData} from '../data/heroes';
import {Link } from 'react-router-dom';
const HeroesPage = () => {
    const [heroes, setHeroes] = useState(heroData);
    //console.log(heroData);
    return(
        <div id='heroes'>
        <ul>
            {heroes.map((hero,index) =>{
                return <li key={hero.id}>
                   <Link to={`/heroes/${hero.id}`}>{hero.superhero}</Link> 
                    </li>;
            })}
        </ul>
        
    </div>
    )
}
export default HeroesPage;