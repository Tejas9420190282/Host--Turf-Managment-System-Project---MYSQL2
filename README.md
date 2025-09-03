Turf Management System 🏏⚽
A full-stack Turf Management System built using React.js, TailwindCSS, Node.js, Express.js, and MySQL. The system helps admins manage turf bookings, while users can search, book, and pay for turfs online.

✨ Features
🔑 User
Create an account & login securely

Search turfs by city, area, and date

Book slots & make payments (Razorpay integration)

Download PDF entry pass

Reset password via email link

🛠️ Admin
Create, update, and delete turfs

View all bookings

Filter bookings by turf

🧑‍💻 Tech Stack
Frontend: React.js, TailwindCSS

Backend: Node.js, Express.js

Database: MySQL

Payment Gateway: Razorpay

Authentication: JWT + Email verification

🚀 Installation & Setup
1️⃣ Clone the repo
bash
git clone https://github.com/Tejas9420190282/Host--Turf-Managment-System-Project---MYSQL2.git
cd Host--Turf-Managment-System-Project---MYSQL2
2️⃣ Setup Backend
bash
cd server
npm install
Create a .env file in server/ with:

text
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=turf_management
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
CLIENT_URL=http://localhost:3000


Run backend:

bash
npm start
3️⃣ Setup Frontend
bash
cd client
npm install
Create a .env file in client/ with:

text
VITE_API_BASE_URL=http://localhost:5000
Run frontend:

bash
npm run dev
🗄️ Database Setup
Import database.sql file into MySQL (located in the project root)

Update .env with your MySQL credentials

🌐 Deployment
Frontend Deployment (Netlify)
Build the React app:

bash
cd client
npm run build
Deploy the dist folder to:

Netlify: Drag and drop the dist folder or connect your GitHub repo

Backend Deployment (Render)
Prepare your backend for production:

Update CORS settings to allow your frontend domain

Update database connection to use production database

Set environment variables in your hosting platform

Deploy to:

Render: Connect your GitHub repo and set environment variables

MySQL Database Deployment
TiDB: For MySQL-compatible serverless database


Environment Variables for Production
Update your production environment variables with:

Production database URL

Production frontend URL

Razorpay production keys

JWT secret for production

🔮 Future Improvements
Add mobile app version (React Native)

Real-time booking updates using WebSockets

Advanced analytics for admins

👨‍💻 Author
Tejas Shimpi

MSc CS (2024) | Full Stack Developer

Portfolio: https://tejas-shimpi-portfolio.netlify.app/

LinkedIn: https://www.linkedin.com/in/tejas-shimpi-459235206

Email: tejasshimpi877@gmail.com
