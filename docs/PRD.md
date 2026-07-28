# Product Requirements Document (PRD)

## Katalog Flora dan Burung Curug Siluwok

**Versi:** 1.1  
**Status:** Ruang lingkup disetujui; siap untuk desain dan pengembangan  
**Lokasi:** Jalur Curug Siluwok, Desa Sidoharjo  
**Pengembang:** Tim KKN Sarga Dharma, KKN-PPM UGM  
**Bahasa:** Bahasa Indonesia  
**Jenis produk:** Situs web statis, mobile-first

---

## 1. Ringkasan Produk

Katalog Flora dan Burung Curug Siluwok adalah situs web edukasi yang memperkenalkan tumbuhan dan burung yang diamati di sekitar jalur menuju Curug Siluwok, Desa Sidoharjo.

Pengunjung dapat menggunakan situs dengan dua cara:

1. Membuka katalog secara daring dan memilih kategori **Flora** atau **Burung**.
2. Memindai kode QR pada papan informasi di sepanjang jalur untuk langsung membuka halaman spesies yang sesuai.

Situs tidak membutuhkan akun, basis data, server khusus, atau panel admin. Seluruh halaman dibangun menjadi berkas statis dan disimpan dalam repositori GitHub.

---

## 2. Tujuan

### Tujuan utama

- Memberikan informasi edukatif tentang flora dan burung di jalur Curug Siluwok.
- Mendukung pengalaman wisata berbasis lingkungan di Desa Sidoharjo.
- Memberikan satu halaman dan URL permanen untuk setiap spesies.
- Memungkinkan pengunjung membuka informasi spesies langsung melalui kode QR.
- Menyediakan katalog yang cepat dan mudah digunakan pada telepon genggam.

### Tujuan sekunder

- Mendokumentasikan keanekaragaman hayati yang telah diamati oleh tim.
- Menjadi aset digital yang tetap dapat diakses setelah kegiatan KKN selesai.
- Menampilkan identitas Desa Sidoharjo dan Curug Siluwok sebagai fokus utama.
- Memberikan pengakuan kepada Tim KKN Sarga Dharma dan UGM tanpa mengalahkan identitas desa.

---

## 3. Ruang Lingkup Konten

Konten awal yang tersedia terdiri dari:

- **19 spesies flora**
- **11 spesies burung**
- **Total 30 halaman spesies**

Seluruh spesies dinyatakan telah diamati di sekitar Desa Sidoharjo dan katalog akan diposisikan secara khusus sebagai katalog jalur Curug Siluwok.

Foto spesies dapat berasal dari dokumentasi anggota tim maupun sumber daring yang memiliki izin atau lisensi penggunaan yang jelas. Situs tidak boleh dianggap siap dipublikasikan sebelum setiap foto final dilengkapi nama fotografer atau pemilik karya, sumber, dan informasi lisensi apabila berasal dari pihak luar.

---

## 4. Pengguna Sasaran

### Pengunjung jalur Curug Siluwok

Kebutuhan utama:

- Halaman terbuka dengan cepat melalui data seluler.
- Informasi utama langsung terlihat setelah QR dipindai.
- Teks nyaman dibaca pada layar kecil.
- Navigasi kembali ke kategori mudah ditemukan.

### Pengunjung daring

Kebutuhan utama:

- Dapat memilih Flora atau Burung dari halaman utama.
- Dapat melihat seluruh spesies dalam bentuk kartu visual.
- Dapat mencari spesies berdasarkan nama Indonesia atau nama ilmiah.
- Dapat membuka dan membagikan halaman spesies tertentu.

### Tim KKN dan pihak penerima hasil program

Kebutuhan utama:

- Tidak membutuhkan pemeliharaan rutin.
- Tidak membutuhkan biaya server.
- Repositori dan deployment dikelola melalui satu akun GitHub yang ditetapkan sebagai pemilik proyek.
- Situs dapat dipulihkan dari GitHub apabila terjadi masalah pada hosting.

