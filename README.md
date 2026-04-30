Online Voting System with Face Verification

Overview

This project is a secure **Online Voting System** that allows users to cast votes digitally. It ensures **one person – one vote** and enhances security using **face verification**.

The system includes authentication, authorization, and real-time vote counting.

---

Features
 User Registration & Login (JWT Authentication)
 Password Encryption using bcrypt
 Face Verification (using face-api.js)
 One Vote per User
 Admin Control (Add Candidates)
 Real-time Results

-
Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT
* **Security:** bcrypt
* **Face Recognition:** face-api.js

---

Project Structure

```
online-voting-system/
│
├── config/
│   └── db.js
├── models/
│   ├── User.js
│   └── Candidate.js
├── middleware/
│   └── auth.js
├── routes/
│   ├── auth.js
│   ├── vote.js
│   ├── admin.js
│   └── face.js
├── server.js
├── .env
├── package.json
```

---

 Workflow

1. User registers
2. User logs in and receives JWT token
3. User registers face
4. Face is verified during login
5. User casts vote (only once)
6. Admin manages candidates
7. Results displayed

---

 Future Enhancements

* OTP / Aadhaar verification
* Blockchain integration
* Mobile app development
* Advanced face liveness detection

---

 License

This project is for educational purposes only.
