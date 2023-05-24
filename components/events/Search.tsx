import { useRef } from "react";
import Button from "../ui/Button";
import classes from "./Search.module.css";

interface Props {
    onSearch: (year: string, month: string) => void;
}

export default function Search(props: Props) {
    const yearinputRef = useRef<HTMLSelectElement>();
    const monthinputRef = useRef<HTMLSelectElement>();

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();

        const year = yearinputRef.current?.value ?? "";
        const month = monthinputRef.current?.value ?? "";

        props.onSearch(year, month);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
    
                    <select id="year" ref={yearinputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                </div>

                <div className={classes.control}>
                    <label htmlFor="month">Month</label>

                    <select id="month" ref={monthinputRef}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">Septemper</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>

                <Button>Find Events</Button>
            </div>
        </form>
    )
}