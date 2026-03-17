# Rotten Council — Website Asset Checklist

Bu dosya, profesyonel bir oyun web sitesi için gereken tüm assetleri listeler. Her asset tamamlandığında `[x]` ile işaretlenir ve ilgili HTML/CSS güncellenir.

---

## Spoiler Politikası

Oyunun temel sürprizi — masum görünen meclis üyelerinin aslında yolsuz (palyaço makyajlı) olması — sitede korunmalıdır.

- **Corrupt portreler** (`*_c.png`) sitede **gösterilmez**
- **Flip-card mekanizması kaldırılır** — hover'da corrupt yüz göstermek oyunun keşif hissini öldürür
- **Roller bölümü 4-5 seçme rol** ile sınırlı tutulur, 15 rolün tamamı açıklanmaz
- **Corrupt taraf** için silüet / gizem görseli kullanılır, gerçek portre değil
- **Mekanik detaylar** kısa tutulur — oyuncunun keşfetmesi gereken bilgiler verilmez

> Mevcut sitede oyundan kopyalanmış 33 asset var (20 portre, 8 ikon, 2 bg, 1 seal). Bunların çoğu siteye özel assetlerle değiştirilecek.

---

## P0 — Sitenin Yayınlanabilmesi İçin Şart

Bunlar olmadan site amatör görünür. İlk yayın öncesi tamamlanmalı.

- [ ] **Game Logo / Logotype**
  - Council seal + stilize "ROTTEN COUNCIL" yazısı birleşik logo
  - Format: SVG (tercihen) veya PNG şeffaf arka plan
  - Boyut: SVG vektör / PNG en az 800px genişlik
  - Kullanım: nav bar, hero section, footer, OG image, press kit
  - Not: Şu anda sadece seal ikonu var, metin logosu yok

- [ ] **Hero Key Art / Banner**
  - Siteye özel sinematik kompozisyon — oyunun atmosferini yansıtan, ama oyun menüsünün birebir kopyası olmayan bir görsel
  - Format: PNG veya WebP
  - Boyut: 1920x1080 minimum, daha geniş tercih edilir (parallax için)
  - Kullanım: hero section tam ekran arka plan
  - Not: Mevcut `mainmenu_bg_layer1.png` geçici olarak kalabilir ama özel key art çok daha etkili olur

- [ ] **Gameplay Screenshots** (4-6 adet)
  - Curated, dikkatle seçilmiş oyun içi görüntüler
  - Format: PNG veya WebP
  - Boyut: 1920x1080, 16:9 en-boy oranı
  - Kullanım: screenshots bölümü (horizontal scroll)
  - Önerilen kareler:
    1. Meclis masası genel görünüm (kartlar açık, ifadeler görünür)
    2. Bir kartın ifadesini okuma anı (zoom/detay)
    3. Tutuklama aksiyonu (kelepçe animasyonu)
    4. Kampanya haritası / act ilerlemesi
    5. Özel oyun kurulum paneli
    6. Tutorial anı veya rol tanıtımı
  - Placeholder: "Coming Soon" kutucukları mevcut

- [ ] **Open Graph / Social Share Image**
  - Link paylaşıldığında görünen önizleme görseli (Twitter, Discord, WhatsApp vb.)
  - Format: JPG veya PNG
  - Boyut: 1200x630 piksel (kesin)
  - Kullanım: `<meta property="og:image">`
  - İçerik: game logo + kısa tagline + atmosferik arka plan
  - Placeholder: favicon kullanılıyor (çok küçük ve etkisiz)

- [ ] **Store Page URL**
  - Steam, itch.io veya başka platform linki
  - Format: URL string
  - Kullanım: hero "Wishlist on Steam" butonu, nav "Get the Game", footer
  - Placeholder: tüm CTA butonları `#` linkine gidiyor

---

## P1 — Lansman Öncesi Gerekli

Profesyonel oyun sitelerinde beklenen standart içerikler.

- [ ] **Gameplay Trailer / Video**
  - 30-90 saniye oyun tanıtım videosu
  - Format: YouTube veya Steam embed URL
  - Kullanım: hero "Watch Trailer" butonu (şu anda disabled)
  - Trailer yokken buton gizli veya "Coming Soon" kalır

- [ ] **Trailer Thumbnail**
  - Video önizleme görseli (oynatma butonu overlay ile)
  - Format: PNG veya WebP
  - Boyut: 1280x720
  - Kullanım: trailer embed yerine tıklanabilir preview

