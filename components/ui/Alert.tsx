import classes from './Alert.module.css';

interface Props {
  children: React.ReactNode;
}

export default function Alert(props: Props) {
  return <div className={classes.alert}>{props.children}</div>;
}
