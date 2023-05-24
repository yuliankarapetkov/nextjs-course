import classes from './LogisticsItem.module.css';

interface Props {
  icon: any;
  children: React.ReactNode;
}

export default function LogisticsItem(props: Props) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}
