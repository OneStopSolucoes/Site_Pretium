import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>O ciclo de compras de ponta a ponta</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Conecte todos os envolvidos no ciclo de cotação</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <small className='text-light'>Requisições centralizadas</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <small className='text-light'>Negocio fechado na plataforma</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <small className='text-light'>Comece a usar rapidamente sem necessidade de desenvolvimento ou de terceiros.</small>
              </div>
            </article>

          </div>
        </div>
        {/* FIM DO FRONTEND */}

        
      </div>
    </section>
  )
}

export default Experience