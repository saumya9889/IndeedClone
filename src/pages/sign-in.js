import React, { useState } from 'react';
import Logo from "../assets/images/indeedLogo.png";
import SignUp from './sign-up';

const SignIn = ({ closeModal }) => {
    const [status, setStatus] = useState(false);
    const handleSignUp = () => {
        setStatus(true)
    }
    const handleSignIn = () => {
        setStatus(false)
    }
    return (
        <div className="sign-in-wrapper">

            <div class="wrapper">
                <div className="close" onClick={closeModal}>X</div>
                <div class="container">
                    <div class="col-left">
                        <div class="login-text">
                            <img src={Logo} alt='logo' />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                malesuada vel libero vitae eleifend. Fusce tristique ipsum lorem.
                            </p>
                        </div>
                    </div>
                    <div class="col-right">
                        {!status ? <div class="login-form">
                            <h2>Login</h2>
                            <form>
                                <p>
                                    <input type="text" placeholder="Username" required />
                                </p>
                                <p>
                                    <input type="password" placeholder="Password" required />
                                </p>
                                <p>
                                    <input class="btn" type="submit" value="Sing In" />
                                </p>
                                <p className="btn-grid">
                                    <a href="#">Forget password?</a>
                                    <h2 className="login-and-signUp" onClick={handleSignUp}>Create an account.</h2>
                                </p>
                            </form>
                        </div>
                            : <SignUp handleSignIn={handleSignIn} />}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignIn
