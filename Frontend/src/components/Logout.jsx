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
            <button className="px-3 py-2 bg-red-500 text-white cursor-pointer rounded-md"
                onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default Logout