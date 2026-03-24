# Rotten Chamber - Website Replan

Bu dosya, website yenilemesi icin guncel asset ve entegrasyon planidir. Eski genel checklist yerine, artik gercekten uretilmis gorseller, turetilmis crop'lar, entegrasyon adimlari ve eksik kalan non-visual isler takip edilir.

---

## Hedef

Website'i oyun ici asset kopyasi gorunumunden cikarip, web'e ozel bir pazarlama yuzu haline getirmek.

Ana ilkeler:

- spoiler verme
- premium civic-noir atmosfer
- oyun ici portreleri oldugu gibi kullanmama
- hero, roles ve section background alanlarini web'e ozel gorsellerle doldurma
- crop ve turevleri mevcut master'lardan uretme

---

## Spoiler Politikasi

- **Corrupt portreler** (`*_c.png`) sitede gosterilmez
- **Flip-card mekanizmasi kaldirilir**
- **Roller bolumu** tum roster'i aciklamaz; secili karakter vitrini kullanir
- **Corrupt taraf** icin spoiler-free mystery art kullanilir
- **Mekanik detaylar** kisa tutulur

---

## Uretilen Assetler

### Master Gorseller

- [x] `assets/images/exclusive/hero_key_art_master.png`
  - Ana hero gorseli
  - Kullanilacak yer: hero desktop background

- [x] `assets/images/exclusive/secondary_background_master.png`
  - Ikincil atmosferik arka plan
  - Kullanilacak yer: roles / features / ara section background denemeleri

- [x] `assets/images/exclusive/corrupt_mystery_master.png`
  - Spoiler-free corrupt temsil gorseli
  - Kullanilacak yer: corrupt side / hidden corruption block / role replacement card

- [x] `assets/images/exclusive/dossier_texture_master.png`
  - Investigation / dossier texture surface
  - Kullanilacak yer: card texture, section overlay, subtle paper surface

- [x] `assets/images/exclusive/mayor_showcase_master.png`
  - Website showcase portrait

- [x] `assets/images/exclusive/legal_advocate_showcase_master.png`
  - Website showcase portrait

- [x] `assets/images/exclusive/council_chair_showcase_master.png`
  - Website showcase portrait

- [x] `assets/images/exclusive/police_chief_showcase_master.png`
  - Website showcase portrait

### Turetilmis Gorseller

- [x] `assets/images/exclusive/derived/hero_key_art_mobile.png`
  - Hero mobile crop
  - Boyut: `1080x1350`

- [x] `assets/images/exclusive/derived/hero_key_art_og.png`
  - Open Graph / social share crop
  - Boyut: `1200x630`

- [x] `assets/images/exclusive/derived/secondary_background_mobile.png`
  - Secondary background mobile crop
  - Boyut: `1080x1350`

---

## Website Kullanim Plani

### Hero

- [x] `hero_key_art_master.png` ile desktop hero'yu degistir
- [x] `hero_key_art_mobile.png` ile mobile hero varyantini bagla
- [x] Mevcut `mainmenu_bg_layer1.png` kullanimini kaldir
- [x] `hero_key_art_og.png` dosyasini `<meta property="og:image">` icin bagla

### Roles / Character Showcase

- [x] Tum oyun ici roster grid'ini yeniden planla
- [x] Showcase'i `4` secili karakterle sinirla:
  - Mayor
  - Legal Advocate
  - Council Chair
  - Police Chief
- [x] `mayor_showcase_master.png` dosyasini kullan
- [x] `legal_advocate_showcase_master.png` dosyasini kullan
- [x] `council_chair_showcase_master.png` dosyasini kullan
- [x] `police_chief_showcase_master.png` dosyasini kullan
- [x] Corrupt kartlari yerine `corrupt_mystery_master.png` kullan
- [x] Mevcut innocent/corrupt flip-card yaklasimini kaldir

### Secondary Background / Section Atmosphere

- [x] `secondary_background_master.png` veya `secondary_background_mobile.png` ile en az bir alt section'i yenile
- [x] Hangi bolumde kullanilacagini netlestir:
  - roles background (kullanildi)
  - features background
  - ara full-width atmospheric divider

### Texture / Surface

- [x] `dossier_texture_master.png` ile en az bir yerde paper/investigation texture katmani ekle
- [x] Asiri okunakli text/stamp gorunuyorsa CSS opacity veya blend ile yumuşat

---

## P0 - Hemen Yapilacaklar

