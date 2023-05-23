import Link from "next/link";

interface Props {
    event: any;
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
        <li>
            <img src={`/${image}`} alt={title} />

            <div>
                <div>
                    <h2>{title}</h2>

                    <div>
                        <time>{formattedDate}</time>
                    </div>

                    <div>
                        <address>{formattedAddress}</address>
                    </div>
                </div>

                <div>
                    <Link href={link}>Explore Event</Link>
                </div>
            </div>
        </li>
    )
}