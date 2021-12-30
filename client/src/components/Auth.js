import { useState } from "react"

const Auth = () => {

    const [isLogin, setIsLogin] = useState(true)

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(false)

    const handleSubmit = () => {
        if(password !== confirmPassword){
            setError(true)
            return
        }
    }
    return (
        <div className="auth-container">
            <div className="auth-container-box">
                <div className="auth-container-form">
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {!isLogin &&
                        <input 
                            type="password"
                            id="password-check"
                            name="password-check"
                            placeholder="Confrim Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    }
                    {error && <p>* Make Sure Password Match</p>}
                    <button className="standard-button" onClick={handleSubmit}>Go!</button>
                </div>
                <div className="auth-options">
                <button
                        onClick={() => setIsLogin(false)}
                        style={{ backgroundColor: !isLogin ? '#151a1f' : '#070a0d'}}
                    >Sign up</button>
                    <button
                        onClick={() => setIsLogin(true)}
                        style={{ backgroundColor: isLogin ? '#151a1f' : '#070a0d'}}
                    >Login</button>
                </div>
            </div>
        </div>
    )
}

export default Auth
