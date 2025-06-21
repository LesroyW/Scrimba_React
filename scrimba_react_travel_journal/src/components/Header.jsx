import globeLogo from '../assets/globe.png';

export default function Header()
{
    return (
        <>
        <header>
                <img src={globeLogo} alt='globe icon'/>
                <span>My travel journal.</span>
        </header>
        </>
    )
}