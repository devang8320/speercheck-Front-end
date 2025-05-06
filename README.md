# SpeerCheck: Live Interview Scheduler

A responsive internal scheduling tool for recruiters at Speer to book interviews between candidates and engineers, based on real-time availability.

---

## 🚀 Features

- 📅 **Weekly calendar view** (Mon–Fri, 9:00 AM–6:00 PM)
- 👤 **Candidate selector** via dropdown
- 🔍 **Availability overlap detection** between candidate and engineers
- ✅ **Bookable 30-minute slots**
- 💬 **Confirmation dialog** after scheduling
- 🌈 Tailwind CSS for clean UI
- 🧪 Includes one meaningful unit test using Vitest



## 📦 Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Vitest (for testing)

---

## 📁 Project Structure

speercheck/
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable UI components (calendar, dialog, etc.)
│ ├── Data/ # JSON files for candidates and engineers
│ ├── utils/ # Availability logic
│ ├── App.tsx # Main App component
│ ├── index.css # Tailwind CSS entry
│ └── main.tsx # App root
├── tailwind.config.js # Tailwind config
├── postcss.config.js # PostCSS setup
├── vite.config.ts # Vite config
└── README.md


---

## ⚙️ How to Run

### 1. Install dependencies

```bash
npm install
2. Start development server
bash
Always show details

Copy
npm run dev
Then open http://localhost:5173 in your browser.

🧪 Run Tests
bash
Always show details

Copy
npm run test
This will run the included Vitest unit tests.

🧠 Implementation Highlights
Availability intersection is calculated by matching overlapping time ranges between candidate and engineer.

Tailwind utility classes ensure clear visual distinctions:

🟩 Green: Engineer availability

🟦 Blue: Overlapping & bookable

🟨 Yellow: Selected or booked slot



🧠 AI Assistance: Some help was taken from ChatGPT for Tailwind setup, debugging, and styling suggestions — all logic was independently written and understood.

Readme file is also made by ChatGPT

I’ve written this `CalendarGrid` to show engineer and candidate availability. I calculate overlap manually, but I want to improve the Tailwind layout. Can you help with better styling?

{hours.map((time) => (
  <tr key={time}>
    <td>{time}</td>
    {days.map((day) => {
      const engineerList = getEngineersAvailableAt(day, time);
      const isCand = isCandidateAvailable(day, time);
      const intersect = engineerList.length > 0 && isCand;

      return (
        <td
          key={day + time}
          className={intersect ? "bg-blue-300" : isCand ? "bg-yellow-200" : engineerList.length > 0 ? "bg-green-200" : ""}
        >
          {intersect ? "Book" : ""}
        </td>
      );
    })}
  </tr>
))}

ChatGPT said:
The logic is great! You can improve styling and layout clarity using Tailwind’s `table`, `text-sm`, and `hover` utilities. Here's a styled version that keeps your logic intact:


```tsx
<table className="border-collapse w-full text-sm text-center">
  <thead>
    <tr>
      <th className="border p-2 bg-gray-100">Time</th>
      {days.map((day) => (
        <th key={day} className="border p-2 bg-gray-100">{day}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {hours.map((time) => (
      <tr key={time}>
        <td className="border p-2">{time}</td>
        {days.map((day) => {
          const engineerList = getEngineersAvailableAt(day, time);
          const isCand = isCandidateAvailable(day, time);
          const intersect = engineerList.length > 0 && isCand;

          const cellClass = intersect
            ? "bg-blue-400 text-white hover:bg-blue-500 cursor-pointer"
            : isCand
            ? "bg-yellow-200"
            : engineerList.length > 0
            ? "bg-green-200"
            : "";

          return (
            <td
              key={`${day}-${time}`}
              className={`border p-2 transition ${cellClass}`}
              onClick={() => intersect && onSlotSelect({ day, time, engineer: engineerList[0].name })}
            >
              {intersect ? "Book" : ""}
            </td>
          );
        })}
      </tr>
    ))}
  </tbody>
</table>
```


I need some dummy data for 3 engineers and a few candidates. Each should have different weekday availability in 30-minute ranges. Can you help generate that?

ChatGPT Said:
Sure! Here's an example you can put into local JSON files:

```json
// engineers.json
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

```json
// candidates.json
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
