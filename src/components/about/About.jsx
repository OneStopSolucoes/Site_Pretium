import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FaHandshake} from 'react-icons/fa'
import logo2 from '../../assets/logo2.jpg'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h2>Saiba mais</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={logo2} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Diferencial</h5>
              <small>Cotações personalizadas</small>
            </article>

            <article className='about__card'>
              <FaHandshake className='about__icon'/>
              <h5>Negocição Mais Eficaz</h5>
              <small>Sistema de gerenciamento de cotações</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Auxílio ao comprador</h5>
              <small>Elevar produtividade nas compras</small>
            </article>
          </div>

          <p>
          A melhor plataforma de cotações para a performance do seu time!
          </p>

          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>
        </div>
      </div>
    </section>
  )
}

export default About