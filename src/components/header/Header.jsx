
import './Header.scss'

import Logo from '../../assets/moneyIconWhite.png'

export default function Header(){

    return(
        <div className="header">
            <div className='logo'>
                <img src={Logo} alt="Logo My Finances" />
            </div>
            <h1>Controle de Finanças</h1>
        
        </div>
    )
}