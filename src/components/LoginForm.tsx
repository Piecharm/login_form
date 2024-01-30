import { FormEvent, useState } from "react";
import whitedeskImg from "../assets/white-desk.jpg";

export const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img
                    className="w-full h-full object-cover"
                    src={whitedeskImg}
                    alt=""
                />
            </div>
            <div className="bg-gray-100 flex flex-col justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-[400px] w-full mx-auto bg-white p-4"
                >
                    <h2 className="text-4xl font-bold text-center py-6">
                        Sign in{" "}
                    </h2>
                    <div className="flex flex-col py-2">
                        <label>Email:</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border p-2"
                        />
                    </div>
                    <div className="flex flex-col py-2">
                        <label>Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                            className="border p-2"
                        />
                    </div>
                    <button
                         className="border w-full my-5 py-2 bg-teal-900 hover:bg-teal-700 text-white font-bold"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
