/* import styes */
import './module.main.css';

/* import components */
import Card from '../Card/Card';

const records = [
    {
      title: "Tech Advances in 2024: The Future is Now",
      date: "17 de ago, 2024",
      text: "The technology landscape has undergone a massive transformation this year, with AI and automation leading the charge."
    },
    {
      title: "Climate Change Summit: Key Takeaways",
      date: "17 de ago, 2024",
      text: "World leaders gathered to discuss actionable steps towards reducing carbon emissions, aiming for a greener future."
    },
    {
      title: "Space Tourism: The Next Frontier",
      date: "17 de ago, 2024",
      text: "With private companies launching civilians into space, the dream of space tourism is becoming a reality for many."
    },
    {
      title: "New Breakthrough in Renewable Energy",
      date: "17 de ago, 2024",
      text: "Scientists have developed a new form of renewable energy that promises to revolutionize the way we power our homes."
    },
    {
      title: "AI in Healthcare: Revolutionizing Patient Care",
      date: "17 de ago, 2024",
      text: "Artificial intelligence is transforming healthcare, making diagnostics faster and more accurate than ever before."
    }
  ];
  
  
function Main(){
    return(
        <main>
            {records.map((noticia, indice) => {
                return (
                <Card key={indice} data={noticia.date} titulo={noticia.title} texto={noticia.text}></Card>
                );
            })}
        </main>

    )
}

export default Main;