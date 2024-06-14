# Documentation One App API

## API One App menyediakan berbagai endpoint untuk mengelola proses autentikasi, profil pengguna, lokasi drop-off, serta integrasi dengan mitra bisnis.

## 1. Auth Router

Auth Router memiliki endpoint untuk registrasi dan login pengguna serta mitra. Endpoint **User Sign-Up** (`POST /auth/users/register`) memungkinkan pengguna baru mendaftar dengan mengirimkan email, password, nama, dan tanggal lahir dalam bentuk JSON. Respon sukses berisi pesan konfirmasi dan data pengguna. Endpoint **User Login** (`POST /auth/users/login`) memungkinkan pengguna yang telah terdaftar untuk login dengan mengirimkan email dan password. Respon sukses berisi pesan konfirmasi dan token autentikasi. Demikian pula, endpoint **Partner Sign-Up** (`POST /auth/partners/register`) dan **Partner Login** (`POST /auth/partners/login`) digunakan oleh mitra bisnis untuk mendaftar dan login, dengan format permintaan dan respon yang serupa.

## 2. Profile Router

Profile Router menyediakan endpoint untuk mengelola profil pengguna. Endpoint **GET /api/profile** digunakan untuk mendapatkan data profil pengguna yang autentikasi, dengan menyertakan token dalam header permintaan. Respon sukses mengembalikan data profil seperti ID, userId, URL gambar profil, nomor telepon, alamat, serta waktu pembuatan dan pembaruan. Endpoint **PUT /api/profile** memungkinkan pengguna untuk memperbarui profil mereka dengan mengirimkan data profil baru dalam bentuk JSON, sementara endpoint **POST /api/profile** digunakan untuk membuat data profil baru. Endpoint **DELETE /api/profile** digunakan untuk menghapus data profil pengguna yang autentikasi, dan **GET /api/:user_id/profile** memungkinkan pengambilan data profil berdasarkan userId.

## 3. Location Mapping Router

Location Mapping Router mencakup endpoint untuk mengelola lokasi drop-off. Endpoint **GET /api/locations** mengembalikan daftar lokasi drop-off yang tersedia. Endpoint **POST /api/locations** digunakan untuk menambahkan lokasi drop-off baru dengan data seperti nama, alamat, koordinat latitude dan longitude, serta URL QR code dalam bentuk JSON. Respon sukses mengembalikan pesan konfirmasi beserta data lokasi yang baru ditambahkan.

## 4. QR Code Scan

Endpoint **POST /api/scan** digunakan untuk memindai QR code lokasi drop-off dan mencatat donasi sampah plastik, mengembalikan poin yang diperoleh pengguna.

## 5. Point Accumulation and Redemption

Endpoint **GET /api/points** mengembalikan jumlah poin yang telah dikumpulkan oleh pengguna. Endpoint **POST /api/redeem** digunakan untuk menukarkan poin dengan voucher.

## 6. Partner Integration

Integrasi dengan mitra bisnis mencakup endpoint untuk mendapatkan daftar lokasi drop-off mitra dan voucher mitra. Endpoint **GET /api/partners/locations** digunakan untuk mendapatkan daftar lokasi drop-off mitra. Endpoint **GET /api/partners/vouchers** mengembalikan daftar voucher dari mitra.

## 7. Plastic Waste Management

Manajemen Sampah Plastik mencakup endpoint untuk kemitraan bisnis. Endpoint **GET /api/partnerships** mengembalikan daftar kemitraan bisnis.

## 8. Data Analytics and Reporting

Endpoint analitik menyediakan data metrik keterlibatan pengguna dan laporan dampak lingkungan. Endpoint **GET /api/analytics/user-engagement** mengembalikan data metrik keterlibatan pengguna. Endpoint **GET /api/analytics/environmental-impact** mengembalikan laporan dampak lingkungan.

Dengan dokumentasi ini, pengembang dapat dengan mudah memahami cara menggunakan setiap endpoint, format permintaan dan respon yang diharapkan, serta berbagai fitur yang disediakan oleh API One App untuk mendukung proses manajemen dan pelaporan donasi sampah plastik.


#### BASE URL : `localhost:3000/api`

 ### 1. Auth Router 

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
      "dateOfBirth" : "2024-09-16"
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
        "dateOfBirth" : "2024-09-16"
      }
    }
    ```

 - ### User Login

- **METHOD** : `POST`

- **ENDPOINT** : `/auth/users/login`

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
      "token" : "Bearer Token"
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
      "type" : "Food And Drink",
      "location" : "https/maps.example.com"
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
        "type" : "Food And Drink",
        "location" : "https/maps.example.com"
      }
    }
    ```
