import React from 'react'
import Card from './Card';

import img1 from "../img/belleza-banner-1.png"
import img2 from "../img/comida-galeria-1.png"
import img3 from "../img/tecnologia-banner-1.png"

const cards = [
    {
        id: 1,
        title: '1',
        image: img1,
        description: 'Los mejores prodcutos de belleza femenina'
    },
    {
        id: 2,
        title: '2',
        image: img2,
        description: 'Comiendo saludable'
    },
    {
        id: 3,
        title: '3',
        image: img3,
        description: 'Lo mejor para tu habitacion'
    },
]


function Cards() {
  return (
    <div className='container d-flex justify-content-center'>
        <div className='row'>
            {
                cards.map(card => (
                    <div className='col-md-4' key={card.id}> 
                    <Card title={card.title} img={card.image} description={card.description} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards