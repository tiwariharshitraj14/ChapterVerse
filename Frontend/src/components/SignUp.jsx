import { Link } from 'react-router-dom'
import Login from './Login'

const SignUp = () => {
    return (
        <>
            <div className="flex h-screen items-center justify-center bg-white text-black dark:bg-slate-900 dark:text-white">
                <div className="w-[600px]">
                    <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white">
                        <form method="dialog">
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        </form>
                        <h3 className="font-bold text-lg">Sign Up</h3>
                        <div className="mt-4 space-y-2">
                            <span>Name</span>
                            <br />
                            <input type="text" placeholder="Enter your Full Name" className="w-80 px-3 py-1 border rounded-md outline-none bg-transparent" />
                        </div>
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none bg-transparent" />
                        </div>
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input type="password" placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none bg-transparent" />
                        </div>
                        <div className="flex flex-row items-center justify-around mt-4">
                            <button className="bg-pink-500 text-white px-2 py-1 rounded-md hover:bg-pink-700 duration-300">Sign Up</button>
                            <p>Have  Account?
                                <button
                                    className="underline text-blue-500 cursor-pointer"
                                    onClick={() => {document.getElementById("my_modal_3").showModal()}}
                                >
                                    Login</button>
                                    <Login />
                                {" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp