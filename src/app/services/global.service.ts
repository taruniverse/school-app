import { Injectable } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private plaform: Platform) {}

  public setDarkStatusBar(): void {
    StatusBar.setStyle({ style: Style.Dark });
  }

  public setLightStatusBar(): void {
    StatusBar.setStyle({ style: Style.Light });
  }

  public isPlatform(type: any) {
    return this.plaform.is(type);
  }

  vibrationHaptics = {
    hapticsImpactMedium : async () => {
      await Haptics.impact({ style: ImpactStyle.Medium });
    },

    hapticsImpactLight: async () => {
      await Haptics.impact({ style: ImpactStyle.Light });
    },

    hapticsVibrate : async () => {
      await Haptics.vibrate();
    },

    hapticsSelectionStart : async () => {
      await Haptics.selectionStart();
    },

    hapticsSelectionChanged : async () => {
      await Haptics.selectionChanged();
    },

    hapticsSelectionEnd : async () => {
      await Haptics.selectionEnd();
    },

  }
}
