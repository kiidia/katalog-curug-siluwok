# Katalog Flora dan Burung Curug Siluwok

Situs web statis untuk katalog 19 flora dan 11 burung di jalur Curug Siluwok, Desa Sidoharjo.

## Isi paket

- Beranda dengan kategori Flora dan Burung
- 30 halaman spesies dengan URL terpisah
- Pencarian nama Indonesia dan nama ilmiah
- Halaman Tentang serta Referensi dan Kredit
- Desain responsif untuk telepon genggam
- Empat logo proyek yang telah dioptimalkan
- Foto flora dan burung yang telah dioptimalkan ke format WebP
- Tidak membutuhkan database, npm, atau proses build

## Cara mengunggah ke GitHub Pages

1. Ekstrak ZIP ini.
2. Buat repositori GitHub **public**, misalnya `katalog-curug-siluwok`.
3. Unggah seluruh isi folder ini ke akar repositori, bukan folder pembungkusnya saja.
4. Buka **Settings → Pages**.
5. Pada **Build and deployment**, pilih **Deploy from a branch**.
6. Pilih branch `main`, folder `/(root)`, lalu simpan.
7. Tunggu hingga alamat Pages muncul, biasanya berbentuk `https://username.github.io/katalog-curug-siluwok/`.

Semua tautan memakai jalur relatif sehingga situs dapat berjalan sebagai project site GitHub Pages maupun dipindahkan ke domain khusus di kemudian hari.

## Foto spesies

Setiap spesies memiliki gambar WebP di:

```text
assets/images/species/<slug>.webp
```

Contoh:

```text
assets/images/species/aren.webp
assets/images/species/kutilang-emas.webp
```

Foto yang diberikan tim sudah dimasukkan dan dikompresi. Apabila foto diganti kemudian, gunakan nama file WebP yang sama dan perbarui kredit pada halaman spesies, `data/species.json`, serta `referensi/index.html`. Rasio yang disarankan adalah 3:2 dengan ukuran sekitar 1200 × 800 piksel.

## Mengganti logo

Logo berada di:

```text
assets/images/logos/
```

Nama berkasnya:

- `logo-sidoharjo.png`
- `logo-sarga-dharma.png`
- `logo-ugm.png`
- `logo-kkn-ppm.png`

## Membuat kode QR

Tunggu sampai alamat GitHub Pages atau domain final aktif. Setelah itu gunakan URL halaman spesies, misalnya:

```text
https://username.github.io/katalog-curug-siluwok/flora/aren/
https://username.github.io/katalog-curug-siluwok/burung/kutilang-emas/
```

Jangan mengubah slug folder setelah QR dicetak.

## Domain khusus

Domain atau subdomain dapat ditambahkan kemudian melalui Settings → Pages. Sebelum mencetak QR permanen, lebih aman menetapkan domain final agar tautan tidak perlu diganti.

## Catatan publikasi

Sebelum situs diumumkan secara resmi:

- Pastikan seluruh foto dan kredit sudah disetujui untuk publikasi.
- Lakukan pemeriksaan terakhir nama ilmiah dan status konservasi.
- Uji semua halaman dan kode QR pada beberapa telepon genggam.

## Foto hero Curug Siluwok

Foto hero beranda sudah tersedia di:

```text
assets/images/site/curug-siluwok-hero.webp
```

Untuk menggantinya di kemudian hari, gunakan nama berkas yang sama. Foto sebaiknya berorientasi lanskap dan cukup lebar agar tetap baik pada layar desktop maupun telepon genggam.

## Memperbarui repositori yang sudah ada

Salin seluruh isi paket revisi ini ke folder repositori lokal dan izinkan penggantian berkas. Lalu jalankan:

```powershell
git add .
git commit -m "Tambahkan foto hero Curug Siluwok dan rapikan halaman referensi"
git push
```
