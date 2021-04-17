import React from "react";
import Link from "next/link";
import UserDetails from "./userdetail";
import { connect } from "react-redux";

const Users = (props) => {
    console.log("props in index ===>", props);
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

function mapStateToProps(state) {
    return {
        login: state.login,
    }
}

function mapDispatchToProps(dispatch){
    return {}
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

export default connect(mapStateToProps, mapDispatchToProps)(Users);