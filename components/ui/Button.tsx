import Link from "next/link";
import classes from "./Button.module.css";

interface Props {
    children: React.ReactNode;
    link: string;
}

export default function Button(props: Props) {
    return (
        <Link href={props.link} className={classes.btn}>
            {props.children}
        </Link>
    )
}