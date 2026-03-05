import '../assets/css/footer.css'
import steam from '../assets/images/steam_logo.png';
import dota from '../assets/images/dota_logo.png';

function Footer () {

    return (
        <>
            <div id="top-line" />
            <div id='footer'>
                <div className='footer-menu'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Heroes</a></li>
                        <li><a href='#'>Items</a></li>
                        <li><a href='#'>Guides</a></li>
                    </ul>
                </div>
                <div className='footer-menu'>
                    <a href='https://store.steampowered.com/app/570/Dota_2/'>
                        <img src={steam} alt="Steam Logo" />
                    </a>
                    <a href='https://www.dota2.com/'>
                        <img src={dota} alt="Dota 2 Logo" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;