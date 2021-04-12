import { useEffect, useState } from "react";

const ArchivePage = () => {
    const[heroData, setHeroData] = useState([])
    const[heroImage , setHeroImage] = useState({})
    useEffect(() => {
        const fetchHeroes = async () => {
            try{
                let response = await fetch('http://private-anon-1596c715f5-superheroes.apiary-mock.com/characters/');
                response = await response.json();
                console.log('fetch it', response);
                const data = response.Characters;
                console.log('characters', data)
                setHeroData(data);
                 console.log('heroData',heroData)
                
            }
            catch (error){
                console.log(error);

            }
        };
        fetchHeroes();
    }, []);
  
    const getImage = async () => {
        try{
            let image = await fetch('https://private-anon-1596c715f5-superheroes.apiary-mock.com/characters/id')
            image = await image.json();
            console.log('image', image);
            const img = image;
            console.log('img',img)
            setHeroImage(img);
            console.log('heroImage',heroImage)

        }
        catch (error) {
            console.log(error)

        }
    }

    return(
        <div className='row'>
            <div className='col-sm-12 col-md-4 mt-5'>
            <ul className='list-group'>
          {heroData.map((hero, index) => {
            return (
              <li className='list-group-item' key={index}>
                <a href='javascript:void(0)'
                onClick={getImage}>
                  {hero.name}
                </a>
              </li>
            );
          })}
        </ul>
            </div>
            <div className='col-sm-12 col-md-8 mt-5'>
            <div className='meme '>
          
            <img src={heroImage.picture} alt={heroImage.name} />
         
        </div>

            </div>

        </div>
    )
}
export default ArchivePage;