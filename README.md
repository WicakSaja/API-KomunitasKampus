# 📘 API Documentation

Dokumentasi ini menjelaskan endpoint REST API yang tersedia dalam aplikasi. Endpoint mencakup otentikasi, manajemen event, diskusi dan komentar.

---

## 🔐 Authentication

| Method | Endpoint         | Deskripsi                                                               |
|--------|------------------|-------------------------------------------------------------------------|
| POST   | `/auth/login`    | Melakukan autentikasi saat login dan menghasilkan token                |
| POST   | `/auth/register` | Melakukan autentikasi saat registrasi pengguna                         |

---

## 📅 Event

| Method | Endpoint         | Deskripsi                                                                 |
|--------|------------------|---------------------------------------------------------------------------|
| GET    | `/event`         | Mendapatkan semua event yang telah dibuat                                |
| POST   | `/event`         | Menambahkan event ke dalam database                                      |
| GET    | `/event/{id}`    | Mendapatkan event berdasarkan ID event                                   |
| PUT    | `/event/{id}`    | Mengupdate event berdasarkan ID event                                    |
| DELETE | `/event/{id}`    | Menghapus event berdasarkan ID event                                     |

---

## 💬 Discussion

| Method | Endpoint           | Deskripsi                                                                 |
|--------|--------------------|---------------------------------------------------------------------------|
| GET    | `/discussion/{id}` | Mendapatkan discussion berdasarkan ID                                     |
| POST   | `/discussion`      | Menambahkan discussion baru                                               |
| PUT    | `/discussion/{id}` | Mengupdate discussion berdasarkan ID                                      |
| DELETE | `/discussion`      | Menghapus semua discussion yang sudah ada                                 |
| DELETE | `/discussion/{id}` | Menghapus discussion berdasarkan ID                                       |

---

## 🗨️ Comment

| Method | Endpoint                          | Deskripsi                                                                 |
|--------|-----------------------------------|---------------------------------------------------------------------------|
| POST   | `/discussion/{id}/comment`        | Menambahkan comment ke discussion berdasarkan ID discussion               |
| DELETE | `/discussion/comment/{id}`        | Menghapus comment berdasarkan ID comment                                  |

---

## 🧠 Catatan

- Semua endpoint yang memodifikasi data (`POST`, `PUT`, `DELETE`) kemungkinan membutuhkan autentikasi (token).
- Gunakan `{id}` untuk mengganti dengan ID sebenarnya dari `event`, `discussion`, atau `comment`.

---

## 🚀 How to Run

Ikuti langkah berikut untuk menjalankan project ini secara lokal:

1. pastikan database dan server aktif
2. Buka terminal atau CMD di folder project ini
3. Jalankan perintah berikut:

```bash
npm install
npx prisma migrate dev
npm run seed
npm run start
