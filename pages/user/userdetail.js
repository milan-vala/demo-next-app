import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const userDetails = (props) => {
    const { user } = props;
    const classes = useStyles();
    console.log("user props ====>", props);
    return (
        <div>
            <div>{props.title}</div>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">name</TableCell>
                        <TableCell align="right">phone</TableCell>
                        <TableCell align="right">username</TableCell>
                        <TableCell align="right">website</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>

                    { !user ? ( 
                        <TableRow>
                            <TableCell component="th" scope="row" />
                            <TableCell align="right"/>
                            <TableCell align="right"/>
                            <TableCell align="right"/>
                            <TableCell align="right"/>
                        </TableRow>
                        ) : (
                            <TableRow key={user.id}>
                                <TableCell component="th" scope="row">
                                    {user.id}
                                </TableCell>
                                <TableCell align="right">{user.name}</TableCell>
                                <TableCell align="right">{user.phone}</TableCell>
                                <TableCell align="right">{user.username}</TableCell>
                                <TableCell align="right">{user.website}</TableCell>
                            </TableRow>
                        )
                    }
                        
                    
                    </TableBody>
                </Table>
            </TableContainer>
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

    const userUrl = "https://jsonplaceholder.typicode.com/users/" + ctx.query.userId;
    const userResponse = await fetch(userUrl);
    const user = await userResponse.json()

    return {
      props : {
        user,
      },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(userDetails);