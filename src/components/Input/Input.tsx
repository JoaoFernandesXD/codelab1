import './module.input.css'

interface InputProps{
    placeholder?: string;
}

function Input({placeholder}: InputProps){
    return (
        <>
        <input type='text' placeholder={placeholder}></input>
        </>
    )
}

export default Input;