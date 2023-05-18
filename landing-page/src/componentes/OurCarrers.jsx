import { carrers } from '../data/data';
import Title from './Title';
import Carrer from './Carrer';
const Carrers = () => {
  return (
    <>
      <section className="section services" id="Carreras">
        <Title title='Nuestras ' subTitle='carreras'></Title>
        <div className="section-center services-center">
          {
            carrers.map((carrer)=>{
              return<Carrer{...carrer} key={carrer.id}></Carrer>
            })
          }
        </div>
      </section>
    </>
  )
}
export default Carrers;