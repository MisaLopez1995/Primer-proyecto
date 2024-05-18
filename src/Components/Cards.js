import React from 'react'
import Card from './Card'

import image1 from '../assets/png-transparent-nginx-hd-logo-thumbnail.png'
import image2 from '../assets/python.png'
import image3 from '../assets/php.png'

const cards = [
    {
        id:1,
        title: 'NGINX',
        image: image1,
        instructor: 'Humberto Lopez',
        url: 'https://www.youtube.com'

    },
    {
        id:2,
        title: 'Phyton',
        image: image2,
        instructor: 'Samuel Lopez',
        url: 'https://www.facebook.com'

    },
    {
        id:3,
        title: 'PHP',
        image: image3,
        instructor: 'Angela Quintana',
        url: 'https://www.google.com'

    }
]

export default function Cards() {
    console.log(cards)
  return (
    <div className='container d-flex justify-content-center align-item-center h-100'>
        <div className='row'>
            {
             cards.map(c => (
                <div className='col-md-4' key={cards.id}>
                    <Card
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    image={c.image}
                    instructor={c.instructor}
                    url={c.url}
                    />
                    </div>
             ))   
            }
    
        </div>
    </div>
  )
}
