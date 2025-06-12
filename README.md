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
---

## 📦 Dependencies

Berikut adalah library utama yang digunakan dalam proyek ini:

| Package                | Deskripsi                                                                 |
|------------------------|--------------------------------------------------------------------------|
| `@prisma/client`       | Client auto-generated dari Prisma untuk mengakses database secara efisien |
| `prisma`               | ORM (Object-Relational Mapping) untuk mengelola dan memigrasi database    |
| `express`              | Framework minimalis untuk membangun REST API dengan cepat                 |
| `bcrypt`               | Digunakan untuk mengenkripsi password sebelum disimpan ke database        |
| `dotenv`               | Mengelola variabel lingkungan dari file `.env`                            |
| `joi`                  | Library untuk validasi input data seperti form request body               |
| `jsonwebtoken`         | Digunakan untuk membuat dan memverifikasi JSON Web Tokens (JWT)           |
| `slugify`              | Mengubah string (seperti nama event) menjadi slug yang ramah URL         |
| `swagger`              | Tools untuk mendeskripsikan dan membangun dokumentasi API                 |
| `swagger-ui-express`   | Menyediakan tampilan antarmuka untuk dokumentasi Swagger di Express       |

Ikuti langkah berikut untuk menjalankan project ini secara lokal:

1. pastikan database dan server aktif
2. Buka terminal atau CMD di folder project ini
3. Jalankan perintah berikut:

```bash
npm install
npx prisma migrate dev
npm run seed
npm run start
