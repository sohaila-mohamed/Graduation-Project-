export interface IVital{
    vital_name:string;
    label:string,
    place_holder:string,
    isDisabled:boolean,
    icon:string;
    name:string;
    
}
export class UpVitals{
    name:string
    value:any
}

export interface IDoctor{
    name:string,
    img:string
}