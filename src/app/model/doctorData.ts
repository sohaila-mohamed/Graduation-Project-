
export class doctorData{

    doctorId: number;
    name: string;
    fcmtoken: string;
    mobile: string;
    years_experience: number;
    relationid: number;
    user_image:String;
      
  
    constructor(doctorId?: number,
      name?: string,
      fcmtoken?: string,
      mobile?: string,
      years_experience?: number,
      relationid?: number,
                user_image?:String
    )
    {
      this.doctorId= doctorId;
      this.name= name;
      this.fcmtoken= fcmtoken;
      this.mobile= mobile;
      this.years_experience= years_experience;
      this.relationid= relationid;
      this.user_image=user_image;
    }
    
  }  
