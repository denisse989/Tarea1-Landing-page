import Title from './Title';
import Boss from './Boss';
import { bosses } from '../data/data';
const Bosses=()=>{
    return(
        <>
        <section className="section" id="tours">
      <Title title="Jefes de " subTitle="Carrera"></Title>

      <div className="section-center featured-center">
      {
            bosses.map((boss)=>{
              return<Boss{...boss} key={boss.id}></Boss>
            })
          }
      </div>
    </section>
        </>
    )
}
export default Bosses;