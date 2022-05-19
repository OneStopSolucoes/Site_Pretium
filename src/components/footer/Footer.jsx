import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>OneStop Soluções</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Saiba Mais</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

  
      <div className="footer__copyright">
        <small>&copy;OneStopSoluções. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer