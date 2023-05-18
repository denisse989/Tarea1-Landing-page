import { SectionLinks } from './SectionLinks';
import { SocialLinks } from './SocialLinks';
import { socialLinks } from '../data/data';
const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <SectionLinks parentClass="footer-links" itemClass="footer-link"></SectionLinks>
        <ul className="footer-icons">
          {
            socialLinks.map((social) => {
              return (
                <SocialLinks key={social.id} {...social} itemClass="footer-icon"></SocialLinks>
              )
            })
          }
        </ul>
        <p className="copyright">
          copyright &copy; Universidad Privada Boliviana
          <span id="date"></span> 
        </p>
      </footer>
    </>
  )
}
export default Footer;