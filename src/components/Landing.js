import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Landing extends Component {
    render() {
        const users = this.props.users
        return <div id="Landing">
            <div className="users-heder">WHO'S Watching ?</div>
            <div className="landing">
                {users.map(u => {
                    const styleOBJ = { background: u.background }
                    const url = `/${u.name}/catalog/`
                    return < Link key={u.name} style={styleOBJ} className="users" to={url} >
                        <span >{u.name}</span>
                    </Link>
                })}
            </div>
        </div >
    }
}
export default Landing;