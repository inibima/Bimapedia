# Bimapedia

Bimapedia adalah aplikasi berbasis React yang menyediakan informasi tentang berbagai karakter dari video game populer. Aplikasi ini juga mendukung login dengan akun Google menggunakan Firebase Authentication.

## 🎯 Fitur

### Autentikasi Google:

Pengguna dapat login menggunakan akun Google.

### Kategori Artikel:

Artikel tentang karakter dari berbagai game dikategorikan berdasarkan franchise seperti:

- Devil May Cry
- Mobile Legends: Bang Bang
- God of War
- Resident Evil

### Navigasi Artikel:

Dukungan untuk melihat artikel berdasarkan kategori, dengan fitur pagination.

### Desain Dinamis: 

Dibangun menggunakan komponen React untuk pengalaman pengguna yang responsif.

---

## 🚀 Teknologi yang Digunakan

### - Frontend:

  React.js
  
### - Firebase:

  Firebase Authentication (untuk login dengan Google)
  Firebase Hosting (opsional, jika ingin di-deploy ke Firebase)
  
### - JavaScript:

  ES6+

---

## ⚙️ Konfigurasi Firebase

1. Buat proyek baru di Firebase Console.

2. Aktifkan metode login Google di menu Authentication > Sign-in method.

3. Tambahkan aplikasi Web ke proyek Firebase dan salin konfigurasi Firebase ke file firebaseConfig.js.

   Contoh firebaseConfig.js:

```
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
```

## 🛠️ Cara Menjalankan Proyek

### 1. Clone Repository:
```
git clone https://github.com/your-username/bimapedia.git
cd bimapedia
```
### 2. Install Dependensi:
```
npm install
```
### 3. Jalankan Aplikasi:
```
npm start
```
### 4. Buka di Browser:

Akses aplikasi di http://localhost:3000.
