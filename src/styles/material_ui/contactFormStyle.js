import { makeStyles } from '@material-ui/core/styles';

const contactFormStyle = makeStyles({
  root: {
    marginTop: '10%',
  },
  gridCell: {
    textAlign: 'right',
  },
  fields: {
    color: 'red',
    width: '100%',
    '& label': {
      color: 'grey',
    },
    '& label.Mui-focused': {
      color: 'grey',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'grey',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgb(198,210,239)',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
    '&.Mui-focused fieldset': {
      borderColor: 'grey',
    },
  },
});

export default contactFormStyle;
