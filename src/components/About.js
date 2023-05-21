import React from 'react'
import about from "../assets/paco.png"

const About = () => {
  return (
    <div className='about-container section-center'>
      <h2>À propos de nous</h2>
      <div className='container-about'>
        <img src={about} alt='' />
        <article>
          <p>
            Bienvenue sur notre site dédié à la mode de haute couture. Chez <span>Dieuf dieul Couture</span>, nous croyons en l'art de la confection sur
            mesure et à la créativité infinie de la mode. Notre passion pour les
            vêtements de luxe et les designs uniques se reflète dans chaque
            pièce de notre collection.
          </p>
          <p>
            Notre équipe de talentueux créateurs et couturiers travaille avec
            minutie pour créer des vêtements exceptionnels qui vous font vous
            sentir magnifique et confiante. Chaque article de notre collection
            est fabriqué avec des tissus de haute qualité et une attention
            méticuleuse aux détails, afin de vous offrir une expérience de mode
            inoubliable.
          </p>
          <p>
            En tant que fervents défenseurs de la durabilité, nous offrons
            également un service de location pour chaque pièce de notre
            collection. Cela nous permet de promouvoir une mode plus circulaire
            et d'offrir à nos clients la possibilité de porter des créations
            haut de gamme sans compromettre l'environnement.
          </p>
          <p>
            Explorez notre site et découvrez notre gamme de tenues de couture
            exquises. Que ce soit pour une occasion spéciale, une soirée glamour
            ou simplement pour vous faire plaisir, nous sommes là pour vous
            aider à trouver la tenue parfaite qui reflète votre style et votre
            individualité.
          </p>
          <p>
            Merci de faire partie de notre voyage dans le monde de la haute
            couture. Nous sommes impatients de vous offrir une expérience de
            shopping unique et de vous accompagner dans votre quête de
            l'élégance intemporelle.
          </p>
        </article>
      </div>
    </div>
  )
}

export default About
