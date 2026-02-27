import Link from "next/link"

const ListOfWinnerDetail2024Comp = () => {
    return(
        <>
        <section className="low-detail-header-section">
            <div className="low-detail-header-content">
                <h2>NYCO 2024</h2>
            </div>
        </section>
        <section className="low-detail-after-event-section" id="low-detail-after-event">
            <div className="low-detail-after-event-heading">
                <h1 className="section-header">After Event NYCO 2024</h1>
            </div>
            <div className="low-detail-after-event-container">
                <div className="low-detail-after-event-row">

                    <div className="low-detail-after-event-video">
                        <iframe className="mt-5"  width="100%" height="315" src="https://www.youtube.com/embed/L18WLaCoOVI?si=wgabCCB5XcLxuTk8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
        
                    <div className="low-detail-after-event-p">
                        <br />
                        <br />
                        <p>Kami dengan bangga mempersembahkan ringkasan video dari acara tak terlupakan ini, sebagai bukti dari semangat, dedikasi, dan kecemerlangan yang ditunjukkan oleh setiap peserta. Dalam video pasca acara ini, Anda akan disuguhkan dengan momen-momen berkesan yang kami alami bersama.</p>
                        <br />
                        <p>Kami mengundang Anda untuk bergabung dalam perayaan ini. Lihatlah bagaimana passion, kerja keras, dan kolaborasi dapat menghasilkan sesuatu yang luar biasa. Kami berharap melalui video ini, Anda tidak hanya merasakan kegembiraan kami, tetapi juga terinspirasi untuk terus mengejar impian Anda dan berkontribusi di bidang sains.</p>
                        <br />
                        <p>Terima kasih kepada semua peserta, mentor, dan semua yang telah mendukung Olimpiade IYSA. Sampai jumpa di acara berikutnya!</p>
                    </div>
                    
                </div>
            </div>
        </section>
        
        <section className="head-low-detail-document-section" id="head-low-detail-document">
            <div className="head-low-detail-document-heading">
                <h1 className="section-header">After Event Document 2024</h1>
            </div>
        </section>
        <section className="low-detail-document-section" id="low-detail-document">
            <div className="low-detail-document-container">

                <div className="serviceBox">
                    <div className="icon">
                        <i className="fa-solid fa-trophy"></i>
                    </div>
                    <div className="content">
                        <h2>Daftar Pemenang Online</h2>
                        <br />
                        <Link href="https://drive.google.com/file/d/1PEEYeGt0SWTz0dMRZgRysm-uHroHmp5O/view?usp=sharing" target="_blank" className="low-detail-document-button">Download</Link>
                    </div>
                </div>

                <div className="serviceBox">
                    <div className="icon">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="content">
                        <h2>Kurasi</h2>
                        <br />
                        <Link href="https://drive.google.com/drive/folders/1g-fqmcbOycJpjW9rA-Q_KbWstyuOOU0Y?usp=sharing" target="_blank" className="low-detail-document-button">Download</Link>
                    </div>
                </div>

                <br />
                <br />
                <br />
             
            </div>
        </section>

        <section className="head-low-detail-document-section" id="head-low-detail-document">
            <div className="head-low-detail-document-heading">
                <h1 className="section-header">Press Release 2024</h1>
            </div>
            <section className="low-press-release-section">
                <div className="low-press-release-container">
                    <div className="low-press-release-wrapper">

                    <iframe src="https://drive.google.com/file/d/16x4XVuEVbvPVqlVdl5FG1t-R_OnBLOJM/preview"></iframe>
                    
                    </div>
                </div>
            </section>
            <div className="low-press-release-button-container">
                <Link href="https://drive.google.com/file/d/16x4XVuEVbvPVqlVdl5FG1t-R_OnBLOJM/view?usp=sharing" className="low-press-release-button">Download Press Release</Link>
            </div>
        </section>
        <br />
        </>
    )
}

export default ListOfWinnerDetail2024Comp