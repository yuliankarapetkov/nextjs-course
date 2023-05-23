import EventItem from "./EventItem";

interface Props {
    events: any[];
}

export default function EventList({ events }: Props) {
    return (
        <ul>
            {events.map((event) => (<EventItem key={event.id} event={event} />))}
        </ul>
    )
}