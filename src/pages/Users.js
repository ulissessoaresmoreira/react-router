import React from 'react'
import { Link } from 'react-router-dom'

    const Users = () => {
        return(
            <>
                <h1>Usuários</h1>
                <ul> 
                    <li>
                        <Link to="/" > Home </Link>                        
                    </li>
                    <li> 
                        <a href="/" > Home </a>
                    </li>
                </ul>
            </>
        )
    }


export default Users