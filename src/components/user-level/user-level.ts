import {Component} from '@angular/core';
import {UserProvider} from "../../providers/user/user";

@Component({
    selector: 'user-level',
    templateUrl: 'user-level.html'
})
export class UserLevelComponent {

    level: any = '';

    constructor(private userProvider: UserProvider) {
        userProvider.level.then((level) => {
            this.level = level;
        });
    }

}
