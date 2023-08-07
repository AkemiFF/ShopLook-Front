import Navbar from './Navbar/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer/Footer';
import Accueil from '@/Components/Accueil/Accueil';


export default function Home() {
  return (
    <main>
      <Navbar />
      <Accueil />
      <Footer />
    </main>
  )
}
