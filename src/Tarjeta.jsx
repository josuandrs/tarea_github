import './Tarjeta.css'
//import machu_picchu_1 from './assets/machu_picchu_1.jpg'
//import machu_picchu_2 from './assets/machu_picchu_2.jpg'


function Tarjeta() {
  return (
    <div className='card'>
        <picture className='imgBox'>
            <img src="" alt="" />
            <img src="" alt="" />
        </picture>
        <div className='detalle'>
            <div className='contenido'>
                <h2>Machu Picchu</h2>
                <p>Los Incas demostraron que aun las condiciones mas dificiles, se puede hacer maravillas!</p>
            </div>
        </div>

    </div>
  )
}

export default Tarjeta