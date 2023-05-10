import {NavLink} from "react-router-dom";
import s from './style.scss'

export const Navigation = () => {
    return (
        <nav className={s.navigation}>
            <ul className={s['navigation__list']}>
                <li className={s['navigation__list-item']}>
                    <NavLink className={s['navigation__list-link']} to="/">Home</NavLink>
                </li>
                <li className={s['navigation__list-item']}>
                    <NavLink className={s['navigation__list-link']} to="/staking">Staking</NavLink>
                </li>
                <li className={s['navigation__list-item']}>
                    <NavLink className={s['navigation__list-link']} to="/all-info">All coins info</NavLink>
                </li>
            </ul>
        </nav>
    )
}

