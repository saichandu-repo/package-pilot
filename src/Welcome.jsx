import React, { useState } from 'react';
import './Welcome.css'; // Optional: For additional styling

function Welcome() {
    const [shop, setShop] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
        alert('Logged in!');
    };

    return (
        <>
            {!shop ? (
                <div className="welcome-container">
                    <div className="welcome-left">
                        <h1>Welcome to <span style={{ color: "#60bb46" }}>BigBasket</span></h1>
                        <p>Fresh groceries delivered to your doorstep.</p>
                        <button className="shop-btn" onClick={() => setShop(true)}>Shop Now</button>
                    </div>

                    <div className="welcome-right">
                        <form className="login-form" onSubmit={handleLogin}>
                            <h2>Login</h2>
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit">Login</button>
                            <p>Don't have an account?</p>
                            <button className="register-btn">Register Now</button>
                        </form>
                    </div>
                </div>
            ) : (
                <div style={{ textAlign: "center", marginTop: "100px" }}>
                    <h2>Welcome to the Shop!</h2>
                    <p>You can now browse and buy items.</p>
                    {/* Replace with your shop component or routing logic */}
                </div>
            )}
        </>
    );
}

export default Welcome;
