import './App.css'

function App() {
  return (
    <>
      <section id="hero">
        <div className="hero-card">
          <div className="hero-copy">
            <p className="hero-label">Oscar Elektrik Mühendislik</p>
            <h1>Plan, Proje, Tesisat ve Taahhüt İşleri</h1>
            <p className="hero-text">
              Kaliteli elektrik çözümleri ve sağlam altyapı planlaması ile işletmenizin bugünü ve yarını için hazır.
            </p>
          </div>

          <div className="hero-footer">
            <div className="hero-meta">
              <span className="hero-pill">Yakında Sizlerle</span>
              <p>Profesyonel hizmet, güvenilir teslimat ve modern enerji çözümleri.</p>
            </div>
            <div className="hero-actions">
              <a href="#contact" className="hero-button">Projeni konuşalım</a>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="section-copy">
          <p className="section-label">Elektrik ve Enerji</p>
          <h2>Proje teslimatından saha uygulamasına kadar tam destek</h2>
          <p>
            Tasarım, uygulama ve taahhüt süreçlerinde kesintisiz iletişim ile güvenli ve sürdürülebilir sonuçlar sunuyoruz.
          </p>
        </div>

        <div className="info-grid">
          <article className="info-card">
            <h3>Proje Planlama</h3>
            <p>Teknik çizim, analiz ve projelendirme ile güçlü altyapılar oluşturuyoruz.</p>
          </article>
          <article className="info-card">
            <h3>Tesisat Uygulama</h3>
            <p>Elektrik kablolama, panolama ve montaj işlerini profesyonelce gerçekleştiriyoruz.</p>
          </article>
          <article className="info-card">
            <h3>Taahhüt Hizmetleri</h3>
            <p>Tüm iş süreçlerinde söz verdiğimiz kaliteyi ve zamanlamayı sağlıyoruz.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-card">
          <div>
            <p className="section-label">Bizimle İletişime Geçin</p>
            <h2>Elektrik projeniz için bugün bir keşif randevusu alın</h2>
            <p>
              Ücretsiz keşif, bütçe bilgisi ve proje danışmanlığı için bize mesaj gönderin. Size en kısa sürede dönüş yapalım.
            </p>
          </div>

          <div className="contact-actions">
            <a href="mailto:info@oscarelektrik.com" className="hero-button">E-posta Gönder</a>
            <a href="tel:+905335411458" className="contact-link">+90 533 541 14 58</a>
            <a href="tel:+905380514439" className="contact-link">+90 538 051 44 39</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
