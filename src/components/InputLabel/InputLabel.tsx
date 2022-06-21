import { LabelInterface } from 'Modals/Interface'
import './InputLabel.scss'
const InputLabel = ({label , required}:LabelInterface) => {
  return <p className={`input-label ${required ? "required" : ''}`}>{label}</p>
}

export default InputLabel