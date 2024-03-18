import {Component} from "react"
import {Link} from "react-router-dom"
import "./index.css"
class Home extends Component{
    state={isLoggedin:false}
    render(){
        return(
            <div className="containerHome">
                <div className="containerdash">
                <h1 className="head">Board</h1>
                   <p className="head">Dashboard</p>
                   <p className="head">transactions</p>
                   <p className="head">Schedule</p>
                   
                   <p className="head">Users</p>
                   <p className="head">Settings</p>
                </div>
                <div className="containerleft">
        
                    <div>
                        <h1>Dashboard</h1>
                        <Link to="/login"><button className="butt">Click to go to Login Page</button></Link>
                        
                    </div>
                    <div className="contd1">
                       <div className="contdi1">
                            <p>Total Revenues</p>
                            <h1>$2,129,430</h1>
                       </div>
                       <div className="contdi2">
                            <p>Total Transactions</p>
                            <h1>$1,520</h1>
                       </div>
                       <div className="contdi3">
                            <p>Total Likes</p>
                            <h1>$9,721</h1>
                       </div>
                       <div className="contdi4">
                            <p>Total Users</p>
                            <h1>$892</h1>
                       </div>
                    </div>
                    <div className="x">
                        <h1>Activities</h1>
                    </div>
                    <div className="z">
                    <div className="y">
                        <h1>Top products</h1>
                    </div>
                    <div className="y">
                        <h1>Today's schedule</h1>
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Home