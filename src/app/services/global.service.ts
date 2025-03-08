import { Injectable } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public setDarkStatusBar():void {
    StatusBar.setStyle({ style: Style.Dark });
  }

  public setLightStatusBar() {
    StatusBar.setStyle({ style: Style.Light });
  }
}
