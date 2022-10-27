function Card({details}) {
  return (
   <div className="card" style={{width:"12rem"}}>
  <img src={details.picture?.large}
   className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title" style={{color:"#000000"}}>{details.name?.title}.{details.name?.first}-phone:{details.phone}</h5>
    <p className="card-text"style={{'fontSize':"12px",color:"#000000"}}>
      city is:{details.location?.city}&&
      Age of the person is:{details.registered?.age}&&
      username is:{details.login?.username}
    </p>
  </div>
</div>)
}

export default Card