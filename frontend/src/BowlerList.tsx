import { Bowler } from './types/Bowler';
import { useEffect, useState } from "react";

function BowlerList() {

    const [bowlers, setBowlers] = useState<Bowler[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch("https://localhost:5000/api/Bowler");
            const data = await response.json();
            
            // Filter bowlers to only include those on the Marlins or Sharks teams
            const filteredBowlers = data.filter((b: Bowler) => 
                b.team.teamName === "Marlins" || b.team.teamName === "Sharks"
            );

            setBowlers(filteredBowlers);
        };

        fetchProjects();
    }, []);

    return(
        <div>
            <h2>Bowler List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Bowler Name</th>
                        <th>Team Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {bowlers.map((b) => (
                        <tr key={b.bowlerID}>
                            <td>{b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}</td>
                            <td>{b.team.teamName}</td>
                            <td>{b.bowlerAddress}</td>
                            <td>{b.bowlerCity}</td>
                            <td>{b.bowlerState}</td>
                            <td>{b.bowlerZip}</td>
                            <td>{b.bowlerPhoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BowlerList;