/* import styes */
import './module.main.css';

/* import components */
import Card from '../Card/Card';

function Main(){
    return(
        <main>
            <Card data='17 de ago, 2024' titulo='O que é linguagem de programação? Conheça as principais' texto='Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.'></Card>
        </main>
    )
}

export default Main;