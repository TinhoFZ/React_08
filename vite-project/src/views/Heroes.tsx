import '../assets/css/heroes.css';
import puck from '../assets/images/puck.png';
import grimstroke from '../assets/images/grimstroke.png';
import bane from '../assets/images/bane.png'

function Heroes () {
    
    const heroes = [
        { image: puck, name: 'Puck', description: 'The juvenile form of a Faerie Dragon.' },
        { image: grimstroke, name: 'Grimstroke', description: 'A being who corrupted with dark, sentient ink.' },
        { image: bane, name: 'Bane', description: 'A force of terror too powerful to be contained by sleep.' },
        { image: '', name: 'Hero 4', description: 'Description of hero 4' },
        { image: '', name: 'Hero 5', description: 'Description of hero 5' },
        { image: '', name: 'Hero 6', description: 'Description of hero 6' },
        { image: '', name: 'Hero 7', description: 'Description of hero 7' },
        { image: '', name: 'Hero 8', description: 'Description of hero 8' }
    ];

    return (
        <div id="heroes-container">
            {heroes.map((hero) => (
                <div className="hero">
                    <img id='hero-image' src={hero.image} alt={`image of ${hero.name}`} />
                    <h3>{hero.name}</h3>
                    <p>{hero.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Heroes;