---

## 5. Arsitektur Informasi

```text
Beranda
├── Flora
│   ├── Daftar 19 flora
│   └── Halaman detail setiap flora
├── Burung
│   ├── Daftar 11 burung
│   └── Halaman detail setiap burung
├── Tentang Katalog
└── Referensi dan Kredit
```

### Struktur URL

```text
/
/flora/
/flora/vanili/
/flora/cengkeh/
/burung/
/burung/kutilang-emas/
/burung/elang-ular-bido/
/tentang/
/referensi/
```

Aturan URL:

- Huruf kecil.
- Menggunakan tanda hubung, bukan spasi.
- Menggunakan nama Indonesia sebagai slug.
- Tidak menyertakan tahun KKN atau nama anggota tim.
- Slug tidak diubah setelah kode QR dibuat.

---

## 6. Kebutuhan Halaman

### 6.1 Beranda

Beranda harus memuat:

- Nama katalog.
- Identitas Desa Sidoharjo dan Curug Siluwok.
- Deskripsi singkat mengenai katalog dan jalur QR.
- Dua pilihan kategori berukuran besar: **Flora** dan **Burung**.
- Gambar atau ilustrasi utama yang mewakili jalur Curug Siluwok.
- Tombol menuju halaman Tentang Katalog.
- Footer berisi kredit pengembangan dan logo.

Teks kerja yang direkomendasikan:

> Jelajahi flora dan burung yang dapat dijumpai di sepanjang jalur Curug Siluwok, Desa Sidoharjo.

### 6.2 Halaman kategori Flora

Halaman harus memuat:

- Judul “Flora”.
- Deskripsi singkat.
- Kolom pencarian.
- Grid 19 kartu flora.
- Setiap kartu menampilkan foto, nama Indonesia, dan nama ilmiah.
- Status konservasi tidak ditampilkan pada kartu.
- Seluruh area kartu dapat diklik.

### 6.3 Halaman kategori Burung

Halaman harus memuat:

- Judul “Burung”.
- Deskripsi singkat.
- Kolom pencarian.
- Grid 11 kartu burung.
- Setiap kartu menampilkan foto, nama Indonesia, dan nama ilmiah.
- Status konservasi tidak ditampilkan pada kartu.
- Seluruh area kartu dapat diklik.

### 6.4 Halaman detail flora

Urutan isi:

1. Foto utama.
2. Nama Indonesia.
3. Nama ilmiah.
4. Famili dan habitus.
5. Status konservasi IUCN, apabila tersedia.
6. Status perdagangan CITES, apabila berlaku.
7. Deskripsi morfologi.
8. Habitat.
9. Manfaat.
10. Peran ekologis.
11. Fakta menarik.
12. Kredit foto.
13. Sumber atau referensi.
14. Tombol kembali ke daftar Flora.
15. Navigasi ke flora sebelumnya dan berikutnya.

### 6.5 Halaman detail burung

Urutan isi:

1. Foto utama.
2. Nama Indonesia.
3. Nama ilmiah.
4. Famili.
5. Status konservasi IUCN, apabila tersedia.
6. Ciri-ciri.
7. Habitat.
8. Makanan.
9. Bunyi atau karakter suara dalam bentuk teks.
10. Peran ekologis.
11. Fakta menarik.
12. Kredit foto.
13. Sumber atau referensi.
14. Tombol kembali ke daftar Burung.
15. Navigasi ke burung sebelumnya dan berikutnya.

### 6.6 Tentang Katalog

Memuat:

- Tujuan katalog.
- Hubungan katalog dengan jalur Curug Siluwok.
- Pernyataan bahwa daftar spesies disusun berdasarkan hasil pengamatan di Desa Sidoharjo.
- Penjelasan singkat mengenai Tim KKN Sarga Dharma.
- Logo Desa Sidoharjo apabila tersedia.
- Logo UGM, KKN-PPM UGM, dan Tim KKN Sarga Dharma.

