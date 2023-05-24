import EventList from "@/components/events/EventList";
import Search from "@/components/events/Search";
import { getAllEvents } from "@/dummy-data"
import { useRouter } from "next/router";

export default function Events() {
    const events = getAllEvents();
    const router = useRouter();

    function searchHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <>
            <Search onSearch={searchHandler} />

            <EventList events={events} />
        </>
    )
}