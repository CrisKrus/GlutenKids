import {Injectable} from '@angular/core';
import {Validators} from "@angular/forms";

@Injectable()
export class ValidatorProvider {
    EMAIL_VALIDATOR: Validators =
        Validators.compose([
            Validators.required,
            Validators.email
        ]);

    PASSWORD_VALIDATOR =
        Validators.compose([
            Validators.required,
            Validators.minLength(8)
        ]);
}