### 6.7 Referensi dan Kredit

Memuat:

- Daftar sumber ilmiah dan basis data yang digunakan untuk menyusun konten.
- Referensi dikelompokkan per spesies atau diberi penanda yang mudah dicocokkan dengan halaman spesies.
- Penjelasan singkatan status konservasi.
- Daftar foto beserta nama fotografer atau pemilik karya, tautan/sumber asal, dan lisensi penggunaan apabila foto diperoleh secara daring.
- Tanggal terakhir data diperiksa.
- Catatan bahwa status konservasi dan taksonomi dapat diperbarui oleh lembaga terkait.

---

## 7. Model Data

### 7.1 Model umum

```yaml
slug: vanili
category: flora
name: Vanili
scientific_name: Vanilla planifolia Andrews
family: Orchidaceae
image: /images/flora/vanili.webp
image_alt: Tanaman vanili merambat pada pohon penyangga
photo_credit: Nama fotografer atau pemilik karya
photo_source: Dokumentasi Tim KKN atau URL halaman sumber
photo_license: Milik tim / CC BY / CC BY-SA / izin lainnya
sources:
  - Referensi utama
```

### 7.2 Bidang khusus flora

```yaml
habitus: Liana
morphology: ...
habitat: ...
benefits: ...
ecological_role: ...
interesting_fact: ...
iucn_status: EN
cites_status: null
```

### 7.3 Bidang khusus burung

```yaml
morphology: ...
habitat: ...
food: ...
call: ...
ecological_role: ...
interesting_fact: ...
iucn_status: LC
```

### 7.4 Aturan status konservasi

- `iucn_status` dan `cites_status` disimpan dalam bidang terpisah.
- Nilai `-` pada dokumen sumber diubah menjadi nilai kosong, bukan ditampilkan sebagai status.
- Label lengkap dapat ditampilkan di situs, misalnya “Least Concern (Risiko Rendah)”.
- Tahun atau sumber penilaian disimpan apabila tersedia.

---

## 8. Fitur Fungsional

### Wajib untuk MVP

- Pilihan kategori Flora dan Burung.
- Grid kartu spesies yang responsif.
- Pencarian nama pada masing-masing halaman kategori.
- Satu halaman statis untuk setiap spesies.
- URL langsung yang aman untuk kode QR.
- Navigasi kembali ke kategori.
- Halaman Tentang dan Referensi.
- Halaman 404 khusus.
- Metadata judul dan deskripsi untuk setiap halaman.
- Sitemap dan robots.txt.

### Tidak termasuk dalam MVP

- Akun pengguna.
- Basis data.
- Panel admin.
- Peta interaktif.
- Koordinat pengamatan.
- Audio burung.
- Bahasa Inggris.
- Komentar pengguna.
- Pengiriman data oleh masyarakat.
- Analitik yang mengumpulkan data pribadi.

---

## 9. Pencarian

Pencarian dilakukan sepenuhnya di browser tanpa server.

Perilaku:

- Mencari nama Indonesia.
- Mencari nama ilmiah.
- Tidak peka terhadap huruf besar dan kecil.
- Hasil disaring langsung ketika pengguna mengetik.
- Menampilkan pesan apabila tidak ada hasil.

Karena hanya terdapat 19 flora dan 11 burung, tidak diperlukan mesin pencarian eksternal atau layanan berbayar.

---

## 10. Desain dan Pengalaman Pengguna

### Arah visual

- Nuansa alam, sejuk, dan edukatif.
- Identitas Curug Siluwok dan Desa Sidoharjo lebih dominan daripada identitas KKN.
- Warna hijau hutan, hijau lumut, krem, putih, dan warna aksen yang terinspirasi dari air terjun.
- Foto spesies menjadi elemen visual utama.
- Ornamen tidak boleh mengganggu keterbacaan.

### Mobile-first

