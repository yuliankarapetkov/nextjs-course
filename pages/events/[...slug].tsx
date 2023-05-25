import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/ResultsTitle";
import Alert from "@/components/ui/Alert";
import Button from "@/components/ui/Button";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

export default function FilteredEvents() {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug) {
        return <p className="center">Loading...</p>;
    }

    const [year, month] = (slug as string[]).map((s) => +s);
    const isValid = year > 2020 && year < 2030 && month > 0 && month < 13;

    if (!isValid) {
        return (
            <>
                <Alert>
                    Invalid filter. Please adjust your values!
                </Alert>

                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </>
        )
    }

    const filteredEvents = getFilteredEvents({ year, month });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <Alert>
                    No events found for the chosen filter!
                </Alert>

                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </>
        )
    }

    const date = new Date(year, month - 1);

    return (
        <>
            <ResultsTitle date={date} />

            <EventList events={filteredEvents} />
        </>
    );
}