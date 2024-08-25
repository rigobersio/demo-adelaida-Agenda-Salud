import Navbar from '../../components/adelaidaComponents/NavBarAdelaida';
import MainAdelaida from "../../components/adelaidaComponents/MainAdelaida";
import Footer from '../../components/footer/Footer';

//import './home.css';

const HomeAdelaida = () => {
    return (
        <div className='containerGral'>
            <Navbar />
            <MainAdelaida />
            <Footer />
        </div>
    )
}

export default HomeAdelaida
