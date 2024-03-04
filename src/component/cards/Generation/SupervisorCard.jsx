const SupervisorCard = ({img, name, title}) => {
  return(
      <div className="supervisor__card flex col text-center gray">
          <img src={img} alt="icon" className="supervisor__img mb-16"/>
          <p className="black">{name}</p>
          <p className="gray mt-16">{title}</p>
      </div>
  )
}
export default SupervisorCard