- Dirancang pertama untuk lebar layar 320–430 piksel.
- Ukuran teks isi minimal sekitar 16 piksel.
- Tombol dan kartu memiliki area sentuh yang besar.
- Tidak ada navigasi yang hanya dapat digunakan dengan hover.
- Nama spesies dan foto tampil sebelum paragraf panjang.

### Aksesibilitas

- Semua gambar memiliki teks alternatif.
- Nama ilmiah menggunakan elemen semantik yang sesuai dan dapat dicetak miring.
- Kontras teks memenuhi standar aksesibilitas dasar.
- Situs dapat digunakan dengan keyboard.
- Animasi dibatasi dan mengikuti preferensi reduced motion.

---

## 11. Persyaratan Foto

Setiap spesies membutuhkan minimal satu foto utama. Foto dapat berupa dokumentasi anggota tim atau karya dari sumber daring yang legal digunakan.

Rekomendasi teknis:

- Resolusi sumber minimal 1600 piksel pada sisi panjang.
- Rasio kartu diseragamkan menjadi 4:3.
- Foto disimpan sebagai WebP atau AVIF, dengan fallback bila diperlukan.
- Foto asli tetap disimpan sebagai arsip terpisah.
- Nama file mengikuti slug, misalnya `kutilang-emas.webp`.
- Foto dimasukkan ke repositori, bukan hotlink langsung dari Google Drive, media sosial, atau situs pihak ketiga.
- Setiap foto wajib memiliki teks alternatif.

Aturan kredit dan lisensi:

- Foto anggota tim mencantumkan nama fotografer dan label “Dokumentasi Tim KKN Sarga Dharma”.
- Foto dari internet hanya boleh digunakan apabila lisensi atau izin penggunaannya jelas.
- Simpan nama fotografer/pemilik karya, halaman sumber asli, jenis lisensi, dan tanggal akses.
- Kredit foto ditampilkan pada halaman spesies; rincian lengkap juga dicantumkan pada halaman Referensi dan Kredit.
- Hindari foto tanpa pencipta yang dapat diidentifikasi atau foto yang hanya ditemukan melalui hasil pencarian gambar tanpa sumber asli.
- Apabila lisensi mewajibkan tautan atau atribusi tertentu, format tersebut harus dipertahankan.

Apabila foto belum tersedia, gunakan placeholder yang jelas selama pengembangan. Placeholder harus diganti sebelum rilis final.

---

## 12. Arsitektur Teknis

### Framework

Gunakan **Astro** dalam mode static output.

Alasan:

- Konten bersifat tetap dan terstruktur.
- Satu template dapat menghasilkan seluruh halaman spesies.
- HTML final dibuat saat proses build.
- JavaScript yang dikirim ke pengunjung dapat dibuat sangat sedikit.
- Data dapat divalidasi saat build sehingga bidang wajib yang hilang dapat diketahui sebelum situs diterbitkan.

### Penyimpanan konten

Gunakan satu berkas Markdown per spesies di dalam content collection.

```text
src/content/species/
├── flora/
│   ├── vanili.md
│   ├── cengkeh.md
│   └── ...
└── burung/
    ├── kutilang-emas.md
    ├── elang-ular-bido.md
    └── ...
```

### Struktur proyek yang direkomendasikan

```text
src/
├── components/
├── content/
├── layouts/
├── pages/
│   ├── index.astro
│   ├── flora/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── burung/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── tentang.astro
│   ├── referensi.astro
│   └── 404.astro
└── styles/

public/
├── images/flora/
├── images/burung/
└── logos/
```

---

## 13. Hosting dan Kepemilikan

### Rekomendasi utama: GitHub Pages

GitHub Pages paling sesuai untuk proyek ini karena situs sepenuhnya statis dan kode sudah akan disimpan di GitHub.

Keuntungan:

- Tidak memerlukan akun hosting tambahan.
- Tidak memerlukan server atau basis data.
- Deployment dapat dilakukan otomatis dengan GitHub Actions.
- Domain khusus dapat ditambahkan kemudian.
- Riwayat kode dan versi situs berada di satu tempat.

