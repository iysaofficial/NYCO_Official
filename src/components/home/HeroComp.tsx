import Link from "next/link"

const HeroComp = () =>{
    return(
        <>
        <section className="hero-section">
            <div className="hero-container">
                <img src="/assets/images/logo/NYCO.png" alt=""/>
                <h1>National Youth Chemistry Olympiad</h1>
                <p>Pendaftaran National Youth Chemistry Olympiad telah dibuka! Bergabunglah <br /> dengan acara bergengsi ini dan dapatkan pengalaman yang tak terlupakan!
                </p>
                <br />
                <Link href="/registration" className="registration-button">Registrasi Disini!</Link>
                <Link href="https://drive.google.com/file/d/1KqErOiqhdSwDJaI8Q7tkakCQ3HcAWk3q/view?usp=sharing" target="_blank" className="registration-button">GuideBook</Link>
            </div>
        </section>
        </> 
    )
}

export default HeroComp