export class Serie
{
    public id: number;
    public name: string;
    public channel: string;
    public seasons: number;
    public descripcion: string;
    public web: string;
    public image: string;


    constructor(id: number, name: string, channel: string, seasons: number, descripcion: string, web: string, image: string)
    {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.descripcion = descripcion;
        this.web = web;
        this. image = image;
    }
}