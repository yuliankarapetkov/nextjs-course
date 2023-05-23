interface Props {
    event: any;
}

export default function EventItem({ event }: Props) {
    return (
        <li key={event.id}>{event.name}</li>
    )
}