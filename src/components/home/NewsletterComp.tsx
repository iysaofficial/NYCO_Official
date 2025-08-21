const NewsletterComp = () =>{
    return(
        <>
        <section className="newsletter-section">
            <div className="newsletter-container">                
                <div className="newsletter_wrap">
                    <div className="newsletter_item">
                        <div>
                            <h2>Dapatkan Manfaat Eksklusif</h2>
                            <p>Berlangganan ke daftar email kami dan dapatkan promosi eksklusif</p>
                        </div>
                        <form action="https://formspree.io/f/xoqgjrok" method="POST">
                            <div className="input_box">
                                <input type="email" name="email" placeholder="Email"/>
                                <button>Langganan</button>
                            </div>
                        </form>
                    </div>
                </div>
    
            </div>
        </section>
        </>
    )
}

export default NewsletterComp