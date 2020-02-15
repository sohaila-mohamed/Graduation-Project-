
export class createPatient{
      name: String;
      mobile: String;
      email: String;
      password: String;
      age:number;
      address:String; 
      fcmtoken:String;

      constructor(name,mobile,email,password,age,address, fcmtoken)
      {
            this.setAddress(address);
            this.setAge(age);
            this.setEmail(email);
            this.setMobile(mobile);
            this.setName(name);
            this.setPassword(password);
            this.setFCM(fcmtoken);
      }

      setName(name:String)
      {
            this.name = name;
      }
      setMobile(mobile:String)
      {
            this.mobile = mobile;
      }
      setEmail(email:String)
      {
            this.email = email;
      }
      setPassword(password:String)
      {
            this.password=password;
      }
      
      setAge(age:number)
      {
            this.age=age;
      }
      
      setAddress(address:String)
      {
            this.address=address;
      }
      
      setFCM(fcmtoken:String)
      {
            this.fcmtoken = fcmtoken;
      }

      

      

} 