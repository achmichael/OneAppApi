# Documentation One App API

API One App menggunakan berbagai komponen untuk membangun dan mengelola fungsionalitasnya. Berikut adalah deskripsi singkat dari setiap komponen beserta tautan untuk mempelajari lebih lanjut:

API One App menerapkan prinsip Clean Architecture yang bertujuan untuk menjaga keterpisahan antara berbagai komponen dalam sistem, memudahkan pengelolaan dan pemeliharaan kode, serta meningkatkan skalabilitas dan fleksibilitas aplikasi. Dalam implementasi Clean Architecture pada API One App, kami menggunakan beberapa komponen utama, yaitu **Entities**, **Gateways**, **Use Cases**, dan **Controllers**. Berikut ini adalah penjelasan mengenai implementasi setiap komponen tersebut:


## 1. Node.js
API ini menggunakan **Node.js**, sebuah runtime JavaScript yang berjalan di server. Node.js memungkinkan penggunaan JavaScript untuk pengembangan sisi server dan memiliki ekosistem npm yang kaya dengan berbagai pustaka dan tools.

- **Penjelasan**: [Node.js](https://nodejs.org/)
- **Link**: [Node.js Documentation](https://nodejs.org/en/docs/)

## 2. Sejarah JavaScript
**JavaScript** pertama kali dibuat oleh Brendan Eich pada tahun 1995 selama bekerja di Netscape Communications Corporation. Awalnya dinamai Mocha, kemudian diganti menjadi LiveScript, dan akhirnya dinamakan JavaScript. Bahasa ini awalnya dirancang untuk membuat halaman web lebih dinamis dan interaktif. Sejak saat itu, JavaScript telah berkembang menjadi bahasa pemrograman utama di web, digunakan baik di sisi klien maupun server.

- **Penjelasan**: [Sejarah JavaScript](https://en.wikipedia.org/wiki/JavaScript#History)
- **Link**: [JavaScript History on Wikipedia](https://en.wikipedia.org/wiki/JavaScript#History)

## 3. Struktur Clean Architecture

Prinsip Clean Architecture membagi sistem menjadi beberapa lapisan dengan tanggung jawab yang jelas. Berikut adalah komponen yang digunakan dalam API One App:

### 3.1 Entities
Entities adalah objek bisnis yang mewakili data dan aturan logika bisnis utama dalam aplikasi. Mereka independen terhadap teknologi yang digunakan dan fokus pada aturan-aturan bisnis yang berlaku.

### 3.2 Gateways
Gateways adalah antarmuka yang menghubungkan aplikasi dengan layanan atau sumber daya eksternal seperti database, API eksternal, dan sistem I/O lainnya. Gateways memastikan bahwa lapisan Use Cases tidak terikat dengan detail implementasi layanan eksternal.

### 3.3 Use Cases
Use Cases berfungsi sebagai aplikasi spesifik logika bisnis yang mengorchestrasi interaksi antara Entities dan Gateways. Mereka bertanggung jawab untuk memproses permintaan dari Controllers dan memastikan bahwa aturan bisnis dijalankan dengan benar.

### 3.4 Controllers
Controllers menerima input dari pengguna atau klien, memprosesnya melalui Use Cases yang sesuai, dan mengembalikan respon yang sesuai. Controllers bertanggung jawab untuk menangani request dan response serta berinteraksi dengan lapisan Use Cases.

## 4. Penggunaan Express.js
API ini menggunakan **Express.js**, sebuah framework aplikasi web untuk Node.js yang minimalis dan fleksibel. Dalam Clean Architecture, Express.js digunakan untuk mengelola routing, middleware, dan pengelolaan request/response dalam lapisan Controllers.

- **Penjelasan**: [Express.js](https://expressjs.com/)
- **Link**: [Express.js Documentation](https://expressjs.com/en/starter/installing.html)

## 5. Prisma ORM
API ini menggunakan **Prisma**, sebuah ORM (Object-Relational Mapping) modern untuk Node.js dan TypeScript. Prisma mempermudah interaksi dengan database dan ditempatkan di lapisan Gateways. Prisma menyediakan tipe yang aman, auto-completion, dan migrasi database.

- **Penjelasan**: [Prisma](https://www.prisma.io/)
- **Link**: [Prisma Documentation](https://www.prisma.io/docs/)

## 6. JSON Web Token (JWT)
API ini menggunakan **JSON Web Token (JWT)** untuk autentikasi dan otorisasi pengguna. JWT berada di lapisan Gateways dan digunakan untuk pertukaran informasi autentikasi yang aman antara dua pihak.

- **Penjelasan**: [JWT](https://jwt.io/introduction)
- **Link**: [JWT Introduction](https://jwt.io/introduction)

## 7. Bcrypt
API ini menggunakan **Bcrypt** untuk hashing password. Bcrypt berada di lapisan Gateways dan menyediakan algoritma hashing yang aman untuk pengelolaan password.

- **Penjelasan**: [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt)
- **Link**: [Bcrypt on npm](https://www.npmjs.com/package/bcrypt)

## 8. Struktur API dan Router
API One App menggunakan beberapa router untuk mengelola berbagai aspek aplikasi. Setiap router bertanggung jawab untuk menangani request yang spesifik dan meneruskannya ke lapisan Use Cases untuk diproses lebih lanjut.

### 8.1 Auth Router
Auth Router memiliki endpoint untuk registrasi dan login pengguna serta mitra.

- **User Sign-Up**: `POST /register/users`
- **Partner Sign-Up**: `POST /register/partners`
- **Login**: `POST /auth/login`

### 8.2 Profile Router
Profile Router menyediakan endpoint untuk mengelola profil pengguna.

- **Get Profile**: `GET /profile`
- **Update Profile**: `PUT /profile`
- **Create Profile**: `POST /profile`
- **Delete Profile**: `DELETE /profile`
- **Get Profile by User ID**: `GET /:user_id/profile`

### 8.3 Data User Router
Data User Router mencakup endpoint untuk mengelola data pengguna.

- **Get Users**: `GET /datas/users`
- **Get User by ID**: `GET /datas/users/:user_id`
- **Update User**: `PUT /datas/users/:user_id`
- **Delete User**: `DELETE /datas/users/:user_id`

### 8.4 Data Partner Router
Data Partner Router memiliki endpoint untuk mengelola data mitra bisnis.

- **Get Partners**: `GET /datas/partners`
- **Get Partner by ID**: `GET /datas/partners/:partner_id`
- **Update Partner**: `PUT /datas/partners/:partner_id`
- **Delete Partner**: `DELETE /datas/partners/:partner_id`

### 8.5 Location Partner Router
Location Partner Router mencakup endpoint untuk mengelola lokasi mitra.

- **Get Partner Locations**: `GET /partners/locations`
- **Get Nearby Partner Locations**: `GET /partners/locations/nearby`

### 8.6 Location Mapping Router
Location Mapping Router mencakup endpoint untuk mengelola lokasi drop-off.

- **Get Drop-off Locations**: `GET /dropoff-locations`
- **Add Drop-off Location**: `POST /locations`
- **Get Drop-off Location by ID**: `GET /dropoff-locations/:location_id/location`
- **Update Drop-off Location**: `PUT /dropoff-locations/:location_id/location`
- **Delete Drop-off Location**: `DELETE /api/dropoff-locations/:location_id/location`

### 8.7 Transportation Router
Transportation Router mencakup endpoint untuk mengelola transportasi.

- **Pick Destination**: `POST /transportation/pick-destination`

### 8.8 Tourism Router
Tourism Router mencakup endpoint untuk mengelola data pariwisata.

- **Get Tourisms**: `GET /datas/tourisms`
- **Get Tourism by ID**: `GET /datas/tourisms/:tourism_id`
- **Add Tourism**: `POST /datas/tourisms`

### 8.9 Food Router
Food Router mencakup endpoint untuk mengelola data makanan.

- **Get Foods**: `GET /datas/foods`
- **Get Food by ID**: `GET /datas/foods/:food_id`
- **Add Food**: `POST /datas/foods`

#### BASE URL : `localhost:3000/api`

## 1. Auth Router

- ### User Sign-Up

- **METHOD** : `POST`
- **ENDPOINT** : `/auth/users/register`
- **Content-Type**: `application/json`

  - **_`Request Body`_**

    ```json
    {
      "email": "example@gmail.com",
      "password": "Password*123",
      "name": "jhonDoe",
      "dateOfBirth": "2024-09-16"
    }
    ```

  - **_`Response`_**

  - **_`Status 200 : OK`_**
    ```json
    {
      "message": "User registered successfully",
      "data": {
        "id": 1,
        "name": "jhonDoe",
        "email": "example@gmail.com",
        "dateOfBirth": "2024-09-16"
      }
    }
    ```

- ### User Login

- **METHOD** : `POST`

- **ENDPOINT** : `/auth/login`

- **Content-Type**: `application/json`

  - **_`Request Body`_**

    ```json
    {
      "email": "example@gmail.com",
      "password": "Password*123"
    }
    ```

  - **_`Response`_**

  - **_`Status 200 : OK`_**
    ```json
    {
      "message": "login successfully",
      "token": "Bearer Token",
      "role" : "user"
    }
    ```

- ### Partner Sign-Up

- **METHOD** : `POST`

- **ENDPOINT** : `/auth/partners/register`

- **Content-Type**: `application/json`

  - **_`Request Body`_**

    ```json
    {
      "businessName": "example",
      "email": "example@gmail.com",
      "password": "Password#123",
      "type": "Food And Drink",
      "location": "https/maps.example.com"
    }
    ```

  - **_`Response`_**

  - **_`Status 200 : OK`_**

  - **Content-Type**: `application/json`
    ```json
    {
      "message": "Partner registered successfully",
      "data": {
        "businessName": "example",
        "email": "example@gmail.com",
        "type": "Food And Drink",
        "location": "https/maps.example.com"
      }
    }
    ```

- ### Partner Login

- **METHOD** : `POST`

- **ENDPOINT** : `/auth/login`

- **Content-Type**: `application/json`

  - **_`Request Body`_**

    ```json
    {
      "email": "example@gmail.com",
      "password": "Password*123"
    }
    ```

  - **_`Response`_**

  - **_`Status 200 : OK`_**
    ```json
    {
      "message": "login successfully",
      "token": "Bearer Token",
      "role" : "partner"
    }
    ```

## 2. Profile Router

- ### Pada endpoint ini client bisa mendapatkan data profile user tanpa menggunakan parameter UserId, dikarenakan UserId sudah menjadi payload dari token yang diberikan pada request headers, namun jika client ingin menggunakan parameter untuk mendapatkan data profile User, itu juga bisa dilakukan dengan menggunakan Endpoint yang sudah saya sediakan di bagian bawah.

- ### User Profile
- **METHOD**: `GET`

- **ENDPOINT**: `/users/profile`

- **Content-Type**: `application/json`

  - **_`Headers:`_**

    ```json
    {
      "Authorization": "Bearer token"
    }
    ```

  - **_`Response:`_**
  - **_`Status 200 : OK`_**
    ```json
    {
      "data": {
        "id": 1,
        "userId": 1,
        "ProfilePicture": "http:/example.com",
        "phoneNumber": "0822321",
        "Address": "Malang",
        "createdAt": "2024-06-13T12:34:56.789Z",
        "updatedAt": "2024-06-13T12:34:56.789Z"
      }
    }
    ```

- **METHOD**: `PUT`

- **ENDPOINT**: `/users/profile`

- **Content-Type**: `application/json`

  ### **- Mengubah / Mengupdate / Mengedit Data Profile User**

  - **_`Headers`_**

    ```json
    {
      "Authorization": "Bearer token"
    }
    ```

  - **_`Request Body`_**
    ```json
    {
      "profilePicture": "https/example.com",
      "phoneNumber": "08213943",
      "address": "Malang"
    }
    ```
  - **_`Response`_**
  - **_`Status 200 : OK`_**
    ```json
    {
      "message": "Profile updated successfully"
    }
    ```

- **METHOD**: `POST`

- **ENDPOINT**: `/users/profile`
- **Content-Type**: `application/json`

  ### **- Endpoint ini digunakan untuk membuat data profile user**

  - **_`Request Body`_**

    ```json
    {
      "profilePicture": "https/example.com",
      "phoneNumber": "08213943",
      "address": "Kota Pasuruan"
    }
    ```

  ### **- Jika pada Endpoint ini tidak diberikan sebuah request body, maka nilai dari fields diatas akan menjadi null.**

  - **_`Response`_**

  - **_`Status 200 : OK`_**

    ```json
    {
      "message ": "Created User Profile Successfully"
    }
    ```
- **METHOD**: `DELETE`

- **ENDPOINT**: `/users/profile`

- **Content-Type**: `application/json`

  ### **- Menghapus Data Profile tidak memerlukan userId, karena sudah mendapatkan userId dari token**

  - **_`Response`_**

  - **_`Status 200 : OK`_**
    ```json
    {
      "message": "Profile Delete successfully"
    }
    ```
- **METHOD**: `GET`

- **ENDPOINT**: `/users/:user_id/profile`
- **Content-Type**: `application/json`

  ### **- Mengambil Data Profile User Berdasarkan User Id**

  - **_`Response:`_**

  - **_`Status 200 : OK`_**
    ```json
    {
      "data": {
        "id": 1,
        "userId": 1,
        "ProfilePicture": "http:/example.com",
        "phoneNumber": "0822321",
        "Address": "Malang",
        "createdAt": "2024-06-13T12:34:56.789Z",
        "updatedAt": "2024-06-13T12:34:56.789Z"
      }
    }
    ```
- **METHOD**: `PUT`

- **ENDPOINT**: `/users/:user_id/profile`

- **Content-Type**: `application/json`

  ### **- Mengupdate / Mengedit / Mengubah Data Profile User Berdasarkan User Id**

  - **_`Request Body`_**

    ```json
    {
      "profilePicture": "https/example.com",
      "phoneNumber": "08213943",
      "address": "Malang"
    }
    ```

  - **_`Response`_**

  - **_`Status 200 : OK`_**

    ```json
    {
      "message": "Profile updated successfully"
    }
    ```

- **METHOD**: `DELETE`

- **ENDPOINT**: `/users/:user_id/profile`

- **Content-Type**: `application/json`

  ### **- Menghapus Data Profile User Berdasarkan User Id**

  - **_`Response`_**

  - **_`Status 200 : OK`_**
    ```json
    {
      "message": "Profile Delete successfully"
    }
    ```

### 3. Data User Router

- **METHOD**: `GET`

- **ENDPOINT**: `/datas/users`

- **Content-Type**: `application/json`

  - **_`Response:`_**

  - **_`Status 200 : OK`_**

    ```json
    [
      {
        "name": "Michael",
        "email": "michael@gmail.com",
        "dateOfBirth": "2006-07-10",
        "points": 0,
        "latitude": -7.95093555801852,
        "longitude": 112.6078382488623,
        "createdAt": "2024-06-14T01:26:51.179Z",
        "updatedAt": "2024-06-14T01:26:51.179Z"
      },
      {
        "name": "Jhon Doe",
        "email": "jhondoe@gmail.com",
        "dateOfBirth": null,
        "points": 0,
        "latitude": -7.940614052415847,
        "longitude": 112.6438082180602,
        "createdAt": "2024-06-14T02:16:45.923Z",
        "updatedAt": "2024-06-14T02:16:45.923Z"
      }
    ]
    ```

- **METHOD**: `GET`

- **ENDPOINT**: `/datas/users/:user_id`

- **Content-Type**: `application/json`

  ### **- Endpoint ini memerlukan parameter userId**

  - **_`Response:`_**
  - **_`Status 200 : OK`_**

    ```json
    {
      "id": 1,
      "email": "example@gmail.com",
      "name": "John Doe",
      "dateOfBirth": "1990-01-01",
      "points": 100,
      "createdAt": "2024-06-13T12:34:56.789Z",
      "updatedAt": "2024-06-13T12:34:56.789Z"
    }
    ```

- **METHOD**: `PUT`

- **ENDPOINT**: `/datas/users/:user_id`

- **Content-Type**: `application/json`

  ### **- Endpoint ini memerlukan parameter userId**

  - **_`Request Body:`_**

    ```json
    {
      "email": "example@gmail.com",
      "password": "Password*123",
      "name": "jhonDoe",
      "dateOfBirth": "2024-09-16"
    }
    ```

  - **_`Response:`_**
  - **_`Status 200 : OK`_**

    ```json
    {
      "message": "Update User Successfully",
      "data": {
        "id": 1,
        "email": "example@gmail.com",
        "name": "John Doe",
        "dateOfBirth": "1990-01-01",
        "points": 100,
        "createdAt": "2024-06-13T12:34:56.789Z",
        "updatedAt": "2024-06-13T12:34:56.789Z"
      }
    }
    ```

- **METHOD**: `DELETE`

- **ENDPOINT**: `/datas/users/:user_id`

- **Content-Type**: `application/json`

  ### **- Endpoint ini memerlukan parameter userId**

  - **_`Response:`_**

  - **_`Status 200 : OK`_**

      ```json
      {
        "message": "Delete User Successfully"
      }
      ```

### 4. Data Partner Router

- **METHOD**: `GET`

- **ENDPOINT**: `/datas/partners`

- **Content-Type**: `application/json`

  - **_`Response:`_**

  - **_`Status 200 : OK`_**

    ```json
    [
      {
        "id": 1,
        "businessName": "Example Business",
        "email": "aldjas@example.com",
        "location": "https://maps.app.goo.gl/qx6F2Fyv9XXMusjj8",
        "latitude": null,
        "longitude": null
      },
      {
        "id": 2,
        "businessName": "Coffe Business",
        "email": "CakrilKopi@gmail.com",
        "location": "https://maps.app.goo.gl/qx6F2Fyv9XXMusjj8",
        "latitude": -7.952124956143797,
        "longitude": 112.6063577795916
      },
      {
        "id": 3,
        "businessName": "Coffe Business",
        "email": "BentoKopi@gmail.com",
        "location": "https://maps.app.goo.gl/G1AkKvA6XmXq3TdB9",
        "latitude": -7.950528760705288,
        "longitude": 112.6063649605045
      },
      {
        "id": 4,
        "businessName": "Coffe Business",
        "email": "Koatkopi@gmail.com",
        "location": "https://maps.app.goo.gl/B4KXhNya3tYYTkML6",
        "latitude": -7.951035855285807,
        "longitude": 112.6064102200266
      },
      {
        "id": 5,
        "businessName": "Food Business",
        "email": "Warunglintang@gmail.com",
        "location": "https://maps.app.goo.gl/S4ZGJdEmRJAhNG2u5",
        "latitude": -7.940685548116643,
        "longitude": 112.6422773391983
      },
      {
        "id": 6,
        "businessName": "Food Business",
        "email": "Sukaasih@gmail.com",
        "location": "https://maps.app.goo.gl/J66KnYFsoPY1eAkh7",
        "latitude": -7.940480334137706,
        "longitude": 112.6425583005874
      }
    ]
    ```

- **METHOD**: `GET`

- **ENDPOINT**: `/datas/partners/:partner_id`

- **Content-Type**: `application/json`

  - **_`Response:`_**

  - **_`Status 200 : OK`_**

    ```json
    {
      "id": 2,
      "businessName": "Coffe Business",
      "email": "CakrilKopi@gmail.com",
      "location": "https://maps.app.goo.gl/qx6F2Fyv9XXMusjj8",
      "latitude": -7.952124956143797,
      "longitude": 112.6063577795916
    }
    ```

- **METHOD**: `PUT`

- **ENDPOINT**: `/datas/partners/:partner_id`

- **Content-Type**: `application/json`

  - **_`Response:`_**

  - **_`Status 200 : OK`_**

    ```json
    {
      "message": "Partner updated successfully",
      "data": {
        "id": 2,
        "businessName": "Coffe Business",
        "email": "CakrilKopi@gmail.com",
        "location": "https://maps.app.goo.gl/qx6F2Fyv9XXMusjj8",
        "latitude": -7.952124956143797,
        "longitude": 112.6063577795916
      }
    }
    ```

- **METHOD**: `DELETE`

- **ENDPOINT**: `/datas/partners/:partner_id`

- **Content-Type**: `application/json`

  - **_`Response:`_**

  - **_`Status 200 : OK`_**

    ```json
    {
      "message": "Partner deleted successfully"
    }
    ```

### 5. Location Partner Router

- **METHOD**: `GET`

- **ENDPOINT**: `/partners/locations`

- **Content-Type**: `application/json`

  ### **- Mendapatkan lokasi mitra**

  - **_`Response:`_**

  - **_`Status 200 : OK`_**

    ```json
    {
      "location": [
        {
          "email": "aldjas@example.com",
          "businessName": "Example Business",
          "location": "https://maps.app.goo.gl/qx6F2Fyv9XXMusjj8"
        },
        {
          "email": "CakrilKopi@gmail.com",
          "businessName": "Coffe Business",
          "location": "https://maps.app.goo.gl/qx6F2Fyv9XXMusjj8"
        },
        {
          "email": "BentoKopi@gmail.com",
          "businessName": "Coffe Business",
          "location": "https://maps.app.goo.gl/G1AkKvA6XmXq3TdB9"
        },
        {
          "email": "Koatkopi@gmail.com",
          "businessName": "Coffe Business",
          "location": "https://maps.app.goo.gl/B4KXhNya3tYYTkML6"
        },
        {
          "email": "Warunglintang@gmail.com",
          "businessName": "Food Business",
          "location": "https://maps.app.goo.gl/S4ZGJdEmRJAhNG2u5"
        },
        {
          "email": "Sukaasih@gmail.com",
          "businessName": "Food Business",
          "location": "https://maps.app.goo.gl/J66KnYFsoPY1eAkh7"
        }
      ]
    }
    ```

- **METHOD**: `GET`

- **ENDPOINT**: `/partners/locations/nearby`

- **Content-Type**: `application/json`

  ### **- Mendapatkan lokasi mitra terdekat berdasarkan dari posisi User**

  ### **- Response dibawah ini diurutkan berdasarkan jarak mitra terdekat dari lokasi user berada**

  - **_`Response:`_**

  - **_`Status 200 : OK`_**


    ```json
    [
      {
        "distance": 0.13845260638182874,
        "businessName": "Food Business",
        "location": "https://maps.app.goo.gl/J66KnYFsoPY1eAkh7",
        "email": "Sukaasih@gmail.com"
      },
      {
        "distance": 0.16878111946614194,
        "businessName": "Food Business",
        "location": "https://maps.app.goo.gl/S4ZGJdEmRJAhNG2u5",
        "email": "Warunglintang@gmail.com"
      },
      {
        "distance": 4.268363738031528,
        "businessName": "Coffe Business",
        "location": "https://maps.app.goo.gl/G1AkKvA6XmXq3TdB9",
        "email": "BentoKopi@gmail.com"
      },
      {
        "distance": 4.278473364629883,
        "businessName": "Coffe Business",
        "location": "https://maps.app.goo.gl/B4KXhNya3tYYTkML6",
        "email": "Koatkopi@gmail.com"
      },
      {
        "distance": 4.3183605922352895,
        "businessName": "Coffe Business",
        "location": "https://maps.app.goo.gl/qx6F2Fyv9XXMusjj8",
        "email": "CakrilKopi@gmail.com"
      }
    ]
    ```

### 6. Location Mapping Router

- **METHOD**: `GET`
- **ENDPOINT**: `/dropoff-locations`

  ### **- Endpoint ini digunakan untuk mendapatkan data lokasi dari tempat donasi sampah plastik.**

  - **`Response`**

    ```json
    [
      {
        "id": 1,
        "name": "Universitas Brawijaya",
        "address": "Jl. Veteran, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
        "latitude": -7.952305607160593,
        "longitude": 112.6145353022933,
        "url": "https://maps.app.goo.gl/PVnXGUJrSq4YNfk56",
        "qrCode": "https://example.com/qr/universitas-brawijaya",
        "createdAt": "2024-06-15T06:17:32.255Z",
        "updatedAt": "2024-06-15T06:17:32.255Z"
      },
      {
        "id": 2,
        "name": "Kopi Tuku",
        "address": "Jl. Jombang No.27, RT.012/RW./003, Gading Kasri, Kec. Klojen, Kota Malang, Jawa Timur 65115",
        "latitude": -7.967001660099939,
        "longitude": 112.6160224335194,
        "url": "https://maps.app.goo.gl/R5fhwLfL8vrHAK3r8",
        "qrCode": "https://example.com/qr/kopi-tuku",
        "createdAt": "2024-06-15T06:17:32.255Z",
        "updatedAt": "2024-06-15T06:17:32.255Z"
      },
      {
        "id": 3,
        "name": "Tomorro Coffe",
        "address": "Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur",
        "latitude": -7.943016460842368,
        "longitude": 112.6215895823627,
        "url": "https://www.google.com/maps?q=-7.951394,112.607137",
        "qrCode": "https://example.com/qr/tomorro-coffee",
        "createdAt": "2024-06-15T06:17:32.255Z",
        "updatedAt": "2024-06-15T06:17:32.255Z"
      },
      {
        "id": 4,
        "name": "Tri Surya Waste Company (TSWC)",
        "address": "Jl. Mujamil No.122 A, Karanglo, Banjararum, Kec. Singosari, Kabupaten Malang, Jawa Timur 65153",
        "latitude": -7.913724337865346,
        "longitude": 112.6704367577048,
        "url": "https://www.google.com/maps?q=-7.957563,112.615238",
        "qrCode": "https://example.com/qr/tri-surya-waste-company",
        "createdAt": "2024-06-15T06:17:32.255Z",
        "updatedAt": "2024-06-15T06:17:32.255Z"
      },
      {
        "id": 5,
        "name": "Universitas Brawijaya",
        "address": "Jl. Veteran, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
        "latitude": -7.952305607160593,
        "longitude": 112.6145353022933,
        "url": "https://maps.app.goo.gl/PVnXGUJrSq4YNfk56",
        "qrCode": "https://example.com/qr/universitas-brawijaya",
        "createdAt": "2024-06-15T06:31:21.666Z",
        "updatedAt": "2024-06-15T06:31:21.666Z"
      },
      {
        "id": 6,
        "name": "Kopi Tuku",
        "address": "Jl. Jombang No.27, RT.012/RW./003, Gading Kasri, Kec. Klojen, Kota Malang, Jawa Timur 65115",
        "latitude": -7.967001660099939,
        "longitude": 112.6160224335194,
        "url": "https://maps.app.goo.gl/R5fhwLfL8vrHAK3r8",
        "qrCode": "https://example.com/qr/kopi-tuku",
        "createdAt": "2024-06-15T06:31:21.666Z",
        "updatedAt": "2024-06-15T06:31:21.666Z"
      },
      {
        "id": 7,
        "name": "Tomorro Coffe",
        "address": "Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur",
        "latitude": -7.943016460842368,
        "longitude": 112.6215895823627,
        "url": "https://www.google.com/maps?q=-7.951394,112.607137",
        "qrCode": "https://example.com/qr/tomorro-coffee",
        "createdAt": "2024-06-15T06:31:21.666Z",
        "updatedAt": "2024-06-15T06:31:21.666Z"
      },
      {
        "id": 8,
        "name": "Tri Surya Waste Company (TSWC)",
        "address": "Jl. Mujamil No.122 A, Karanglo, Banjararum, Kec. Singosari, Kabupaten Malang, Jawa Timur 65153",
        "latitude": -7.913724337865346,
        "longitude": 112.6704367577048,
        "url": "https://www.google.com/maps?q=-7.957563,112.615238",
        "qrCode": "https://example.com/qr/tri-surya-waste-company",
        "createdAt": "2024-06-15T06:31:21.666Z",
        "updatedAt": "2024-06-15T06:31:21.666Z"
      }
    ]
    ```

- **METHOD**: `POST`
- **ENDPOINT**: `/dropoff-locations`

  ### **- Endpoint ini digunakan untuk menambahkan data lokasi untuk tempat donasi sampah plastik.**

  - **`Request Body`**

    ```json
    {
      "name": "Central Park Drop-Off",
      "address": "123 Central Park, New York, NY 10001",
      "latitude": 40.785091,
      "longitude": -73.968285,
      "qrCode": "https://example.com/qrcode/centralpark"
    }
    ```

  - **_`Response`_**
  - **_`Status 200 : OK`_**
    ```json
    {
      "message": "Add location Successfully",
      "data": {
        "id": 1,
        "name": "Central Park Drop-Off",
        "address": "123 Central Park, New York, NY 10001",
        "latitude": 40.785091,
        "longitude": -73.968285,
        "qrCode": "https://example.com/qrcode/centralpark",
        "createdAt": "2024-06-13T12:34:56.789Z",
        "updatedAt": "2024-06-13T12:34:56.789Z"
      }
    }
    ```
- **METHOD**: `GET`

- **ENDPOINT**: `/dropoff-locations/:location_id/location`

  ### **- Endpoint ini digunakan untuk mendapatkan data lokasi dari tempat donasi sampah plastik.**

  - **_`Response`_**

  - **_`Status 200 : OK`_**

    ```json
      {
        "id": 1,
        "name": "Universitas Brawijaya",
        "address": "Jl. Veteran, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
        "latitude": -7.952305607160593,
        "longitude": 112.6145353022933,
        "url": "https://maps.app.goo.gl/PVnXGUJrSq4YNfk56",
        "qrCode": "https://example.com/qr/universitas-brawijaya",
        "createdAt": "2024-06-15T06:17:32.255Z",
        "updatedAt": "2024-06-15T06:17:32.255Z"
      }
    ```
- **METHOD**: `PUT`

- **ENDPOINT**: `/dropoff-locations/:location_id/location`

  ### **- Endpoint ini digunakan untuk mengupdate data lokasi dari tempat donasi sampah plastik berdasarkan location id.**

  - **`Request Body`**

    ```json
    {
      "name": "Central Park Drop-Off",
      "address": "123 Central Park, New York, NY 10001",
      "latitude": 40.785091,
      "longitude": -73.968285,
      "qrCode": "https://example.com/qrcode/centralpark"
    }
    ```

  - **_`Response`_**

  - **_`Status 200 : OK`_**

    ```json
    {
      "message" : "Location Updated Successfully",
      "location" : {
        "id": 1,
        "name": "Central Park Drop-Off",
        "address": "123 Central Park, New York, NY 10001",
        "latitude": 40.785091,
        "longitude": -73.968285,
        "qrCode": "https://example.com/qrcode/centralpark",
        "createdAt": "2024-06-13T12:34:56.789Z",
        "updatedAt": "2024-06-13T12:34:56.789Z" 
        }
    }
    ```
- **METHOD**: `DELETE`

- **ENDPOINT**: `/dropoff-locations/:location_id/location`

  ### **- Endpoint ini digunakan untuk menghapus data lokasi dari tempat donasi sampah plastik.**

  - **_`Response`_**

  - **_`Status 200 : OK`_**
    ```json
    {
      "message" : "Location deleted successfully"
    }
    ```
### 7. Transportation Router

- **METHOD**: `POST`

- **ENDPOINT**: `/transportation/pick-destination`

### **- Endpoint ini digunakna untuk mengukur jarak user dengan tujuan user, dan juga menentukan harga dari per KM yang ditempuh oleh user**
### **- Request Body merupakan data koordinat dari tujuan user, maka akan diukur dengan posisi koordinat user berada**

  - **`Request Body`**

    ```json
    {
      "latitude": -7.952124956143797,
      "longitude": 112.6063577795916,
    }
    ```
  - **_`Response`_**

  - **_`Status 200 : OK`_**

    ```json
    {
      "distance": 0.20993512716462176,
      "fare": "Rp 1.050,00"
    }
    ```

### 8.Tourism Router
- **METHOD**: `GET`

- **ENDPOINT**: `/datas/tourisms`

  ### **- Endpoint ini digunakan untuk mendapatkan data lokasi dari tempat pariwisata.**

  - **_`Response`_**

  - **_`Status 200 : OK`_**

  ```json
  {
      [
    {
      "id": 1,
      "name": "Borobudur",
      "description": "Borobudur adalah candi Buddha terbesar di dunia dan salah satu monumen Buddha terbesar di dunia. Terletak di Magelang, Jawa Tengah.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/3/38/Borobudur-Nothwest-view.jpg",
      "rating": 4.8,
      "mapUrl": "https://goo.gl/maps/RKJmBStHY6F2"
    },
    {
      "id": 2,
      "name": "Tanah Lot",
      "description": "Tanah Lot adalah salah satu pura laut terkenal di Bali. Pemandangan matahari terbenam di Tanah Lot adalah salah satu yang terbaik di Bali.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/6/68/Bali_Indonesia_Tanah_Lot_Temple.jpg",
      "rating": 4.7,
      "mapUrl": "https://goo.gl/maps/6eZs9VdXVxJ2"
    },
    {
      "id": 3,
      "name": "Danau Toba",
      "description": "Danau Toba adalah danau vulkanik besar di Sumatra Utara. Danau ini adalah danau vulkanik terbesar di dunia dan salah satu danau terdalam.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/4/44/Danau_Toba.jpg",
      "rating": 4.6,
      "mapUrl": "https://goo.gl/maps/RqL5VZ5vLxt"
    },
    {
      "id": 4,
      "name": "Raja Ampat",
      "description": "Raja Ampat adalah kepulauan yang terkenal dengan keindahan bawah lautnya yang menakjubkan. Terletak di Papua Barat, tempat ini adalah surga bagi penyelam.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Raja_Ampat_Lagoon.jpg",
      "rating": 4.9,
      "mapUrl": "https://goo.gl/maps/xJZBv1QkgjL2"
    },
    {
      "id": 5,
      "name": "Gunung Bromo",
      "description": "Gunung Bromo adalah salah satu gunung berapi aktif di Jawa Timur. Tempat ini terkenal dengan pemandangan matahari terbit yang spektakuler.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/4/43/Mount_Bromo.jpg",
      "rating": 4.7,
      "mapUrl": "https://goo.gl/maps/bMNTZp1Z4E32"
    },
    {
      "id": 6,
      "name": "Ubud",
      "description": "Ubud adalah sebuah desa di Bali yang terkenal dengan seni dan budayanya. Tempat ini juga dikenal sebagai pusat meditasi dan yoga.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/3/33/Rice_terraces%2C_Ubud%2C_Bali.jpg",
      "rating": 4.6,
      "mapUrl": "https://goo.gl/maps/9Z4d4tEoWT72"
    },
    {
      "id": 7,
      "name": "Gili Trawangan",
      "description": "Gili Trawangan adalah salah satu dari tiga pulau Gili di Lombok. Pulau ini terkenal dengan pantai pasir putihnya dan suasana yang santai.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/4/44/Gili_Trawangan_Pier.jpg",
      "rating": 4.5,
      "mapUrl": "https://goo.gl/maps/Nb5u9p2VG6G2"
    },
    {
      "id": 8,
      "name": "Komodo Island",
      "description": "Pulau Komodo adalah rumah bagi Komodo, kadal terbesar di dunia. Pulau ini juga menawarkan pemandangan alam yang indah dan pantai berpasir merah muda.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/0/08/Komodo_dragon_on_Komodo_Island.jpg",
      "rating": 4.8,
      "mapUrl": "https://goo.gl/maps/8KqhP8RCs4o"
    },
    {
      "id": 9,
      "name": "Kawah Ijen",
      "description": "Kawah Ijen adalah gunung berapi aktif di Jawa Timur yang terkenal dengan danau asamnya dan fenomena api biru yang langka.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/3/34/Ijen_Crater.jpg",
      "rating": 4.7,
      "mapUrl": "https://goo.gl/maps/U7A1ZRQC63T2"
    },
    {
      "id": 10,
      "name": "Tana Toraja",
      "description": "Tana Toraja adalah daerah di Sulawesi Selatan yang terkenal dengan upacara kematian unik dan rumah adat Tongkonan.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Rantepao_Toraja.jpg",
      "rating": 4.6,
      "mapUrl": "https://goo.gl/maps/jhF5zS6wBdL2"
    }
    ]
  }
  ```
- **METHOD**: `GET`

- **ENDPOINT**: `/datas/tourisms/:tourism_id`

  ### **- Endpoint ini digunakan untuk mendapatkan data lokasi dari tempat pariwisata berdasarkan ID.**

  - **_`Response`_**

  - **_`Status 200 : OK`_** 
  ```json
  {
    "id": 1,
    "name": "Borobudur",
    "description": "Borobudur adalah candi Buddha terbesar di dunia dan salah satu monumen Buddha terbesar di dunia. Terletak di Magelang, Jawa Tengah.",
    "img": "https://upload.wikimedia.org/wikipedia/commons/3/38/Borobudur-Nothwest-view.jpg",
    "rating": 4.8,
    "mapUrl": "https://goo.gl/maps/RKJmBStHY6F2"
  }
  ```
- **METHOD**: `POST`

- **ENDPOINT**: `/datas/tourisms`

### **- Endpoint ini digunakan untuk menambahkan data lokasi pariwisata**
  - **`Request Body`**

    ```json
    {
      "name": "Borobudur",
      "description": "Borobudur adalah candi Buddha terbesar di dunia dan salah satu monumen Buddha terbesar di dunia. Terletak di Magelang, Jawa Tengah.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/3/38/Borobudur-Nothwest-view.jpg",
      "rating": 4.8,
      "mapUrl": "https://goo.gl/maps/RKJmBStHY6F2"
    }
    ```
  - **_`Response`_**

  - **_`Status 200 : OK`_**

    ```json
    {
      "message": "Tourism created successfully",
      "tourism": {
        "id": 11,
        "name": "Borobudur",
        "description": "Borobudur adalah candi Buddha terbesar di dunia dan salah satu monumen Buddha terbesar di dunia. Terletak di Magelang, Jawa Tengah.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/3/38/Borobudur-Nothwest-view.jpg",
        "rating": 4.8,
        "mapUrl": "https://goo.gl/maps/RKJmBStHY6F2"
      }
    }
    ```

### 9.Food Router

- **METHOD**: `GET`

- **ENDPOINT**: `/datas/foods`

  ### **- Endpoint ini digunakan untuk mendapatkan data makanan yang bisa di redeem menggunakan voucher.**

  - **_`Response`_**

  - **_`Status 200 : OK`_** 
  ```json
  {
  [
      {
        "id": 1,
        "name": "Nasi Goreng",
        "price": 50,
        "rating": 4.7,
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/62/Nasi_Goreng.jpg"
      },
      {
        "id": 2,
        "name": "Sate Ayam",
        "price": 40,
        "rating": 4.8,
        "img": "https://upload.wikimedia.org/wikipedia/commons/5/55/Sate_Ayam.jpg"
      },
      {
        "id": 3,
        "name": "Gado-Gado",
        "price": 30,
        "rating": 4.6,
        "img": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Gado_gado.jpg"
      },
      {
        "id": 4,
        "name": "Rendang",
        "price": 70,
        "rating": 4.9,
        "img": "https://upload.wikimedia.org/wikipedia/commons/8/85/Rendang_daging_sapi.JPG"
      },
      {
        "id": 5,
        "name": "Bakso",
        "price": 35,
        "rating": 4.5,
        "img": "https://upload.wikimedia.org/wikipedia/commons/1/14/Bakso_malang.jpg"
      },
      {
        "id": 6,
        "name": "Mie Goreng",
        "price": 40,
        "rating": 4.7,
        "img": "https://upload.wikimedia.org/wikipedia/commons/3/39/Mie_Goreng.jpg"
      },
      {
        "id": 7,
        "name": "Soto Ayam",
        "price": 45,
        "rating": 4.6,
        "img": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Soto_ayam_surabaya.jpg"
      },
      {
        "id": 8,
        "name": "Ayam Goreng",
        "price": 50,
        "rating": 4.8,
        "img": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ayam_goreng.jpg"
      },
      {
        "id": 9,
        "name": "Pempek",
        "price": 30,
        "rating": 4.7,
        "img": "https://upload.wikimedia.org/wikipedia/commons/7/79/Pempek.jpg"
      },
      {
        "id": 10,
        "name": "Nasi Uduk",
        "price": 35,
        "rating": 4.5,
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Nasi_Uduk.jpg"
      }
    ]
  }
  ```
- **METHOD**: `GET`

- **ENDPOINT**: `/datas/foods/:food_id`

  ### **- Endpoint ini digunakan untuk mendapatkan data lokasi dari tempat pariwisata berdasarkan ID.**

  - **_`Response`_**

  - **_`Status 200 : OK`_**
  ```json
    {
      "id": 1,
      "name": "Nasi Goreng",
      "price": 50,
      "rating": 4.7,
      "img": "https://upload.wikimedia.org/wikipedia/commons/6/62/Nasi_Goreng.jpg"
    }
  ```
- **METHOD**: `POST`

- **ENDPOINT**: `/datas/foods`

### **- Endpoint ini digunakan untuk menambahkan data makanan**

  - **`Request Body`**

    ```json
    {
      "name": "Nasi Goreng",
      "price": 50,
      "rating": 4.7,
      "img": "https://upload.wikimedia.org/wikipedia/commons/6/62/Nasi_Goreng.jpg"
    }
    ```
  - **_`Response`_**

  - **_`Status 200 : OK`_**

    ```json
    {
      "message": "Add Data Food Successfully",
      "data": {
        "id": 12,
        "name": "Nasi Goreng",
        "price": 50,
        "rating": 4.7,
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/62/Nasi_Goreng.jpg"
      }
    }
    ```     

# Daftar Kode Status Error HTTP

| Kode |  Deskripsi |
|------|------------|
| 200  | **OK**: Semuanya baik-baik saja. Permintaan berhasil diakomodasi. |
| 201  | **Created**: Permintaan berhasil dan sumber daya baru telah dibuat. |
| 204  | **No Content**: Permintaan berhasil, tetapi tidak ada konten untuk dikirimkan kembali. |
| 400  | **Bad Request**: Permintaan tidak dapat diproses karena kesalahan klien. |
| 401  | **Unauthorized**: Permintaan memerlukan autentikasi. Credensial mungkin hilang atau salah. |
| 403  | **Forbidden**: Klien tidak memiliki izin untuk akses sumber daya tersebut. |
| 404  | **Not Found**: Sumber daya yang diminta tidak ditemukan. |
| 405  | **Method Not Allowed**: Metode yang diminta tidak diizinkan untuk sumber daya ini. |
| 500  | **Internal Server Error**: Ada masalah dengan server, bukan kesalahan klien. |
| 502  | **Bad Gateway**: Server yang bertindak sebagai gateway tidak mendapatkan respon yang valid. |
| 503  | **Service Unavailable**: Server sementara tidak dapat menangani permintaan (biasanya karena overload atau pemeliharaan). |
