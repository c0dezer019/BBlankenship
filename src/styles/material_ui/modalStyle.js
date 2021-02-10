import { makeStyles } from '@material-ui/core/styles';

const modalStyle = makeStyles({
  root: {
    backgroundColor: 'rgb(45, 42, 46)',
    borderRadius: 10,
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '400px',
    height: '200px',
    position: 'absolute',
    left: '37%',
    top: '33%',
    textAlign: 'center',
  },
  closeButton: {
    width: 100,
    marginTop: 20,
  },
  divider: {
    width: '90%',
    color: 'grey',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '5% 0 1% 20%',
    textAlign: 'center',
  },
  message: {
    marginTop: 20,
  },
});

export default modalStyle;
