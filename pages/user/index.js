import React from "react";
import Link from "next/link";
import UserDetails from "./userdetail";

const Users = (props) => {

    return (
        <div>
            <ul>
                {
                    props.users.map(user => (
                        <li key={user.id}>
                            <Link href={{ pathname: 'user/userdetail', query: { userId: JSON.stringify(user.id) } }}>
                                {user.name}
                            </Link>
                        </li>  
                    ))
                }
            </ul>
            <div>
                <UserDetails title="USER" />
            </div>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    const usersUrl = "https://jsonplaceholder.typicode.com/users";
    const userResponse = await fetch(usersUrl);
    const users = await userResponse.json()
  
    return {
      props : {
        users : users,
      },
    };
}

export default Users;