import { useNavigate } from "react-router-dom"

export default function Home({SetIsLoggedIn}) {
    const navigate = useNavigate()
    return (
        <>
            <h1>You're back!</h1>
            <h2>Welcome home.</h2>
            <button onClick={() => navigate("/")}>Back to Welcome</button>
        </>
    )
}