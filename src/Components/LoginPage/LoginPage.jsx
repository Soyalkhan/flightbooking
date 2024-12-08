import React from 'react'
import './LoginPage.css'

const LoginPage = () => {
    return(
      <div class="sonu">
        <div class="container">
            <div class="drop">
                <div class="content">
                    <h2>Sign in</h2>
                    <form>
                        <div class="inputBox">
                            <input type="text" placeholder="Username"></input>
                        </div>
                        <div class="inputBox">
                            <input type="password" placeholder="password"></input>
                        </div>
                            <div class="inputBox">
                            <input type="submit" value="Login"></input>
                        </div>
                    </form>
                </div>
            </div>
            <a href="#" class="btns">Forget<br></br> Password</a>
            <a href="#" class="btns signup">Signup</a>
        </div> 
    </div>
    )
}
export default LoginPage
