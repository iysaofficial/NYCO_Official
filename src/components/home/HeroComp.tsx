import Link from "next/link"

const HeroComp = () =>{
    return(
        <>
        <section className="hero-section">
            <div className="hero-container">
                <img src="/assets/images/logo/NYCO.png" alt=""/>
                <h1>National Youth Chemistry Olympiad</h1>
                {/* <p>Pendaftaran National Youth Chemistry Olympiad telah dibuka! Bergabunglah <br /> dengan acara bergengsi ini dan dapatkan pengalaman yang tak terlupakan!
                </p> */}
                 <br />
                <Link href="#" target="_blank" className="registration-button">Segera Hadir 2026</Link>
            </div>
        </section>
        </> 
    )
}

export default HeroComp