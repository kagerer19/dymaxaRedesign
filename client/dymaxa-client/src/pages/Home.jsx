import '../App.css'
import DymaxaFooter from "../components/DymaxaFooter.jsx";
import Hero from "../components/Hero.jsx";
import DymaxaHeader from "../components/DymaxaHeader.jsx";

function Home() {
    return (
        <>
            <DymaxaHeader />
            <Hero />
            <DymaxaFooter />
        </>
    )
}

export default Home;