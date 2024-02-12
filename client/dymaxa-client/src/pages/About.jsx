import '../App.css'
import DymaxaFooter from "../components/DymaxaFooter.jsx";
import DymaxaHeader from "../components/DymaxaHeader.jsx";
import MainPost from "../components/MainPost.jsx";
import AboutUs from "../components/AboutUs.jsx";

function About() {
    return (
        <>
            <DymaxaHeader />
            <MainPost />
            <AboutUs />
            <DymaxaFooter />
        </>
    )
}

export default About;