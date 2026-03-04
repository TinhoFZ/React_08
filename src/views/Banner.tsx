import dota from '../assets/images/dota_background.png';
import '../assets/css/banner.css';

function Banner() {
    
    return (
        <div id="banner">
            <img id='background' src={dota} />
            <div id='text-overlay'>
                <h2>This is DotA!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                <a href="https://store.steampowered.com/app/570/Dota_2/"><button>Play Now!</button></a>
            </div>
        </div>
    )
}

export default Banner; 