export interface IVital{
    vital_name:string;
    label:string,
    place_holder:string,
    isDisabled:boolean,
    icon:string;
    name:string;
}
export class UpVitals{
    vital_Name:string
    New_Value:number
}

export interface IDoctor{
    name:string,
    img:string
}