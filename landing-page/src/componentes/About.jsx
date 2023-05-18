import about from '../assets/about.jpeg'
import Title from './Title';
const About = () => {
  return (
    <>
      <section className="section" id="Información">
        <Title title='sobre ' subTitle='nosotros'></Title>

        <div className="section-center about-center">
          <div className="about-img">
            <img
              src={about}
              className="about-photo"
              alt="awesome beach"
            />
          </div>
          <article className="about-info">
            <h3>¿Quiénes somos?</h3>
            <p>
              La Escuela de Desarrollo Tecnológico e innovación (EDTI) agrupa 3 carreras: Ingeniería Electrónica y Telecomunicaciones,
              Ingeniería de Sistemas Computacionales e Ingeniería Electromecánica.
            </p>
            <p>
              La escuela une esfuerzos para dar una formación a
              futuros ingenieros que estén listos para solucionar problemas y retos de ingeniería en áreas muy importantes para el desarrollo
              tecnológico y de innovación que requiere el país.
            </p>
            <a href="#" className="btn">Leer más</a>
          </article>
        </div>
      </section>
    </>
  )
}
export default About;