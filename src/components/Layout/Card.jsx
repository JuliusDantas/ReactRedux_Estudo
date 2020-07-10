import './Card.css'
import '@material-ui/core/Button/Button.js'
import React from 'react'

import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/core/IconButton/IconButton'
import Menu from './Menu'

export default props => {

    const estilo = {
        backgroundColor: props.color || '#795548',
        borderColor: props.color || '#795548'
    }

    const theme = useTheme();
    
    const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);


  const classes = useStyles(theme);

    return (
        <div className="card" style={estilo}>
            <div className="title">{props.titulo}
              <Menu />
            </div>
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