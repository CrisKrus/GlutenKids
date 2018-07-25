import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

//components
import {MyApp} from './app.component';

// pages
import {HomePage} from '../pages/home/home';
import {MenuPage} from "../pages/menu/menu";
import {RecipeListPage} from "../pages/recipe-list/recipe-list";
import {RecipePage} from "../pages/recipe/recipe";
import {CartPage} from "../pages/cart/cart";

// firebase
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {environments} from "../environments";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        MenuPage,
        RecipeListPage,
        RecipePage,
        CartPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(environments.firebase),
        AngularFireDatabaseModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        MenuPage,
        RecipeListPage,
        RecipePage,
        CartPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
