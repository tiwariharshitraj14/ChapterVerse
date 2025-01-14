const Login = () => {
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Login</h3>
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
                        <button className="bg-pink-500 text-white px-2 py-1 rounded-md hover:bg-pink-700 duration-300">Login</button>
                        <p>Not registered? <span className="underline text-blue-500 cursor-pointer">Sign up</span>{" "}</p>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Login