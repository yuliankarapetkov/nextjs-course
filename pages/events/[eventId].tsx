import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import EventSummary from "@/components/event-detail/EventSummary";
import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";

export default function Event() {
    const router = useRouter();

    const { eventId } = router.query;
    const event = getEventById(eventId as string || "");

    if (!event) {
        return <p>No event found!</p>;
    }

    return (
        <>
            <EventSummary title={event.title} />

            <EventLogistics date={event.date} address={event?.location} image={event?.image} imageAlt={event.title} />

            <EventContent>
                <p>{event?.description}</p>
            </EventContent>
        </>
    );
}