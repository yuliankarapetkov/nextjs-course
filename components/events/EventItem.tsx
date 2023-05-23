import { SocialEvent } from "@/types/SocialEvent";
import Link from "next/link";
import classes from "./EventItem.module.css";

interface Props {
    event: SocialEvent;
}

export default function EventItem({ event }: Props) {
    const { title, image, date, location, id } = event;

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formattedAddress = location.replace(", ", "\n");
    const link = `/events/${id}`

    return (
        <li className={classes.item}>
            <img src={`/${image}`} alt={title} />

            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>

                    <div className={classes.date}>
                        <time>{formattedDate}</time>
                    </div>

                    <div className={classes.address}>
                        <address>{formattedAddress}</address>
                    </div>
                </div>

                <div className={classes.actions}>
                    <Link href={link}>Explore Event</Link>
                </div>
            </div>
        </li>
    )
}