- ### Partner Login

- **METHOD** : `POST`

- **ENDPOINT** : `/auth/partners/login`

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
      "token" : "Bearer Token"
    }
    ```        
### 2. Profile Router
  - ####  Pada endpoint ini client bisa mendapatkan data profile user tanpa menggunakan parameter UserId, dikarenakan UserId sudah    menjadi payload dari token yang diberikan pada request headers, namun jika client ingin menggunakan parameter untuk mendapatkan data profile User, itu juga bisa dilakukan dengan menggunakan Endpoint yang sudah saya sediakan di bagian bawah.

- ### User Profile
- **METHOD**: `GET`

- **ENDPOINT**: `/profile`

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
      "data" : {
        "id" : 1,
        "userId" : 1,
        "ProfilePicture" : "http:/example.com",
        "phoneNumber" : "0822321",
        "Address" : "Malang",
        "createdAt": "2024-06-13T12:34:56.789Z",
        "updatedAt": "2024-06-13T12:34:56.789Z"
      }
    }
    ```

- **METHOD**: `PUT`

- **ENDPOINT**: `/profile`

- **Content-Type**: `application/json`

  **- Mengubah / Mengupdate / Mengedit Data Profile User**

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
      "address" : "Malang"
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

- **ENDPOINT**: `/profile`
- **Content-Type**: `application/json`

  **- Endpoint ini digunakan untuk membuat data profile user**

- **_`Request Body`_**  
  ```json
  {
    "profilePicture" : "https/example.com", 
    "phoneNumber" : "08213943",
    "address" : "Kota Pasuruan"
  }
  ```
  **- Jika pada Endpoint ini tidak diberikan sebuah request body, maka nilai dari fields diatas akan menjadi null.**

- **_`Response`_**
- **_`Status 200 : OK`_**
  ```json
  {
    "message " : "Created User Profile Successfully"
  }
  ```
 - **METHOD**: `DELETE`

 - **ENDPOINT**: `/profile`

 - **Content-Type**: `application/json`

    **- Menghapus Data Profile tidak memerlukan userId, karena sudah mendapatkan userId dari token**

  - **_`Response`_**
  - **_`Status 200 : OK`_**
    ```json
    {
      "message": "Profile Delete successfully"
    }
    ```
 - **METHOD**: `GET`

 - **ENDPOINT**: `/:user_id/profile`
 - **Content-Type**: `application/json`

  **- Mengambil Data Profile User Berdasarkan User Id**

 - **_`Response:`_**

  - **_`Status 200 : OK`_**
    ```json
    {
      "data" : {
        "id" : 1,
        "userId" : 1,
        "ProfilePicture" : "http:/example.com",
        "phoneNumber" : "0822321",
        "Address" : "Malang",
        "createdAt": "2024-06-13T12:34:56.789Z",
        "updatedAt": "2024-06-13T12:34:56.789Z"
      }
    }
    ```  
 - **METHOD**: `PUT`

 - **ENDPOINT**: `/:user_id/profile`

 - **Content-Type**: `application/json`

    **- Mengupdate / Mengedit / Mengubah Data Profile User Berdasarkan User Id**

 - **_`Request Body`_**

    ```json
    {
      "profilePicture": "https/example.com",
      "phoneNumber": "08213943",
      "address" : "Malang"
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

 - **ENDPOINT**: `/:user_id/profile`

 - **Content-Type**: `application/json`

**- Menghapus Data Profile User Berdasarkan User Id**

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
  **- Endpoint ini memerlukan parameter userId**
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
      "updatedAt": "2024-06-13T12:34:56.789Z",
    }
    ```
- **METHOD**: `PUT`

- **ENDPOINT**: `/datas/users/:user_id`

- **Content-Type**: `application/json`
  **- Endpoint ini memerlukan parameter userId**
  - **_`Request Body:`_**
  ```json
  {
    "email": "example@gmail.com",
    "password": "Password*123",
    "name": "jhonDoe",
    "dateOfBirth" : "2024-09-16"
  }
  ```
  - **_`Response:`_**
  - **_`Status 200 : OK`_**

    ```json
    {
      "message" : "Update User Successfully",
      "data" : {
        "id": 1,
        "email": "example@gmail.com",
        "name": "John Doe",
        "dateOfBirth": "1990-01-01", 
        "points": 100,
        "createdAt": "2024-06-13T12:34:56.789Z",
        "updatedAt": "2024-06-13T12:34:56.789Z",
      }
    }
    ```
