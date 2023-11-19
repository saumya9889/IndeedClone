import React from 'react'

const SignUp = ({handleSignIn}) => {
    return (
        <div className="sign-up-wrapper">
            <div class="login-form">
                <h2>Sign-Up</h2>
                <form>
                    <div className="form-grid">
                        <div className="input-wrap">
                            <input type="text" placeholder="first name" required />
                        </div>
                        <div className="input-wrap">
                            <input type="text" placeholder="last name" required />
                        </div>
                        <div className="input-wrap">
                            <input type="email" placeholder="email" required />
                        </div>
                        <div className="input-wrap">
                            <input type="password" placeholder="Password" required />
                        </div>
                    </div>
                    <div className="input-wrap signup-btn-grid">
                        <input class="btn" type="submit" value="Sing In" />
                    </div>
                    <p className="input-wrap btn-grid signup-btn-grid">
                        <a href="#">Forget password?</a>
                        <h2 className="login-and-signUp"  onClick={handleSignIn}>login</h2>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignUp
