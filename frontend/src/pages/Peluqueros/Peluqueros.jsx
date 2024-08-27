import PeluqueroCaard from '../../components/Peluqueros/PeluqueroCard'
import {peluqueros} from '../../assets/data/peluqueros'
import PeluquerosCard from '../../components/Peluqueros/PeluqueroCard'
import Testimonial from '../../components/Testimonial/Testimonial'

const Peluqueros = () => {
  return <>
  <section className='bg-[#fff9ea]'> 
    <div className="container text-center">
      <h2 className='heading'>Buscar un Peluquero </h2>
      <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
        <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none  cursor-pointer placeholder:text-textColor' placeholder='Buscá a tu peluquero'/>
        <button className='btn mt-0 rounded-[0px] rounded-r-md '>Buscar </button>
      </div>
    </div>
  </section>
  <section>
    <div className="container">
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
        {peluqueros.map((peluquero)=><PeluquerosCard key={peluquero.id} peluquero={peluquero} />)}
    </div>
    </div>
  </section>
  <section>
          <div className="container">
          <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center ">
               ¿Qué dicen nuestros clientes?
              </h2>
              <p className="text__para text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam cumque magni minima sapiente ad id fugiat minus neque.
              </p>
            </div>

            <Testimonial/>
          </div>
        </section>
  </>
}

export default Peluqueros