export class Serie
{
    private id: number;
    private name: string;
    private channel: string;
    private seasons: number;

    constructor(id: number, name: string, channel: string, seasons: number)
    {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
    }
}