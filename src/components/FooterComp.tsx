import Link from 'next/link'
import '../assets/css/Footer.css'        

const FooterComp = () =>{
    return(
        <>
        <footer>
            <div className="footer-row">
                <div className="footer-column">
                    <h3 className='footer-logo'>National Youth Chemistry Olympiad</h3>
                    <p className='web-desc'>
                    Sebuah wadah bagi para akademisi muda berbakat dari Indonesia untuk memecahkan masalah-masalah global.  </p>
                </div>
                <div className="footer-column">
                    <h5>Link Infromasi</h5>
                    <ul className='footer-links'>
                        {/* <li>
                            <a href="#">Registrasi</a>
                        </li> */}
                        <li>
                            <Link href="/#contact">Kontak</Link>
                        </li>
                        <li>
                            <Link href="https://iysa.or.id" target='_blank'>Website Utama Kami</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>Navigasi</h5>
                    <ul className='footer-links'>
                        <li>
                            <Link href="/">Utama</Link>
                        </li>
                        <li>
                            <Link href="/#about">Tentang</Link>
                        </li>
                        <li>
                            <Link href="https://drive.google.com/file/d/12V9wdh8kQQTELQEflCUk_Cxtcf3wiW5M/view?usp=sharing" target='_blank'>Buku Panduan</Link>
                        </li>
                        {/* <li>
                            <a href="#">Galeri</a>
                        </li> */}
                        <li>
                            <Link href="/#category">Kategori</Link>
                        </li>
                        <li>
                            <Link href="/#contact">Kontak</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>Office</h5>
                    <ul className='contact-details'>
                        <li>
                            <i className='fas fa-map-marked-alt'></i>
                            <span>Jl. Kemang No. 63 RT 03 RW 06</span>
                        </li>
                        <li>
                            <i className='fas fa-phone-alt'></i>
                            <span>+6283870026877</span>
                        </li>
                        <li>
                            <i className='fas fa-envelope'></i>
                            <span>iysa.olympiad@gmail.com</span>
                        </li>
                    </ul>
                    <ul className='social-link-icons'>
                        <li>
                            <Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'>
                                <i className='fab fa-facebook-f'></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/nyco.official?utm_source=ig_web_button_share_sheet&igsh=MXczZHNjem0zMXhzcQ==" target='_blank'>
                                <i className='fab fa-instagram'></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'>
                                <i className='fab fa-youtube'></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.tiktok.com/@iysa.official" target='_blank'>
                                <i className='fab fa-tiktok'></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'>
                                <i className='fab fa-linkedin'></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-details">
            <div className="bottom_text">
                <span className="copyright_text">Copyright &#169; 2024 <Link href="#">NYCO Official.</Link>All rights reserved</span>
                <span className="policy_terms">
                    <Link href="#">Privacy policy</Link>
                    <Link href="#">Terms & Condition</Link>
                </span>
            </div>
        </div>
        </footer>
        </>
    )
}

export default FooterComp
