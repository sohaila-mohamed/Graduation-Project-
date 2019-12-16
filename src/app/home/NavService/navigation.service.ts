import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private _router: Router,
    private route : ActivatedRoute,
    ) { }
    
  navigateTo(path:string)
    {
        this._router.navigate([path])
        .then(() => console.log("navigated to " + path))
        .catch(err => console.log("error navigating to "+path +" + err"));
    }
    
}
