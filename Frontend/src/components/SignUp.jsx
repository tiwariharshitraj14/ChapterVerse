import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from "axios"
import Login from './Login'
import toast from 'react-hot-toast';
const SignUp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/users/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Signup Successfully');
                    navigate(from, { replace: true })
                }
                localStorage.setItem('users', JSON.stringify(res.data.user))
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Signup Error: " + err.response.data.message);
                }
            })
    };
    return (
        <>
            <div className="flex h-screen items-center justify-center bg-white text-black dark:bg-slate-900 dark:text-white">
                <div className="w-[600px]">
                    <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            <h3 className="font-bold text-lg">Sign Up</h3>
                            <div className="mt-4 space-y-2">
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your Full Name"
                                    className="w-80 px-3 py-1 border rounded-md outline-none bg-transparent"
                                    {...register("fullname", { required: true })} />
                                <br />
                                {errors.fullname && (
                                    <span className="text-sm text-red-500">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className="mt-4 space-y-2">
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-80 px-3 py-1 border rounded-md outline-none bg-transparent"
                                    {...register("email", { required: true })} />
                                <br />
                                {errors.email && (
                                    <span className="text-sm text-red-500">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className="mt-4 space-y-2">
                                <span>Password</span>
                                <br />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-80 px-3 py-1 border rounded-md outline-none bg-transparent"
                                    {...register("password", { required: true })} />
                                <br />
                                {errors.password && (
                                    <span className="text-sm text-red-500">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-row items-center justify-around mt-4">
                                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 px-2 py-2 rounded-md text-white duration-300">Sign Up</button>
                                <p>Have  Account? {" "}
                                    <button
                                        className="underline text-blue-500 cursor-pointer"
                                        onClick={() => { document.getElementById("my_modal_3").showModal() }}
                                    >
                                        Login</button>
                                    <Login />
                                    {" "}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp