import "./style.css"
import banner from "../../imagens/banner.png";

function Banner() {
    return(
        <header className="banner">
            <img src={banner} alt="Imagem do Banner"></img>
        </header>
    )
}

export default Banner