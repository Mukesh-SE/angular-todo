export class Todo {
   sno: number;
   title: string;
   subtitle: string;
   desc: string;
   active: boolean;

   constructor(sno: number, title: string, subtitle: string,  desc: string, activ: boolean) {
     this.sno = sno;
     this.title = title;
     this.subtitle = subtitle;
     this.desc = desc;
     this.active = activ;
   }
}
