# JavaScript Promises Cheat Sheet

**Problem:** JavaScript is single-threaded. Long-running tasks (e.g., API calls, file reads) can block the thread. Callbacks were used initially, but nested callbacks lead to "callback hell" (hard-to-read code).

**Solution:** Promises provide a cleaner, more manageable way to handle async operations. A Promise represents an operation that hasn’t completed yet but is expected in the future.

**Analogy**: Like a pizza ticket - you get it immediately, then exchange it for pizza (success) or a refund (error) later.

---

## 2. Promise States

A Promise can be in one of three states:

| State       | Description                            |
| ----------- | -------------------------------------- |
| `Pending`   | Initial state (not fulfilled/rejected) |
| `Fulfilled` | Operation completed successfully       |
| `Rejected`  | Operation failed                       |

**Once settled (fulfilled/rejected), a Promise's state cannot change.**
