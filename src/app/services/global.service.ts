import { Injectable } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private plaform: Platform) { }

  public setDarkStatusBar():void {
    StatusBar.setStyle({ style: Style.Dark });
  }

  public setLightStatusBar():void {
    StatusBar.setStyle({ style: Style.Light });
  }

  public isPlatform(type:any) {
    return this.plaform.is(type)
  }
}
