import React from 'react';
import {
  withStyles,
  makeStyles,
  
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from '../basic/Modal'
import films from '../../data/films'
import Autocomplete from '@material-ui/lab/Autocomplete'; 



const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#e8eaf6',
      },
      '&:hover fieldset': {
        borderColor: '#e8eaf6',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1a237e',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxwidth: 500,
    minwidth: 500,
  },
  margin: {
    margin: theme.spacing(1),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));



export default function CustomizedInputs() {
  const classes = useStyles();

  return (
      <>
        <form className={classes.root} noValidate>
            <CssTextField
                className={classes.margin} required
                label="CEP"
                variant="outlined"
                id="custom-css-outlined-input"
            />
            <CssTextField
                className={classes.margin} disabled
                label="Logradouro"
                variant="outlined"
                style={{ width: 300 }}
                id="custom-css-outlined-input"
            />
            <CssTextField
                className={classes.margin}
                label="Numero"
                variant="outlined"
                style={{ width: 100 }}
                id="custom-css-outlined-input"
            />
            <CssTextField
                className={classes.margin}
                label="Complemento"
                variant="outlined"
                style={{ width: 200 }}
                id="custom-css-outlined-input"
            />
            <CssTextField
                className={classes.margin} disabled
                label="Bairro"
                variant="outlined"
                style={{ width: 200 }}
                id="custom-css-outlined-input"
            />
            <CssTextField
                className={classes.margin} disabled
                label="Cidade"
                variant="outlined"
                style={{ width: 350 }}
                id="custom-css-outlined-input"
            />
            <CssTextField
                className={classes.margin} disabled
                label="UF"
                variant="outlined"
                style={{ width: 50 }}
                id="custom-css-outlined-input"
            />
            <TextField
                variant="outlined"
                id="custom-css-outlined-input"
                label="Birthday"
                type="date"
                style={{ width: 200 }}
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
            <Autocomplete
                id="custom-css-outlined-input"
                className={classes.margin}
                options={films}
                getOptionLabel={(option) => option.title}
                style={{ width: 400 }}
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
            />
        
        </form>
        <Modal />
    </>
  );
}
