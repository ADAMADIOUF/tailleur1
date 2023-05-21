import React,{useEffect, useState} from 'react'


import{MdEmail} from "react-icons/md"
import { BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import contact from "../assets/contact.png"
import { useLocation } from 'react-router-dom'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_7uk1sug',
        'template_5mj4qui',
        { name, email, message },
        'Gc1Gl0HLvCtGvFHPg'
      )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text)
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
        }, 10000)
      })

      // You can display a success message or perform any other actions here

      .catch((error) => {
        console.error('Email error:', error)
        // You can handle the error here, such as displaying an error message to the user
      })

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <section className='section-center contact'>
        <div className='contact-first-container'>
          <article className='contact-img'>
            <img src={contact} alt='' />
          </article>

          <article className='contact-info'>
            <h3>créer quelque chose ? c'est Notre passion</h3>
            <p>
              Nouvelle ouverture de notre entreprise{' '}
              <span>dieuf dieul couture</span> SUR LA ROUTE de tivaoune peulh
              Niacoulrab cite safco . PLUS D'ESPACE ET DE CONFORT POUR TOUJOURS
              VOUS SATISFAIRE.
            </p>
          </article>
        </div>
        <h3 className='contact-info-info'>
          Contactez nous pour en savoir plus sur nos offres et savoir comment on
          peut vous aider<span>!</span>
        </h3>
        <div className='container-contact'>
          <article className='contact-details-2'>
            <h2>Address</h2>
            <h3>
              {' '}
              <span>
                <ImLocation2 />
              </span>
              senegal,safco tivaoune peulh{' '}
            </h3>
          </article>
          <article className='contact-details-2 '>
            <h2>Phone</h2>

            <h3>
              {' '}
              <span>
                <BsFillTelephoneFill />
              </span>
              +221 77 925 85 08{' '}
            </h3>
          </article>
          <article className='contact-details-2 email'>
            <h2>Email</h2>

            <h3>
              <span>
                <MdEmail />
              </span>
              dieufdieul@gmail.com{' '}
            </h3>
          </article>
        </div>
        <div className='container-form'>
          <article className='form-details'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Nom:</label>
                <input
                  type='text'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message:</label>
                <textarea
                  id='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type='submit'>Envoyer</button>
            </form>
            {showSuccess && (
              <div
                className='success-message'
                style={{
                  backgroundColor: '#d4edda',
                  color: '#155724',
                  padding: '10px',
                  margin: '10px 0',
                  borderRadius: '5px',
                }}
              >
                <p>Votre message a été envoyé avec succès !</p>
              </div>
            )}
          </article>
          <article className='maps'>
            <iframe src='https://maps.google.com/maps?q=Dakar%20Region%20cite%20safco%203%20&t=&z=13&ie=UTF8&iwloc=&output=embed' />
          </article>
        </div>
      </section>

      
    </>
  )
}

export default Contact