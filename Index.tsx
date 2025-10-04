import React, { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const canonicalUrl = "https://www.agacsenturk.com/";

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    let ogUrlMeta = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    if (!ogUrlMeta) {
      ogUrlMeta = document.createElement("meta");
      ogUrlMeta.setAttribute("property", "og:url");
      document.head.appendChild(ogUrlMeta);
    }
    ogUrlMeta.setAttribute("content", canonicalUrl);
  }, []);

  const colors = {
    burgundy: "#7A001F",
    black: "#0B0B0B",
    metallicGray: "#A7A9AC",
    lightGray: "#F3F4F6",
    white: "#FFFFFF",
  } as const;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: colors.white, color: colors.black }}>
      {/* Top Bar / Navbar */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: colors.white, borderBottom: `1px solid ${colors.metallicGray}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/assets/logo.png" alt="AĞAÇ & ŞENTÜRK LAW OFFICE" style={{ height: 36, objectFit: "contain", mixBlendMode: "multiply" }} />
            <strong style={{ letterSpacing: 1, color: colors.black }}>AĞAÇ & ŞENTÜRK LAW OFFICE</strong>
          </div>
          <nav style={{ display: "flex", gap: 18, fontSize: 14 }}>
            <a href="#hakkimizda" style={{ textDecoration: "none", color: colors.black }}>Hakkımızda</a>
            <a href="#calisma-alanlari" style={{ textDecoration: "none", color: colors.black }}>Çalışma Alanları</a>
            <a href="#avukatlar" style={{ textDecoration: "none", color: colors.black }}>Avukatlarımız</a>
            <a href="#kariyer" style={{ textDecoration: "none", color: colors.black }}>Kariyer</a>
            <a href="#iletisim" style={{ textDecoration: "none", color: colors.black }}>İletişim</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${colors.black} 0%, ${colors.burgundy} 60%, ${colors.black} 100%)`, color: colors.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 16px", textAlign: "center" }}>
          <h1 style={{ fontSize: 42, fontWeight: 800, letterSpacing: 1 }}>AĞAÇ & ŞENTÜRK LAW OFFICE</h1>
          <p style={{ fontSize: 18, opacity: 0.9, marginTop: 12 }}>Kurumsal, güvenilir ve sonuç odaklı hukuki çözüm ortağınız</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
            <a href="#iletisim" style={{ padding: "12px 20px", background: colors.white, color: colors.black, borderRadius: 6, textDecoration: "none", fontWeight: 600 }}>Ücretsiz Danışmanlık</a>
            <a href="https://www.agacsenturk.com" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 20px", background: "transparent", color: colors.white, border: `1px solid ${colors.white}`, borderRadius: 6, textDecoration: "none", fontWeight: 600 }}>www.agacsenturk.com</a>
          </div>
        </div>
      </section>

      {/* Hakkımızda */}
      <section id="hakkimizda" style={{ padding: "64px 16px", background: colors.white }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: colors.burgundy, marginBottom: 18 }}>Hakkımızda</h2>
          <p style={{ color: "#4B5563", lineHeight: 1.7 }}>
            Ağaç & Şentürk Hukuk Bürosu, bireysel ve kurumsal müvekkillerine hukukun farklı disiplinlerinde etkin, çözüm odaklı ve stratejik yaklaşımlar sunmak amacıyla kurulmuştur. Özellikle ticaret hukuku, sözleşmeler hukuku, iş hukuku, ceza hukuku ve veri koruma hukuku alanlarında yoğunlaşarak her bir dosyada özgün çözümler üretmeyi hedefler.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 28 }}>
            <div style={{ border: `1px solid ${colors.metallicGray}`, borderRadius: 10, padding: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Misyonumuz</h3>
              <p style={{ color: "#4B5563", lineHeight: 1.7 }}>
                Müvekkillerimize en yüksek standartlarda hukuki hizmet sunarak haklarını korumak ve adaletin tecellisine katkıda bulunmak; etik değerler ve profesyonellik temelinde güvenilir bir danışman olmak.
              </p>
            </div>
            <div style={{ border: `1px solid ${colors.metallicGray}`, borderRadius: 10, padding: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Vizyonumuz</h3>
              <p style={{ color: "#4B5563", lineHeight: 1.7 }}>
                Yenilikçi yaklaşımlar ve teknoloji entegrasyonu ile sektörde öncü bir konuma ulaşmak; müvekkillerimize sürdürülebilir başarı sağlayan stratejiler geliştirmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Çalışma Alanları */}
      <section id="calisma-alanlari" style={{ padding: "64px 16px", background: colors.lightGray }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: colors.burgundy, marginBottom: 18, textAlign: "center" }}>Çalışma Alanlarımız</h2>
          <p style={{ color: "#6B7280", textAlign: "center", maxWidth: 800, margin: "0 auto 28px" }}>Geniş uzmanlık alanlarımız ile bireysel ve kurumsal müvekkillerimize kapsamlı hukuki destek sunuyoruz.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              { t: "Ticaret Hukuku", d: "Şirket kuruluşu, birleşme-devralma, ticari sözleşmeler, rekabet ve uyuşmazlıklar." },
              { t: "Sözleşmeler Hukuku", d: "Sözleşme hazırlama, inceleme, müzakere ve uyuşmazlık çözümü." },
              { t: "İş Hukuku", d: "İşçi-işveren ilişkileri, sözleşmeler, tazminat ve danışmanlık." },
              { t: "Ceza Hukuku", d: "Soruşturma ve kovuşturma süreçlerinde savunma ve temsil." },
              { t: "Veri Koruma Hukuku", d: "KVKK, GDPR uyumu, bilgi güvenliği ve gizlilik danışmanlığı." },
              { t: "İcra ve İflas Hukuku", d: "Alacak takibi, iflas süreçleri ve konkordato işlemleri." },
            ].map((x, i) => (
              <div key={i} style={{ background: colors.white, border: `1px solid ${colors.metallicGray}`, borderRadius: 10, padding: 18 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{x.t}</h3>
                <p style={{ color: "#4B5563", lineHeight: 1.7 }}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avukatlarımız */}
      <section id="avukatlar" style={{ padding: "64px 16px", background: colors.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: colors.burgundy, marginBottom: 18, textAlign: "center" }}>Avukatlarımız</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            <div style={{ border: `1px solid ${colors.metallicGray}`, borderRadius: 10, padding: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>Av. Talha Ağaç</h3>
              <p style={{ color: colors.metallicGray, margin: "6px 0 12px" }}>Kurucu Ortak | Ağaç & Şentürk Hukuk Bürosu</p>
              <p style={{ color: "#4B5563", lineHeight: 1.7 }}>
                İstanbul Ticaret Üniversitesi Hukuk Fakültesi’nden mezun olan Av. Talha Ağaç, lisans eğitimi süresince özellikle ticaret hukuku, borçlar hukuku ve icra-iflas hukuku alanlarında uzmanlaşmıştır. Üniversite yıllarından itibaren çeşitli hukuk bürolarında edindiği deneyimlerle birlikte, farklı sektörlerde faaliyet gösteren şirketlere yönelik danışmanlık ve dava süreçlerinde aktif rol almıştır.
              </p>
              <p style={{ color: "#4B5563", lineHeight: 1.7, marginTop: 8 }}>
                Ağaç & Şentürk Hukuk Bürosu’nun kurucu ortağı olarak, bireysel ve kurumsal müvekkillerine hukukun farklı disiplinlerinde etkin, çözüm odaklı ve stratejik yaklaşımlar sunmaktadır. Özellikle ticaret hukuku, sözleşmeler hukuku, iş hukuku ve ceza hukuku alanlarında yoğun olarak çalışmaktadır.
              </p>
              <p style={{ color: "#4B5563", lineHeight: 1.7, marginTop: 8 }}>
                Disiplinli çalışma tarzı, müvekkil odaklı yaklaşımı ve hukuki süreçlerdeki analitik düşünme kabiliyeti ile bilinen Av. Talha Ağaç, güncel mevzuat ve yargı kararlarını yakından takip ederek her bir dosyada özgün çözümler üretmeyi hedeflemektedir.
              </p>
            </div>

            <div style={{ border: `1px solid ${colors.metallicGray}`, borderRadius: 10, padding: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>Av. Yücel Şentürk</h3>
              <p style={{ color: colors.metallicGray, margin: "6px 0 12px" }}>Kurucu Ortak | Ağaç & Şentürk Hukuk Bürosu</p>
              <p style={{ color: "#4B5563", lineHeight: 1.7 }}>
                Av. Yücel Şentürk, lisans eğitimini İstanbul Ticaret Üniversitesi Hukuk Fakültesi’nde tamamlamış, ardından İstanbul Ticaret Üniversitesi Sosyal Bilimler Enstitüsü’nde Özel Hukuk alanında yüksek lisans yapmıştır. Akademik çalışmaları süresince özellikle borçlar hukuku, ticaret hukuku ve sözleşmeler hukuku alanlarında derinleşmiştir.
              </p>
              <p style={{ color: "#4B5563", lineHeight: 1.7, marginTop: 8 }}>
                Meslek hayatına başladığı günden bu yana, farklı ölçeklerdeki yerli ve yabancı şirketlere ticari sözleşmeler, kurumsal hukuk danışmanlığı ve uyuşmazlık çözümü konularında hukuki destek sağlamaktadır. Yargı süreçlerinde etkin temsil gücü ve stratejik yaklaşımıyla tanınan Av. Şentürk, aynı zamanda hukuki risk analizi ve önleyici hukuk danışmanlığı alanlarında da deneyim sahibidir.
              </p>
              <p style={{ color: "#4B5563", lineHeight: 1.7, marginTop: 8 }}>
                Kurucu ortak olarak, müvekkillerine yalnızca mevcut sorunların çözümüne değil, geleceğe dönük hukuki stratejilerin oluşturulmasına odaklanan bir hizmet anlayışı sunmaktadır.
              </p>
            </div>

            <div style={{ border: `1px solid ${colors.metallicGray}`, borderRadius: 10, padding: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>Av. & Legal Engineer Nurefşan Gültekin</h3>
              <p style={{ color: colors.metallicGray, margin: "6px 0 12px" }}>Avukat | Hukuk Teknolojileri ve Uyum Süreçleri Uzmanı</p>
              <p style={{ color: "#4B5563", lineHeight: 1.7 }}>
                Altınbaş Üniversitesi Hukuk Fakültesi’nden mezun olan Av. Nurefşan Gültekin, aynı zamanda Uluslararası İşletme alanında çift anadal yapmıştır. Hukuk ve teknoloji kesişiminde yürüttüğü akademik ve mesleki çalışmalarla, Türkiye’de gelişmekte olan LegalTech ekosistemine katkı sağlayan genç hukukçular arasında yer almaktadır.
              </p>
              <p style={{ color: "#4B5563", lineHeight: 1.7, marginTop: 8 }}>
                Veri koruma hukuku, yapay zekâ mevzuatı (AI Act), bankacılık ve finans sektörüne ilişkin uyum süreçleri (KVKK, GDPR, MASAK, BDDK, SPK, TFRS/IFRS) gibi alanlarda uzmanlaşan Gültekin; aynı zamanda hukuki süreç otomasyonu, sözleşme analizi, compliance knowledge graph ve LLM tabanlı yapay zekâ entegrasyonları üzerine Ar-Ge çalışmaları yürütmektedir.
              </p>
              <p style={{ color: "#4B5563", lineHeight: 1.7, marginTop: 8 }}>
                Ağaç & Şentürk Hukuk Bürosu’nda teknoloji ve hukuk disiplinlerini birleştiren bakış açısıyla; veri gizliliği, fintech, sözleşme yönetimi ve kurumsal uyum alanlarında müvekkillere inovatif ve çözüm odaklı hukuki danışmanlık sunmaktadır.
              </p>
            </div>

            <div style={{ border: `1px solid ${colors.metallicGray}`, borderRadius: 10, padding: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>Stj. Av. Feyzullah Yaşar</h3>
              <p style={{ color: colors.metallicGray, margin: "6px 0 12px" }}>Stajyer Avukat | Ağaç & Şentürk Hukuk Bürosu</p>
              <p style={{ color: "#4B5563", lineHeight: 1.7 }}>
                Feyzullah Yaşar, lisans eğitimini İstanbul Üniversitesi Hukuk Fakültesi’nde yüksek akademik başarı ile tamamlamıştır. Öğrenim hayatı boyunca ticaret hukuku, borçlar hukuku ve medeni usul hukuku alanlarında yoğun akademik çalışmalar yürütmüş; çeşitli projeler ve bilimsel çalışmalar ile hukuk topluluklarında aktif rol almıştır.
              </p>
              <p style={{ color: "#4B5563", lineHeight: 1.7, marginTop: 8 }}>
                Stajyer avukat olarak, dava dosyalarının hazırlanması, hukuki araştırmalar ve sözleşme incelemeleri gibi süreçlerde aktif katkı sunmaktadır. Ticaret ve sözleşmeler hukuku alanlarına ilgisi sayesinde projelerde sistematik bir yaklaşım benimsemektedir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kariyer */}
      <section id="kariyer" style={{ padding: "64px 16px", background: colors.lightGray }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: colors.burgundy, marginBottom: 18 }}>Kariyer</h2>
          <p style={{ color: "#4B5563", lineHeight: 1.7 }}>
            Ağaç & Şentürk Law Office; analitik düşünen, araştırmaya meraklı, yazılı ve sözlü iletişimi güçlü ekip arkadaşlarıyla çalışmaktan memnuniyet duyar. CV’nizi ve niyet mektubunuzu <a href="mailto:info@agacsenturk.com" style={{ color: colors.burgundy, fontWeight: 600 }}>info@agacsenturk.com</a> adresine göndererek başvurunuzu iletebilirsiniz.
          </p>
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" style={{ padding: "64px 16px", background: colors.white }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: colors.burgundy, marginBottom: 18 }}>İletişim</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            <div style={{ border: `1px solid ${colors.metallicGray}`, borderRadius: 10, padding: 20 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Adres</h3>
              <p style={{ color: "#4B5563", lineHeight: 1.7 }}>Hürriyet, Dr. Cemil Bengü Cd. No:34 K:5, D:10, 34403 Kağıthane/İstanbul</p>
            </div>
            <div style={{ border: `1px solid ${colors.metallicGray}`, borderRadius: 10, padding: 20 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>İletişim</h3>
              <p style={{ color: "#4B5563", lineHeight: 1.7 }}>
                Telefon: <a href="tel:+905454402501" style={{ color: colors.burgundy, fontWeight: 600 }}>0545 440 25 01</a><br/>
                E-posta: <a href="mailto:info@agacsenturk.com" style={{ color: colors.burgundy, fontWeight: 600 }}>info@agacsenturk.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: colors.black, color: colors.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/assets/logo.png" alt="Logo" style={{ height: 28, objectFit: "contain", mixBlendMode: "multiply", filter: "grayscale(20%)" }} />
            <span style={{ opacity: 0.9 }}>© {new Date().getFullYear()} Ağaç & Şentürk Law Office</span>
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            <a href="https://www.agacsenturk.com" target="_blank" rel="noopener noreferrer" style={{ color: colors.white, textDecoration: "none", borderBottom: `1px solid ${colors.white}` }}>www.agacsenturk.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
