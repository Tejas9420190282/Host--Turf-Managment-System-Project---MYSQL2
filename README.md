🏏⚽ Turf Management System

A modern, full-stack web application for managing turf bookings online. This system provides a seamless experience for users to discover, book, and manage turf reservations, while giving administrators powerful tools to manage facilities and bookings.


✨ Key Features
👤 User Features
🔐 Secure authentication with JWT and email verification

🔍 Advanced search by location, date, and availability

💳 Integrated payment processing with Razorpay

📄 PDF entry pass generation and download

🔄 Password reset via email

📱 Responsive design for all devices

⚙️ Admin Features
🎯 Complete turf management (CRUD operations)

📊 Booking overview with filtering capabilities

👥 User management system

📈 Booking analytics and insights

🛠 Technology Stack
Layer	Technology
Frontend	React.js, TailwindCSS, Vite
Backend	Node.js, Express.js, JWT
Database	MySQL
Payment	Razorpay Integration
Authentication	JWT with email verification
Email Service	Nodemailer

🚀 Quick Start
Prerequisites
Node.js 

MySQL

npm or yarn

Installation
Clone the repository

bash
git clone https://github.com/Tejas9420190282/Host--Turf-Managment-System-Project---MYSQL2.git
cd Host--Turf-Managment-System-Project---MYSQL2
Set up the Backend

bash
cd server
npm install
Create a .env file in the server directory:

env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=turf_management
JWT_SECRET=your_jwt_secret_here
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
CLIENT_URL=http://localhost:3000
PORT=5000
Set up the Frontend

bash
cd ../client
npm install
Create a .env file in the client directory:

env
VITE_API_BASE_URL=http://localhost:5000
Database Setup

Import the database.sql file into your MySQL database

Update the .env file with your database credentials

Run the Application

bash
# Start the backend (from server directory)
npm start

# Start the frontend (from client directory, in a new terminal)
npm run dev
The application will be available at:

Frontend: http://localhost:3000

Backend API: http://localhost:5000

📁 Project Structure
text
Host--Turf-Managment-System-Project---MYSQL2/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── utils/         # Utility functions
│   │   └── styles/        # TailwindCSS styles
│   └── package.json
├── server/                 # Express backend
│   ├── controllers/        # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── package.json
├── database.sql           # Database schema and seed data
└── README.md

🌐 Deployment Guide
Frontend Deployment (Vercel)
Build the project: npm run build

Connect your GitHub repository to Vercel

Configure environment variables in Vercel dashboard

Deploy automatically from main branch

Backend Deployment (Render)
Prepare your production environment variables

Connect your repository to Railway/Render

Set up the build command: npm install

Set the start command: npm start

Configure the database connection string

Database Deployment (TiDB)
Create a production MySQL database

Update connection strings in your backend environment variables

Run the database.sql script on your production database

Environment Variables for Production
env
# Backend .env
DB_HOST=your_production_db_host
DB_USER=your_production_db_user
DB_PASSWORD=your_production_db_password
DB_NAME=your_production_db_name
JWT_SECRET=your_production_jwt_secret
RAZORPAY_KEY=your_production_razorpay_key
RAZORPAY_SECRET=your_production_razorpay_secret
CLIENT_URL=your_production_frontend_url
NODE_ENV=production

🔧 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	User registration
POST	/api/auth/login	User login
GET	/api/turfs	Get all turfs
POST	/api/bookings	Create a new booking
GET	/api/bookings/:id	Get booking details
POST	/api/payment/verify	Verify payment

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

🔮 Future Enhancements

📱 Mobile application with React Native

🔔 Real-time notifications using WebSockets

📊 Advanced analytics dashboard for admins

⭐ User rating and review system

🎯 Personalized recommendations

📅 Recurring booking options

🗺️ Interactive map integration

🐛 Troubleshooting
Common issues and solutions:

Connection refused error: Ensure MySQL is running and credentials are correct

JWT token errors: Verify your JWT secret in environment variables

Razorpay payment failures: Check your Razorpay keys and webhook configurations

Email not sending: Verify email credentials and app passwords

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Tejas Shimpi

MSc CS (2024) | Full Stack Developer

📧 Email: tejasshimpi877@gmail.com

🌐 Portfolio: https://tejas-shimpi-portfolio.netlify.app/

💼 LinkedIn: https://www.linkedin.com/in/tejas-shimpi-459235206

🙏 Acknowledgments
Razorpay for payment integration

TailwindCSS for styling framework

React community for excellent documentation and support

⭐ Star this repo if you found it helpful!
