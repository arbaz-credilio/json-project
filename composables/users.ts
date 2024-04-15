const getUsers = async () : Promise<void> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await res.json()
    users.value = json
}

let users = ref()
getUsers()

export function getAllUsers() {
    return useState("users", () => users)
}