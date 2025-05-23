import { Link } from "react-router-dom"
import axios from "axios"
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/users/login", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Login Successfully');
                    document.getElementById("my_modal_3").close();
                    setTimeout(() => {
                        window.location.reload()
                        localStorage.setItem('users', JSON.stringify(res.data.user))
                    }, 1000);
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Login Error: " + err.response.data.message);
                    setTimeout(() => { }, 2000);
                }
            })
    };
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        {/* Email */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none bg-transparent"
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        {/* password */}
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 py-1 border rounded-md outline-none bg-transparent"
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        {/* Button */}
                        <div className="flex flex-row items-center justify-around mt-4">
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 px-2 py-2 rounded-md text-white duration-300">Login</button>
                            <p>
                                Not registered?{" "}
                                <Link
                                    to="/signup"
                                    className="underline text-blue-500 cursor-pointer"
                                >
                                    Signup
                                </Link>{" "}
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login