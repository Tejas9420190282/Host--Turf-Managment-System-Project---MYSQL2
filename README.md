# Turf Management System 🏏⚽

A full-stack Turf Management System built using **React.js, TailwindCSS, Node.js, Express.js, and MySQL**.  
The system helps admins manage turf bookings, while users can search, book, and pay for turfs online.

## ✨ Features

### 🔑 User

-   Create an account & login securely
-   Search turfs by **city, area, and date**
-   Book slots & make payments (Razorpay integration)
-   Download PDF entry pass
-   Reset password via email link

### 🛠️ Admin

-   Create, update, and delete turfs
-   View all bookings
-   Filter bookings by turf

## 🧑‍💻 Tech Stack

-   **Frontend:** React.js, TailwindCSS
-   **Backend:** Node.js, Express.js
-   **Database:** MySQL
-   **Payment Gateway:** Razorpay
-   **Authentication:** JWT + Email verification

## 🚀 Installation & Setup

### 1️⃣ Clone the repo

````bash
git clone https://github.com/Tejas9420190282/Host--Turf-Managment-System-Project---MYSQL2.git
cd Host--Turf-Managment-System-Project---MYSQL2




2️⃣ Setup Backend

cd server
npm install


Create a .env file in server/ with:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=turf_management
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret


Run backend:
npm start

---

3️⃣ Setup Frontend

cd client
npm install
npm run dev

---

#### 5. **Database Setup**
Provide schema or migration instructions.

```md
## 🗄️ Database Setup
- Import `database.sql` file into MySQL
- Update `.env` with your MySQL credentials





## 🔮 Future Improvements
- Add mobile app version (React Native)
- Real-time booking updates using WebSockets
- Advanced analytics for admins


## 👨‍💻 Author
- **Tejas Shimpi**
- MSc CS (2024) | Full Stack Developer
- Portfolio: https://tejas-shimpi-portfolio.netlify.app/
- LinkedIn: https://www.linkedin.com/in/tejas-shimpi-459235206
- Email: tejasshimpi877@gmail.com
````
