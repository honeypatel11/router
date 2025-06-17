import { Link } from "react-router-dom";

const User = () => {
    const user = [
        { id: 1, name: "Honey", role: "Designing" },
        { id: 2, name: "Khushbu", role: "Developer" }
    ];

     localStorage.setItem("users", JSON.stringify(user));

    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <h1 className="text-emerald-500 text-3xl font-bold mb-4">User</h1>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Role</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((users) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {users.id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {users.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {users.role}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link to={`/user/${user.id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
