import Link from "next/link";
import classes from "./Button.module.css";

interface Props {
    children: React.ReactNode;
    link?: string;
    onClick?: () => void;
}

export default function Button(props: Props) {
    if (props.link) {
        return (
            <Link href={props.link} className={classes.btn}>
                {props.children}
            </Link>
        );
    }

    return (
        <button className={classes.btn} onClick={props.onClick}>
            {props.children}
        </button>
    );
}