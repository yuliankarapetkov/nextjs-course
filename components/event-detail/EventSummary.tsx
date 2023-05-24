import classes from './EventSummary.module.css';

interface Props {
  title: string;
}

export default function EventSummary(props: Props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}
