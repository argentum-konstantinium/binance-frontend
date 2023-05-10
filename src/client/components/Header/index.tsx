import {Navigation} from "./Navigation";
import s from './style.scss'
export const Header = () => {
    return(
        <header className={s.header}>
            <Navigation/>
        </header>
    )
}