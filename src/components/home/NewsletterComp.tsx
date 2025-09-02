"use client";
import React, { useEffect } from "react";

const NewsletterComp = () =>{
    useEffect(() => {
        const scriptURL =
        "https://script.google.com/macros/s/AKfycbwfw1dAhzyY6p6crVCCuoEXzb_E7hBOi8cYuIBu_-JZzz2a25h-tCvT6Xd3dUH9Mx2fQA/exec";

        const form = document.forms.namedItem("regist-form");

        if (form) {
        const handleSubmit = async (e: Event) => {
            e.preventDefault();
            try {
            await fetch(scriptURL, {
                method: "POST",
                body: new FormData(form),
            });
            alert("Data sent successfully!");
            form.reset();
            } catch (error) {
            console.error("Error:", error);
            alert("Failed to send data.");
            }
        };

        form.addEventListener("submit", handleSubmit);

        // cleanup listener
        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
        }
    }, []);
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
                        <form action="" method="POST" name="regist-form">
                            <div className="input_box">
                                <input type="email" name="Email" placeholder="Email"/>
                                <button type="submit">Langganan</button>
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