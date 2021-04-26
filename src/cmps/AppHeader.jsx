import { NavLink } from 'react-router-dom'

export const AppHeader = () => {

    return <header className="app-header">
        <section className="main-layout flex j-between a-center">
            <div className="logo flex a-center">
                <img src={'./favicon.png'} alt="" />
                <NavLink to="/">BEAT IT</NavLink>
            </div>
            <nav>
                <NavLink to="/">Link 1</NavLink>
            </nav>
        </section>
    </header>
}