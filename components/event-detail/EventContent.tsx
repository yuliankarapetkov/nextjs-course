import classes from './EventContent.module.css';

interface Props {
  children: React.ReactNode;
}

export default function EventContent(props: Props) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}
