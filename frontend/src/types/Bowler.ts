export interface Team {
    teamID: number;
    teamName: string;
}
export interface Bowler {
    bowlerID: number;
    bowlerLastName: string;
    bowlerFirstName: string;
    bowlerMiddleInit: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
    teamID: number;
    team: Team;
}