- **METHOD**: `DELETE`

- **ENDPOINT**: `/datas/users/:user_id`

- **Content-Type**: `application/json`
  **- Endpoint ini memerlukan parameter userId**

  - **_`Response:`_**

  - **_`Status 200 : OK`_**
  ```json
  {
    "message" : "Delete User Successfully"
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
### 5. Location Partner Router
- **METHOD**: `GET`

- **ENDPOINT**: `/api/partners/locations/nearby`

- **Content-Type**: `application/json`

  **- Mendapatkan lokasi mitra**

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

- **ENDPOINT**: `/api/partners/locations/nearby`

- **Content-Type**: `application/json`

  **- Mendapatkan lokasi mitra terdekat berdasarkan dari posisi User**

  - **_`Response:`_**

  - **_`Status 200 : OK`_**

  **- Response dibawah ini diurutkan berdasarkan jarak mitra terdekat dari lokasi user berada**

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

### 4.. Location Mapping Router

- **METHOD**: `GET`
- **ENDPOINT**: `/api/dropOffLocations`

  **- Endpoint ini digunakan untuk mendapatkan data lokasi dari tempat donasi sampah plastik.**
  - **`Response`**

    ```json
    [
      {
        "locationId": "string",
        "name": "string",
        "address": "string",
        "coordinates": {
          "lat": "number",
          "lng": "number"
        }
      }
    ]
    ```
- **METHOD**: `POST`
- **ENDPOINT**: `/api/locations`

  **- Endpoint ini digunakan untuk menambahkan data lokasi untuk tempat donasi sampah plastik.**

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
    "message" : "Add location Successfully",
       "data" : {
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
    
### QR Code Scan

- **METHOD**: POST
- **ENDPOINT**: /api/scan
  - **Headers:**
    ```json
    {
      "Authorization": "Bearer token"
    }
    ```
  - **Request Body:**
    ```json
    {
      "locationId": "string",
      "amount": "number",
      "type": "string"
    }
    ```
  - **Response:**
    ```json
    {
      "message": "Donation successful",
      "pointsEarned": "number"
    }
    ```

## Point Accumulation and Redemption

### Point Accumulation

- **METHOD**: GET
- **ENDPOINT**: /api/points
  - **Headers:**
    ```json
    {
      "Authorization": "Bearer token"
    }
    ```
  - **Response:**
    ```json
    {
      "points": "number"
    }
    ```

### Voucher Redemption

- **METHOD**: GET
- **ENDPOINT**: /api/vouchers

  - **Headers:**
    ```json
    {
      "Authorization": "Bearer token"
    }
    ```
  - **Response:**
    ```json
    [
      {
        "voucherId": "string",
        "description": "string",
        "pointsRequired": "number"
      }
    ]
    ```

- **METHOD**: POST
- **ENDPOINT**: /api/redeem
  - **Headers:**
    ```json
    {
      "Authorization": "Bearer token"
    }
    ```
  - **Request Body:**
    ```json
    {
      "voucherId": "string"
    }
    ```
  - **Response:**
    ```json
    {
      "message": "Voucher redeemed successfully"
    }
    ```

## Partner Integration

### Partner Drop-Off Locations

- **METHOD**: GET
- **ENDPOINT**: /api/partners/locations
  - **Response:**
    ```json
    [
      {
        "locationId": "string",
        "status": "string"
      }
    ]
    ```

### Voucher Partners

- **METHOD**: GET
- **ENDPOINT**: /api/partners/vouchers
  - **Response:**
    ```json
    [
      {
        "partnerId": "string",
        "name": "string",
        "vouchers": [
          {
            "voucherId": "string",
            "description": "string"
          }
        ]
      }
    ]
    ```

## Plastic Waste Management

### Business Partnerships

- **METHOD**: GET
- **ENDPOINT**: /api/partnerships
  - **Response:**
    ```json
    [
      {
        "partnerId": "string",
        "name": "string",
        "description": "string"
      }
    ]
    ```

## Data Analytics and Reporting

### User Engagement Metrics

- **METHOD**: GET
- **ENDPOINT**: /api/analytics/user-engagement
  - **Headers:**
    ```json
    {
      "Authorization": "Bearer token"
    }
    ```
  - **Response:** ...

### Environmental Impact Reports

- **METHOD**: GET

- **ENDPOINT**: /api/analytics/environmental-impact
  - **Headers:**
    ```json
    {
      "Authorization": "Bearer token"
    }
    ```
  - **Response:** ...
