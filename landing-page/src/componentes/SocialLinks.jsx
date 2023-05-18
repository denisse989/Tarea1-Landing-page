import { socialLinks } from '../data/data.js'
export const SocialLinks = (props) => {
    console.log(props);
    const { logo,social, itemClass } = props;
    return (
        <>

            <li >
                <a href={`https://www.${social}`} target="_blank" className={itemClass}>
                    <i className={`fab fa-${logo}`}></i>
                </a>
            </li>



        </>
    )
}