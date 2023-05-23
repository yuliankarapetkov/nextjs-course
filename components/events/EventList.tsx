import { SocialEvent } from "@/types/SocialEvent";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

interface Props {
    events: SocialEvent[];
}

export default function EventList({ events }: Props) {
    return (
        <ul className={classes.list}>
            {events.map((event) => (<EventItem key={event.id} event={event} />))}
        </ul>
    )
}