- [ ] **Studio / Developer Logo**
  - Geliştirici stüdyo markası (game logo'dan ayrı)
  - Format: SVG, şeffaf arka plan
  - Kullanım: nav bar (opsiyonel), footer, press kit, about bölümü
  - Placeholder: "Developer studio info coming soon" metni

- [ ] **Character Showcase Art** (3-5 seçme karakter)
  - Sitede gösterilecek sınırlı sayıda karakter portresi
  - Oyundaki portrelerin optimize edilmiş/kırpılmış versiyonları olabilir
  - Format: PNG veya WebP
  - Boyut: 600x600+ (kare, portre crop)
  - Kullanım: roller bölümünde seçme vitrin
  - Önerilen roller: Mayor, Legal Advocate, Council Chair (tanıtım için uygun, çok fazla mekanik açıklamaz)
  - Not: 10 clean portrenin tamamı yerine 3-5 seçme portre

- [ ] **Corrupt Side Mystery Art**
  - Yolsuz tarafı temsil eden gizem görseli — silüet, gölge, "?" işareti vb.
  - Mevcut corrupt portrelerin yerini alır (spoiler olmadan merak uyandırır)
  - Format: PNG veya WebP
  - Boyut: 600x600
  - Kullanım: corrupt roller bölümünde — "Kim yolsuz? Oyunda keşfet." mesajıyla
  - Not: Tek bir gizem görseli 5 corrupt kartın tamamının yerini alabilir

- [ ] **Social Media Account URLs**
  - Aktif hesapların linkleri
  - Steam Community hub URL
  - Discord davet linki
  - Twitter/X profil URL
  - YouTube kanal URL
  - Kullanım: footer sosyal medya ikonları (şu anda `#` linkli)

- [ ] **Favicon Set**
  - Mevcut `favicon.png` (1000x1000) çok büyük — optimize boyutlar gerekli
  - Gerekli boyutlar: `favicon.ico` (16x16, 32x32), `apple-touch-icon.png` (180x180)
  - Kullanım: `<link rel="icon">`, `<link rel="apple-touch-icon">`

- [ ] **Steam Capsule Art** (opsiyonel)
  - Steam mağaza görselleri
  - Boyutlar: Header Capsule 460x215, Small Capsule 231x87
  - Kullanım: sitede Steam badge/widget entegrasyonu

---

## P2 — Polish & Tamamlayıcı

Sitenin kalitesini artıran detaylar. Kaynaklar elverdiğinde eklenir.

- [ ] **Custom Section Icons** (SVG set)
  - How-to-play ve features bölümleri için özel tasarım ikonlar
  - Format: SVG, tek renk (CSS ile renklendirilecek)
  - Boyut: 24x24 viewBox
  - Mevcut oyun ikonları (`pageicon.png`, `dedective.png` vb.) geçici çözüm
  - Özel SVG ikonlar daha profesyonel ve performanslı

- [ ] **Social Media Icons** (SVG)
  - Steam, Discord, X (Twitter), YouTube logoları
  - Format: SVG, inline kullanılabilir
  - Kullanım: footer — mevcut düz harfler (S, D, X, Y) yerine gerçek logolar

- [ ] **Animated Gameplay Clips** (3-5 saniye)
  - Kısa, döngüsel oyun içi aksiyon klipleri
  - Format: WebM veya GIF
  - Boyut: 480x270 veya 640x360
  - Kullanım: screenshot'lar yerine veya yanında inline hareketli görseller

- [ ] **Press Kit ZIP**
  - İndirilebilir basın paketi: logolar, screenshotlar, açıklamalar, key art
  - Format: ZIP dosyası
  - Kullanım: footer "Press Kit" linki (şu anda `#`)

- [ ] **Developer About Content**
  - Stüdyo/ekip hakkında 1-2 paragraf tanıtım metni
  - Format: Metin (HTML'e yerleştirilecek)
  - Kullanım: footer veya ayrı "About" bölümü

- [ ] **Legal Pages**
  - Privacy Policy, Terms of Service
  - Format: HTML sayfaları veya Markdown
  - Kullanım: footer linkleri (şu anda `#`)

- [ ] **Background Art Variations**
  - Section arka planları için ek atmosferik görseller
  - Format: PNG veya WebP
  - Kullanım: roles, features veya footer bölümleri arka planı

- [ ] **Promotional Banner Set**
  - Harici platformlar için çeşitli boyutlarda tanıtım görselleri
  - Boyutlar: 1200x628 (Facebook), 1500x500 (Twitter header), 1080x1080 (Instagram)
  - Kullanım: sosyal medya paylaşımları, reklam

---

## Mevcut Kullanılabilir Assetler

Bu assetler zaten sitede mevcut ve spoiler-free:

- [x] Council seal ikonu (`favicon.png`, 1000x1000) — soyut geometrik desen, spoiler yok
- [x] Atmosferik arka plan: city hall (`mainmenu_bg_layer1.png`) — hero section
- [x] Atmosferik arka plan: game table (`gametable_bg.png`) — henüz kullanılmıyor
- [x] Oyun renk paleti & tipografi sistemi (WEBSITE_DESIGN_GUIDE.md)
- [x] Tüm metin içerikleri (roller, özellikler, nasıl oynanır)

### Kaldırılacak Assetler (spoiler veya gereksiz)

Bu assetler siteye özel görseller geldiğinde kaldırılacak:

- 10 corrupt portre (`*_c.png`) — **SPOILER**, corrupt mystery art ile değiştirilecek
- 10 innocent portre (tamamı) — 3-5 seçme showcase art ile değiştirilecek
- Oyun UI ikonları (`pageicon.png`, `dedective.png` vb.) — custom SVG ikonlarla değiştirilecek
- `card_back.png` — sitede kullanılmıyor, kaldırılabilir
- `corrupticon.png`, `question.png`, `secure.png`, `susp.png` — sitede kullanılmıyor

---

## Asset Teslim Süreci

Her yeni asset geldiğinde:

1. Dosyayı `assets/images/` altına uygun klasöre koy
2. Bu dosyada ilgili maddeyi `[x]` ile işaretle
3. `index.html` ve/veya `css/styles.css`'i güncelle (placeholder → gerçek asset)
4. Kaldırılacak eski oyun assetlerini sil
5. Commit at: `"Asset: [asset adı] eklendi, [eski asset] kaldırıldı"`
