import '../stylesheets/testimony.css'


function Testimony(props) {
  
  return(
    <div className='container-testimony'>
      <img 
        className='image-testimony' src={require(`../images/testimony-${props.image}.png`)} alt="Imagen de Emma" />
    
      <div className='container-text-testimony'>
        <p className='name-testimony'><strong>{props.name}</strong> en {props.country}</p>
        <p className='charge-testimony'>{props.charge} at <strong>{props.employer}</strong></p>
        <p className='speech-testimony'>"{props.testimony}"</p>
      </div>
    </div>
    );

}


export default Testimony;

