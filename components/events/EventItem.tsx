import { SocialEvent } from "@/types/SocialEvent";
import classes from "./EventItem.module.css";
import Button from "../ui/Button";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

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
                        <DateIcon />
                        <time>{formattedDate}</time>
                    </div>

                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>

                <div className={classes.actions}>
                    <Button link={link}>
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}