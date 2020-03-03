export interface IVital{
    label:string;
    place_holder:string;
    isDisabled:boolean;
    icon:string;
    name:string;
    input:number;
    
}

export class UpVitals{
    vital_Name:string
    new_value:any
}
export interface IDoctor{
    name:string,
    img:string
}
export class Ivitals{

      weight :        number
      height :        number
      BMI:            number
      body_fats_ratio:number
     body_water_ratio:number
     stomic_area_fats:number
      bone_desity:    number
      muscle_desity:  number

}
export interface Iconvs{
    created_date: string
    is_readed: number
    ​​msg_subject: string
    ​​name: string
    reciever_id: number
    thread_id:number
    sender_id:number
}