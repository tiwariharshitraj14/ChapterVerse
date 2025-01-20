import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Login from './Login'
const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="flex h-screen items-center justify-center bg-white text-black dark:bg-slate-900 dark:text-white">
                <div className="w-[600px] h-auto">
                    <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">Contact Us</h3>
                        <div className="mt-4 space-y-2">
                            <span>Name</span>
                            <br />
                            <input 
                            type="text" 
                            placeholder="Enter your Full Name" 
                            className="w-full px-3 py-1 border rounded-md outline-none bg-transparent"
                            {...register("name", { required: true })}  />
                            <br />
                            {errors.name && (
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
                            className="w-full px-3 py-1 border rounded-md outline-none bg-transparent"
                            {...register("email", { required: true })}  />
                            <br />
                            {errors.email && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="mt-4 space-y-2">
                            <span>Message</span>
                            <br />
                            <textarea 
                            type="text" 
                            placeholder="Enter your message" 
                            className="w-full px-3 py-1 border rounded-md outline-none bg-transparent h-24"
                            {...register("message", { required: true })}  />
                            <br />
                            {errors.message && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="flex flex-row items-center justify-around mt-4">
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 px-2 py-1 rounded-md text-white duration-300">Send</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Contact