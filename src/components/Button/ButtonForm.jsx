import "../Button/ButtonForm"

const ButtonForm = ({text, onClick, type= "button"}) => {
  return <button className='button-form' onClick={onClick} type={type}>
    {text}
  </button>
}

export default ButtonForm

