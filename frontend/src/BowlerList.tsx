import { Bowler } from './types/Bowler';
import { useEffect, useState } from "react";

function BowlerList() {

    const [bowlers, setBowlers] = useState<Bowler[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch("http://localhost:5000/api/Bowler");
            const data = await response.json();
            setBowlers(data);
        };

        fetchProjects();
    }, []);

    return(
        <>
            {bowlers.map((b) =>
                <div id="bowlerCard">
                    <h3>{b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}</h3>
                    <ul>
                        <li>Team Name: {b.teamID}</li>
                        <li>Address: {b.bowlerAddress}</li>
                        <li>City: {b.bowlerCity}</li>
                        <li>State: {b.bowlerState}</li>
                        <li>Zip: {b.bowlerZip}</li>
                        <li>Phone Number: {b.bowlerPhoneNumber}</li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default BowlerList;