### Alternatif

- Cloudflare Pages apabila menginginkan antarmuka deployment terpisah dan alamat sementara `pages.dev`.
- Netlify apabila tim lebih nyaman dengan dashboard dan preview deployment Netlify.
- Vercel tetap dapat digunakan, tetapi tidak memberikan keuntungan khusus untuk situs statis sederhana ini.

### Kepemilikan akun

Repositori akan dimiliki oleh satu akun GitHub yang ditetapkan untuk proyek ini. Pendekatan ini memadai karena situs bersifat statis dan tidak membutuhkan pengelolaan rutin.

Ketentuan minimum:

- Kredensial dan metode pemulihan akun harus disimpan dengan aman.
- Akun tidak boleh menggunakan alamat surel yang akan segera dinonaktifkan.
- Repositori harus memiliki README berisi langkah build, deployment, penggantian foto, dan pemulihan situs.
- Salinan cadangan repositori dan konten final diserahkan bersama hasil KKN.

---

## 14. Domain

Situs dapat diluncurkan menggunakan domain bawaan hosting terlebih dahulu dan domain khusus dapat dipasang kemudian.

Namun, sebelum kode QR fisik dicetak:

- Tentukan domain final.
- Pastikan seluruh slug final.
- Uji setiap URL produksi.
- Jangan mengubah URL setelah papan dipasang.

Subdomain yang dapat dipertimbangkan:

```text
katalog.curugsiluwok.id
flora-burung.sidoharjo.desa.id
jelajahhayati.sidoharjo.desa.id
```

Nama sebenarnya harus mengikuti domain yang dimiliki atau disetujui pihak desa.

---

## 15. Footer dan Identitas

Footer direkomendasikan menggunakan susunan berikut:

> Katalog Flora dan Burung Curug Siluwok, Desa Sidoharjo  
> Dikembangkan oleh Tim KKN Sarga Dharma, KKN-PPM Universitas Gadjah Mada.

Logo yang ditampilkan:

- Logo Tim KKN Sarga Dharma.
- Logo Universitas Gadjah Mada.
- Logo KKN-PPM UGM.
- Logo Desa Sidoharjo apabila tersedia dan diizinkan.

Logo tidak perlu muncul besar pada setiap halaman. Logo dapat ditempatkan secara proporsional pada footer dan halaman Tentang.

---

## 16. Audit Konten Sebelum Implementasi

Walaupun daftar telah disusun oleh mahasiswa biologi, diperlukan satu pemeriksaan akhir untuk konsistensi data sebelum konten dimasukkan ke situs.

Hal yang harus diperiksa:

- Penulisan nama ilmiah dan author citation.
- Konsistensi nama Indonesia sebagai judul utama.
- Famili, genus, dan urutan taksonomi.
- Perbedaan antara status IUCN dan status CITES.
- Singkatan status konservasi.
- Tahun dan sumber penilaian.
- Referensi lengkap dari sitasi singkat yang sudah dicantumkan.
- Klaim manfaat kesehatan agar tidak terdengar sebagai saran medis.
- Ejaan, kapitalisasi, tanda baca, dan satuan ukuran.

Setelah pemeriksaan, konten harus dibekukan sebelum pembuatan QR final.

---

## 17. Kriteria Penerimaan

Situs dinyatakan siap rilis apabila:

- Terdapat tepat 19 halaman flora dan 11 halaman burung yang disetujui.
- Semua kartu membuka halaman yang benar.
- Semua halaman dapat dibuka langsung melalui URL.
- Pencarian bekerja untuk nama Indonesia dan nama ilmiah.
- Semua foto final, teks alternatif, dan kredit foto tersedia.
- Tidak ada status `-` yang ditampilkan kepada pengunjung.
- Semua sumber dan kredit telah dimasukkan.
- Tampilan bekerja mulai lebar 320 piksel.
- Tidak ada horizontal scrolling pada perangkat seluler.
- Gambar telah dioptimalkan.
- Halaman 404 berfungsi.
- Lighthouse diuji untuk performa, aksesibilitas, SEO, dan best practices.
- Repositori dan akun hosting telah diserahkan kepada pihak yang ditunjuk.
- Domain dan seluruh URL final telah diuji sebelum QR dibuat.

