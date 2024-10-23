import Input from '../Input/Input'
import './module.header.css'


function Header() {
  

  return (
      <header>
        <div className='container'>
            <h1>
                <span>Code</span>
                <span>Lab</span>
            </h1>
            <Input placeholder='Pesquisar no blog'></Input>
        </div>
      </header>
  )
}

export default Header