Bunlar tamamlanmadan yeni gorseller uretilmis olsa bile website donusumu bitmis sayilmaz.

- [x] Hero entegrasyonu
- [x] Mobile hero entegrasyonu
- [x] OG image entegrasyonu
- [x] Roles bolumunun secili showcase formatina gecmesi
- [x] Corrupt mystery art'in siteye baglanmasi
- [x] Eski oyun ici portre grid'inin kaldirilmasi veya ciddi bicimde azaltılması

---

## P1 - Kalan Kritik Eksikler

Bunlar gorsel uretilmesini zorunlu kilmiyor ama lansman kalitesini belirliyor.

- [ ] **Game Logo / Logotype**
  - Chamber seal + "ROTTEN CHAMBER" wordmark
  - Gerekli varyantlar:
    - yatay logo
    - ikon-only
    - acik zemin versiyonu
    - monokrom versiyon

- [ ] **Store Page URL**
  - Steam / itch / store linki
  - CTA butonlari hala `#`

- [x] **Gameplay Screenshots** (6 adet)
  - main-menu, hero-mid-investigation, active-ability-targeting, high-tension-reveal, wide-table-late-game, professional-toolkit-usage
  - Placeholder'lar gercek screenshotlarla degistirildi

- [ ] **Favicon Set**
  - `favicon.ico`
  - `apple-touch-icon.png`
  - opsiyonel `site.webmanifest`

- [ ] **Social Media Account URLs**
  - Steam
  - Discord
  - X
  - YouTube

---

## P2 - Kaliteyi Arttiracak Sonraki Katman

- [ ] **Studio / Developer Logo**
- [ ] **Brand Seal / Watermark Pack**
- [ ] **Custom Section Icons** (SVG)
- [ ] **Social Media Icons** (SVG)
- [ ] **Trailer Thumbnail**
- [ ] **Gameplay Trailer / Video**
- [ ] **Background Art Variations**
- [ ] **Promotional Banner Set**
- [ ] **Press Kit ZIP**

---

## Artik Gerekmeyen Yeni AI Uretimleri

Su anki asamada tekrar uretmek zorunda olmadigimiz seyler:

- [x] yeni hero sahnesi
- [x] yeni secondary background sahnesi
- [x] yeni corrupt mystery sahnesi
- [x] yeni dossier texture sahnesi
- [x] ek karakter portresi

Not:

- Police Chief portresi digerlerine gore biraz daha literal, ama referans portreye sadik oldugu icin kabul edildi.
- Yeni AI uretimine donmeden once mevcut assetler siteye baglanmali.

---

## Kaldirilacak veya Geri Plana Itilecek Eski Assetler

- [x] `assets/images/backgrounds/mainmenu_bg_layer1.png` hero kullanimindan cikar
- [x] `assets/images/portraits/*` tam roster kullanimini kaldir veya ciddi azalt
- [x] `assets/images/portraits/*_c*.png` corrupt reveal kullanimini sifirla
- [ ] Oyun UI ikonlarini uzun vadede custom SVG ile degistir:
  - `pageicon.png`
  - `dedective.png`
  - `interrogator.png`
  - `handcuffs_closed.png`

---

## Dosya Yapisi

### Master

- `external/website/assets/images/exclusive/hero_key_art_master.png`
- `external/website/assets/images/exclusive/secondary_background_master.png`
- `external/website/assets/images/exclusive/corrupt_mystery_master.png`
- `external/website/assets/images/exclusive/dossier_texture_master.png`
- `external/website/assets/images/exclusive/mayor_showcase_master.png`
- `external/website/assets/images/exclusive/legal_advocate_showcase_master.png`
- `external/website/assets/images/exclusive/council_chair_showcase_master.png`
- `external/website/assets/images/exclusive/police_chief_showcase_master.png`

### Derived

- `external/website/assets/images/exclusive/derived/hero_key_art_mobile.png`
- `external/website/assets/images/exclusive/derived/hero_key_art_og.png`
- `external/website/assets/images/exclusive/derived/secondary_background_mobile.png`

---

## Sonraki Uygulama Sirasi

1. Hero background degisimi
2. OG image degisimi
3. Roles bolumu yeniden yapilandirma
4. Corrupt mystery entegrasyonu
5. Secondary background ve dossier texture entegrasyonu
6. Screenshot section'in gercek oyun goruntuleriyle doldurulmasi
7. Logo / favicon / social link tamamlama
