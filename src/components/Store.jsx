import Header from './Header'
import Product from './Product'

import airforce from '../img/airforce1.png'
import retroHigh from '../img/retro1.png'
import huarache from '../img/huarache.png'
import travis from '../img/travis.png'
import dunk from '../img/nike-dunk.png'
import airmax from '../img/air-max.png'
import './store.css'


const shoes = [
    {img: airforce,
    name: 'Airforce 1'},
    {img: retroHigh,
    name: 'Nike Retro High'},
    {img: huarache,
    name: 'Nike Huarache'},
    {img: travis,
    name: 'Travis x Jordan Air 1'},
    {img: dunk,
    name: 'NIKE SB DUNK HIGH PRO QS'},
    {img: airmax,
    name: 'Nike Air Max 1'}]




const Store = () => {

    return (
        <>
        <Header></Header>
        <div className="store-content">
            {shoes.map((shoe) => <Product shoe={shoe} />)}
        </div>
        </>
    )
}

export default Store;