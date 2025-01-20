import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem('users');
            toast.success("Logout Sucessfully");
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        } catch (error) {
            console.log(error);
            toast.error("Error: " + error.message)
            setTimeout(() => { }, 2000);  
        }
    }
    return (
        <div>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 px-2 py-2 rounded-md text-white duration-300"
                onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default Logout