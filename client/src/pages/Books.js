import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import API from '../utils/API'


// const classes = useStyles();



class Books extends Component {

    //state is init first with books
    state = {
        books: []
    };

    componentDidMount() {
        this.refreshBooks()
    }

    refreshBooks = () => {
        API.getBooks()
            .then(res => {
                this.setState({
                    books: res.data
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={6}>
                    <Paper>xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>xs=12</Paper>
                </Grid>
            </Grid>

        )
    }

}

export default Books;