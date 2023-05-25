import Button from '../ui/Button';
import classes from './ResultsTitle.module.css';

interface Props {
  date: Date;
}

export default function ResultsTitle(props: Props) {
  const { date } = props;

  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {formattedDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}
