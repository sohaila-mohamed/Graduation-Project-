
export class doctorData{

    doctorId: number;
    name: string;
    fcmtoken: string;
    mobile: string;
    years_experience: number;
    relationid: number;
      
  
    constructor(doctorId?: number,
      name?: string,
      fcmtoken?: string,
      mobile?: string,
      years_experience?: number,
      relationid?: number)
    {
      this.doctorId= doctorId;
      this.name= name;
      this.fcmtoken= fcmtoken;
      this.mobile= mobile;
      this.years_experience= years_experience;
      this.relationid= relationid;
    }
    
  }  