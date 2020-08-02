import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function FAQ() {
  const classes = useStyles()

    return (
      <IconButton variant="contained" className={classes.menuButton} color="inherit">
        <Typography component="h1" variant="h5">
          <Link style={{color: 'black', textDecoration: 'none'}} to='/faq'>
            FAQ
          </Link>
        </Typography>
      </IconButton>
    )

  
}

