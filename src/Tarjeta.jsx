import './Tarjeta.css'
import machu_picchu_1 from './assets/machu_picchu_1.jpg'
import machu_picchu_2 from './assets/machu_picchu_2.jpg'


function Tarjeta() {
  return (
    <div className='card'>
        <picture className='imgBox'>
            <img src={machu_picchu_1} alt="" />
            <img src={machu_picchu_2} alt="" />
        </picture>
        <div className='detalle'>
            <div className='contenido'>
                <h2 className='titulo'>Machu Picchu</h2>
                <p className='parrafo'>¡Los Incas nos demostraron que aun las condiciones más difíciles, se pueden hacer maravillas!</p>
            </div>
        </div>
    </div>
  )
}

export default Tarjeta