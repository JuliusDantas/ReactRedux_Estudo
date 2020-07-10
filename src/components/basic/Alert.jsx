import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 430,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function DescriptionAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert> */}
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        Ao continuar, você aceita receber contato sobre empréstimo via <strong>WhatsApp! <WhatsAppIcon /></strong>
      </Alert>
      {/* <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert> */}
    </div>
  );
}
