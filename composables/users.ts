const getUsers = async (): Promise<void> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();
  users.value = json;
};

let users = ref();
getUsers();

export function getAllUsers() {
  return useState("users", () => users);
}

export const deleteUser = async (userId: string | string[]): Promise<void> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const json = await res.json();
  console.log(`user with user id ${userId} is deleted: `, json);
};

export const createUser = async (): Promise<void> => {
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/users`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  let json = await res.json();
  console.log(`user is created: `, json);
};
