import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  root: {};
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    padding: theme.spacing(1),
  },
}));
