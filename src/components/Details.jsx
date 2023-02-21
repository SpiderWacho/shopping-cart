import {Button} from './Button'
import { useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";


import Header from './Header'
import "./Details.css"
import { ProductsContext } from '../context/ProductsContext';
import airmax from '../img/airmax-details.png'
import { useEffect, useContext } from 'react';

import airforce from '../img/airforce1-details.jpg'
import retroHigh from '../img/retro1-details.jpg'
import huarache from '../img/huarache-details.jpg'
import travis from '../img/travis-details.jpg'
import forty from '../img/forty-details.jpg'


const Details = () => {

    const {setProducts} = useContext(ProductsContext)

    const addToCart = (shoe) => {
        setProducts(prevstate => [...prevstate, shoe])
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        AOS.init();
      }, [])

    const location = useLocation();
    const id = location.state.id;

    let img = '';
    let shoeName = '';
    let description = '';
    let descriptionClass = ''
    switch (id) {
        case 1:
            img = airforce;
            shoeName = 'Nike Airforce 1';
            description = 'Such are the legends. The Nike Air Force 1 LE recaptures the 82 parquet icon in everyday black or white style. It maintains the durability and air of design to satisfy lovers of the classic.'
            descriptionClass = 'airforce';
            break;
        case 2:
            img = retroHigh;
            shoeName = 'Nike Retro High';
            description = `Leather upper features a white base with contrast black overlays and lace detailing. Game Royal on the collar, 
                           toe box and rubber sole. A lightly padded nylon tongue
                           in black is finished with a Nike Air tongue tag, while the classic logo
                           of Jordan Wings appears in white on the side neck flap.`
            descriptionClass = 'retro-high';
            break;
        case 3:
            img = huarache;
            shoeName = 'Nike Huarache';
            description = `Reviving a popular urban model, the Nike Air Huarache is designed to fit the foot and offer comfort.
                It is easy to combine on the upper part with a mixture of soft leather and super-breathable and shiny neoprene-like fabric.`
            descriptionClass = 'huarache';
                 break;
        case 4:
            img = travis;
            shoeName = 'Nike Jordan Air X Travis';
            description = `
            The Travis Scott x Air Jordan 1 Retro High features a new look on the iconic silhouette, thanks to an oversized,
             rear-facing Swoosh on the side. A traditional-oriented Swoosh graces the medial side of the upper.`
             descriptionClass = 'travis';
             break;
        case 5:
            img = forty;
            shoeName = 'Nike SB Dunk High X Forty Percent Against Rights';
            description = `Rather that use a traditional leather material to make up the base layer,
             Nishiyama employs a smooth buttery suede material across the upper in a “Medium Grey” hue.`
              descriptionClass = 'forty';
              break;
        case 6:
            img = airmax;
            shoeName = 'Nike Airmax';
            description = `What does it take to light up an informal look? Textile sole, premium pigskin and crepe outsole.
             The Air Max 1 "Crepe" brings a classic touch to casual style.
              Shades of gray, like the ideally weathered deep thunder grey, go with everything.`
                descriptionClass = 'airmax';
                break;
        default:
            img = '';
    }

    

return (
    <>
        <Header />
        <div className='details-container'>
            <div className="img-container">
                <img src={img} alt="Sneaker imagen" className={`img-product ${descriptionClass}`}>
                </img>
                <p className={`shoe-name ${descriptionClass}`}>{shoeName}</p>
            </div>
            <div className="information-container">
            <div className='description' data-aos="fade-up"  data-aos-duration="1500">
                <p className='text-description'>{description}</p>    
            </div>
            <div className="buy">
                <Button color="secondary" onClick={() => addToCart(location.state)}>Add to Cart</Button>
            </div>
            </div>

        </div>
    </>

)
}

export default Details;