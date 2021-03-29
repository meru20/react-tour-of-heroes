import {useEffect, useState } from 'react';

import {heroData} from '../data/heroes';
import { useParams } from 'react-router-dom';
const HeroPage = () => {
    let { heroId} = useParams();
    const [hero,setHero] = useState(heroData);
    useEffect(() => {
        let foundHero = heroData.find(h => h.id === +heroId); 
        console.log('foundhero', foundHero);
        setHero(foundHero);
    }, []);
    //console.log('params',heroId);
    return(
        <div>
            <h2>This is where {hero.superhero} lives!</h2>
        </div>
    )
}
export default HeroPage;