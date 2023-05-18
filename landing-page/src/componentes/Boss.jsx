const Boss =({image,career,name, info,location,email})=>{
    return(
<article className="tour-card">
          <div className="tour-img-container">
            <img src={image} className="tour-img" alt={name} />
            <p className="tour-date">{career}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{name}</h4>
            </div>
            <p>
              {info}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {location}
              </p>
              <p>{email}</p>
            </div>
          </div>
        </article>
    )
}
export default Boss;