---

## 18. Tahapan Pengembangan

### Tahap 1 - Finalisasi konten

- Koreksi dan normalkan data dari dua PDF.
- Tentukan slug seluruh spesies.
- Kumpulkan referensi lengkap.
- Kumpulkan logo.
- Siapkan daftar kebutuhan foto.

### Tahap 2 - Desain

- Tentukan nama kerja situs.
- Buat wireframe beranda, kategori, dan detail.
- Tentukan warna dan tipografi.
- Buat desain responsif.

### Tahap 3 - Implementasi

- Membuat proyek Astro.
- Menyiapkan content collection dan validasi schema.
- Membuat komponen kartu dan halaman detail.
- Membuat pencarian client-side.
- Memasukkan 30 entri konten.

### Tahap 4 - Foto dan optimasi

- Mengganti placeholder dengan foto tim atau foto daring berlisensi yang telah disetujui.
- Menambahkan alt text, kredit fotografer, sumber, dan lisensi.
- Mengoptimalkan ukuran gambar.

### Tahap 5 - Pengujian dan deployment

- Pengujian seluler dan desktop.
- Pengujian jaringan lambat.
- Pengujian tautan dan metadata.
- Deployment GitHub Pages.
- Pengujian domain produksi.

### Tahap 6 - QR dan serah terima

- Mengunci URL.
- Menghasilkan QR untuk setiap spesies.
- Menguji QR pada beberapa perangkat.
- Menyerahkan repositori, akun, dokumentasi, dan arsip konten.

---

## 19. Keputusan Produk yang Telah Dikunci

- **Nama situs:** Katalog Flora dan Burung Curug Siluwok.
- **Lokasi dan cakupan:** Jalur menuju Curug Siluwok, Desa Sidoharjo.
- **Bahasa:** Bahasa Indonesia saja.
- **Kategori utama:** Flora dan Burung.
- **Pencarian:** Satu kolom pencarian pada masing-masing halaman kategori; tidak diperlukan pencarian global pada beranda.
- **Arah visual:** Natural, modern, sejuk, dan minimal; identitas desa dan jalur wisata menjadi fokus utama.
- **Hosting:** GitHub Pages dengan deployment otomatis dari repositori GitHub.
- **Kepemilikan:** Satu akun GitHub sebagai pemilik repositori.
- **Pemeliharaan:** Situs dirancang agar dapat berjalan tanpa pembaruan rutin atau panel admin.
- **Foto:** Kombinasi dokumentasi anggota tim dan foto daring yang mempunyai izin/lisensi jelas.
- **Atribusi foto:** Setiap foto menyediakan bidang fotografer/pemilik karya, sumber, dan lisensi.
- **Referensi:** Tersedia halaman Referensi dan Kredit serta sumber pada setiap halaman spesies.
- **Kredit pengembangan:** Ditempatkan secara proporsional pada footer dan halaman Tentang.

## 20. Bahan yang Masih Perlu Dikumpulkan

Bahan berikut merupakan kebutuhan implementasi, bukan keputusan produk yang belum selesai:

- Berkas logo Tim KKN Sarga Dharma, UGM, dan KKN-PPM UGM dalam kualitas baik.
- Foto final atau pilihan foto berlisensi untuk setiap spesies.
- Daftar referensi ilmiah lengkap dari sitasi yang digunakan pada dokumen konten.
- Nama akun GitHub yang akan menjadi pemilik repositori.
- Domain khusus, apabila kelak disediakan; situs dapat diluncurkan lebih dahulu melalui alamat GitHub Pages.
