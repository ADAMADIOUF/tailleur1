import React from 'react'
import './Categories.css'

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'hommes',
      image: 'images/c2.png/',
    },
    {
      id: 2,
      name: 'femmes',
      image: 'images/c1.png/',
    },
    {
      id: 3,
      name: 'tenues de travail',
      image: 'images/c3.png/',
    },
  ]

  return (
    <div className='categories'>
      <h2 className='categories__title'>Catégories</h2>
      <div className='categories__list'>
        {categories.map((category) => (
          <div key={category.id} className='categories__item'>
            <img src={category.image} alt={category.name} />
            <p className='categories__name'>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
