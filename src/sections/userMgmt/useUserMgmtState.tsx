export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
}
const useUserMgmtState = () => {
  const rows: IUser[] = [
    { id: "1", name: "Alice", email: "alice@example.com", role: "Admin" },
    { id: "2", name: "Bob", email: "bob@example.com", role: "User" },
    { id: "3", name: "Charlie", email: "charlie@example.com", role: "User" },
  ];

  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "role", headerName: "Role", width: 120 },
  ];
  return {
    rows,
    columns,
  };
};

export default useUserMgmtState;
