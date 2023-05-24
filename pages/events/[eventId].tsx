import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

export default function Event() {
    const router = useRouter();

    const { eventId } = router.query;
    const event = getEventById(eventId as string || "");

    return (
        <div>
            Single event
        </div>
    );
}