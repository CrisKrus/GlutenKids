import {Injectable} from '@angular/core';
import {ToastController} from "ionic-angular";

@Injectable()
export class ToastProvider {

  constructor(public toast: ToastController) {
  }

    warning(message: string) {
        this.toast.create({
            message: message,
            duration: 10000,
            position: 'top'
        }).present();
    }
}
