# Splitly | Dynamic Expense Sharing App

**Splitly** is a lightweight, Vanilla JavaScript application designed to handle bill splitting among any number of users. Built with a focus on **Zero Hardcoding**, the app allows for dynamic group scaling and real-time balance tracking using a custom-built accounting engine.

---

## 🚀 Features

* **Dynamic User Scaling:** No fixed limit on participants. Add as many users as needed.
* **Real-time Balance Engine:** Automatically calculates debts and credits using distribution logic.
* **Equal Split Strategy:** Automatically divides expenses across all active group members.
* **Settlement System:** A dedicated workflow to "Settle Up" and clear debts between specific users.
* **Responsive UI:** A modern, card-based interface built with CSS Flexbox and Grid.

---

## 🛠️ Tech Stack

* **HTML5:** Semantic structure.
* **CSS3:** Custom properties (variables), Grid, and Flexbox.
* **JavaScript (ES6+):** Pure Vanilla JS for state management and DOM manipulation.
* **Font Awesome:** For professional iconography.

---

## 🧠 The Logic Behind the Split

The core of the app avoids hardcoded values by treating the group as a dynamic collection. 

1.  **Storage:** Users are stored in an array of objects. Each user object contains a `balances` map.
2.  **The Formula:** When an expense is added, the cost per person is calculated as:
    $$Share = \text{Total Amount} / \text{Total Users}$$
3.  **The Transaction:** * The **Payer** receives a credit for the shares of all other members.
    * The **Participants** receive a debit for their specific share.
4.  **Balance Resolution:** The `showBalances()` function iterates through the nested balance maps to visualize exactly who owes whom.

---

## 📂 Project Structure

├── index.html      # Single Page Application structure
├── style.css       # Modern UI styling and layout
├── script.js       # Core logic, state management, and math
└── README.md       # Project documentation
