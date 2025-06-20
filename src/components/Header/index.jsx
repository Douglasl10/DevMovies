import { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styles'
import { Link, useLocation } from 'react-router-dom'
function Header() {
    const { pathname } = useLocation()
    const [changeColor, setChangeColor] = useState(false)

    window.onscroll = () => {
        if (!changeColor && window.scrollY > 100) {
            setChangeColor(true)
        } else if (changeColor && window.scrollY < 100) {
            setChangeColor(false)
        }
    }

    return (
        <Container changeColor={changeColor}>
            <img src={Logo} alt="logo" />
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to='/'>Home</Link>
                </Li>
                <Li isActive={pathname.includes ('filmes')}>
                    <Link to='/filmes'>Filmes</Link>
                </Li>
                <Li isActive={pathname.includes ('series')}>
                    <Link to='/series'>Series</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header