import { useNavigate, useParams } from "react-router-dom";

const Userdetail = () => {
    const params = useParams();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("users"));
    console.log(user);

    const currentuser = user?.find((user) => user.id === params.id);

    return (
        <div className="max-w-screen-sm mx-auto p-3 bg-white border my-5 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            {currentuser ? (
                <>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {currentuser.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {currentuser.role}
                    </p>
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Back
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button>
                </>
            ) : (
                <h2 className="text-center text-red-500 text-xl">User Not Found</h2>
            )}
        </div>
    );
};

export default Userdetail;
