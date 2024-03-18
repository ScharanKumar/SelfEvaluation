import {Component} from "react"
import "./index.css"
import {Link} from "react-router-dom"

class Login extends Component{
    state={isLoggedin:false}
    render(){
        return(
            <div className="containerLogin">
                <div className="containerBoard">
                    <h1 className="head1">Board.</h1>
                </div>
                <div className="containerLoginside">
                <Link to="/"><button className="butt">Click to go to Home Page</button></Link>
                     <h1>Sign In</h1>
                     <p>Sign in to your account</p>
                     <div className="cont">
                        <div className="cont1">
                        <button className="but1">Sign in with Google</button>
                        </div>
                        <div className="cont1">
                        <button className="but1">Sign in with Apple</button>
                        </div>
            
                     </div>
                     <div className="cont3">
                        <div className="cont4">
                             <p>Email Address</p>
                             <input className="input1" type="text"/>
                             <p>Password</p>
                             <input className="input1" type="password"/>
                             <p className="para">Forget Password?</p>
                             <button className="but2">Sign In</button>
                        </div>
                        <p className="para1">Don't have a account <span className="para">Register here?</span></p>
                     </div>
                </div>
            </div>
        )
    }
}

export default Login