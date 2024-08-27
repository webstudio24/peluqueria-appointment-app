
import {peluqueros} from '../../assets/data/peluqueros'
import PeluquerosCard from './PeluqueroCard'
const PeluquerosList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {peluqueros.map((peluquero)=><PeluquerosCard key={peluquero.id} peluquero={peluquero} />)}
    </div>
  )
}

export default PeluquerosList