import './Card.css'
import React from 'react'

import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/core/IconButton/IconButton'

export default props => {

    const estilo = {
        backgroundColor: props.color || '#795548',
        borderColor: props.color || '#795548'
    }

    const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);


  const classes = useStyles();

    return (
        <div className="card" style={estilo}>
            <div className="title">{props.titulo}</div>
            <div className="content">
                {props.children}
            </div>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
                Delete
            </Button>
        </div>
    );

};