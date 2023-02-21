import Header from './Header'
import Product from './Product'

import airforce from '../img/airforce1.png'
import retroHigh from '../img/retro1.png'
import huarache from '../img/huarache.png'
import travis from '../img/travis.png'
import forty from '../img/forty.png'
import airmax from '../img/airmax.png'
import './store.css'


const shoes = [
    {id: 1,
    img: airforce,
    name: 'AIRFORCE 1',
    price: 149,
    },
    {
    id: 2,
    img: retroHigh,
    name: 'RETRO HIGH',
    price: 123,
    },
    {
    id: 3,
    img: huarache,
    price: 119,
    name: 'HUARACHE',
    },
    {id: 4,
    img: travis,
    price: 209,
    name: 'TRAVIS X JORDAN AIR',
    },
    {id: 5,
    img: forty,
    price: 119,
    name: 'FORTY PERCENT ',
    },
    {id: 6,
    img: airmax,
    name: 'NIKE AIR MAX 1',
    price: 99,
    }]

    
        


const Store = () => {

    return (
        <>
        <Header></Header>
        <div className="store-content">
            {shoes.map((shoe) => <Product shoe={shoe} key={shoe.id}/>)}
        </div>
        <div className='footer'>
        </div>
        </>
    )
}

export default Store;