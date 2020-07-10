import '../Layout/Card.css'
import React from 'react';
import {
  withStyles,
  makeStyles,

} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import perfil from '../../data/perfil'
import orgao from '../../data/orgao'
import beneficio from '../../data/beneficio'
import Alert from '../../components/basic/Alert'
import SaveIcon from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button'

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
          className={classes.margin}
          label="Nome"
          variant="outlined"
          style={{ width: 415 }}
          id="custom-css-outlined-input"
        />
        <Autocomplete
          id="custom-css-outlined-input"
          className={classes.margin}
          options={perfil}
          getOptionLabel={(option) => option.nome}
          style={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Perfil" variant="outlined" />}
        />
        <Autocomplete
          id="custom-css-outlined-input"
          className={classes.margin}
          options={orgao}
          getOptionLabel={(option) => option.nome}
          style={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Orgão" variant="outlined" />}
        />
        <Autocomplete
          id="custom-css-outlined-input"
          className={classes.margin}
          options={beneficio}
          getOptionLabel={(option) => option.nome}
          style={{ width: 415 }}
          renderInput={(params) => <TextField {...params} label="Tipo Benefício" variant="outlined" />}
        />
        <CssTextField
          className={classes.margin}
          label="Matricula ou Benefício"
          variant="outlined"
          style={{ width: 200 }}
          id="custom-css-outlined-input"
        />
        <CssTextField
          className={classes.margin}
          label="Renda"
          variant="outlined"
          style={{ width: 200 }}
          id="custom-css-outlined-input"
        />
        <CssTextField
          className={classes.margin}
          label="RG ou CNH"
          type="number"
          variant="outlined"
          style={{ width: 200 }}
          id="custom-css-outlined-input"
        />

        <TextField
          variant="outlined"
          id="custom-css-outlined-input"
          label="Data Nascimento"
          type="date"
          style={{ width: 200 }}
          className={classes.margin}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <Alert />
      <div className="btn">
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Continuar
        </Button>
      </div>
    </>
  );
}
