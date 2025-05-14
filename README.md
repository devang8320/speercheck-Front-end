# 🗓️ SpeerCheck: Live Interview Scheduler

A responsive internal scheduling tool built for Speer recruiters to book interviews between candidates and engineers — based on real-time availability.

🌐 **Deployed on Netlify**  
🔗 **Live Link**: [SpeerCheck App](https://spreerfrontend5.netlify.app/)

---

## 🚀 Features

- 📅 **Weekly Calendar View** — Mon–Fri, 9:00 AM to 6:00 PM  
- 👤 **Candidate Selector** — Simple dropdown interface  
- 🔍 **Availability Overlap Detection** — Highlights matching time slots  
- ✅ **Bookable 30-minute Slots**  
- 💬 **Confirmation Dialog** — Confirms booking action  
- 🎨 **Tailwind CSS** — Clean, responsive UI  
- 🧪 **Unit Tested** — Includes a meaningful test with Vitest  

---

## ⚙️ Tech Stack

- **Frontend**: React + TypeScript  
- **Build Tool**: Vite  
- **Styling**: Tailwind CSS  
- **Testing**: Vitest  

---

## 📁 Project Structure

```
speercheck/
├── public/               # Static assets
├── src/
│   ├── components/       # UI components (CalendarGrid, Dialog, etc.)
│   ├── Data/             # Local JSON files (engineers, candidates)
│   ├── utils/            # Availability checking logic
│   ├── App.tsx           # Root App component
│   ├── index.css         # Tailwind CSS entry
│   └── main.tsx          # Application entry point
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS setup
├── vite.config.ts        # Vite configuration
└── README.md
```

---

## 🧪 How to Run Locally

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open your browser at: [http://localhost:5173](http://localhost:5173)

### 3. Run Unit Tests

```bash
npm run test
```

This will execute the included Vitest unit tests.

---

## 💡 Implementation Highlights

- **Availability Logic**:  
  Overlapping time slots between engineers and candidates are calculated by comparing 30-minute ranges across both schedules.

- **Visual Indicators (via Tailwind CSS)**:  
  - 🟩 **Green** — Engineer is available  
  - 🟦 **Blue** — Overlapping/bookable slot  
  - 🟨 **Yellow** — Candidate-only availability or selected slot  

---


## 📄 Sample Data Files

### engineers.json

```json
[
  {
    "id": 1,
    "name": "Engineer A",
    "availability": ["Monday 09:00-11:00", "Tuesday 14:00-17:00"]
  },
  {
    "id": 2,
    "name": "Engineer B",
    "availability": ["Wednesday 10:00-13:00", "Thursday 14:00-17:00"]
  },
  {
    "id": 3,
    "name": "Engineer C",
    "availability": ["Friday 13:00-15:00", "Monday 15:00-17:00"]
  }
]
```

### candidates.json

```json
[
  {
    "id": 1,
    "name": "Alice",
    "availability": "Tuesday 14:00-16:00"
  },
  {
    "id": 2,
    "name": "Bob",
    "availability": "Wednesday 11:00-13:00"
  },
  {
    "id": 3,
    "name": "Charlie",
    "availability": "Friday 14:00-16:00"
  }
]
```