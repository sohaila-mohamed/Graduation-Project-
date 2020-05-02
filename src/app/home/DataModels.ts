/* tslint:disable */
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

      weight :        number;
      height :        number;
      BMI:            number;
      body_fats_ratio:number;
     body_water_ratio:number;
     stomic_area_fats:number;
      bone_desity:    number;
      muscle_desity:  number;

}
export interface Iconvs{
      
    sender_id:number;
    receiver_name:string;
    thread_id:number;
    ​​msg_subject: string;
    created_date: string;
    is_readed: number;
    sender_name:string;
    receiver_name_string:string,
    msg_body:string;
}
export interface Reply{
    sender_id: number,
    reciever_id	:number,
    msg_body:string,
    thread_subject:string,
    fcm_token:string
}
