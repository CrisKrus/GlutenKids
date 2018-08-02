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
import {CookingPage} from "../pages/cooking/cooking";
// firebase
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {environments} from "../environments";
// providers
import {RecipeProvider} from '../providers/recipe/recipe';
import {IngredientProvider} from '../providers/ingredient/ingredient';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        MenuPage,
        RecipeListPage,
        RecipePage,
        CartPage,
        CookingPage
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
        CartPage,
        CookingPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        RecipeProvider,
        IngredientProvider
    ]
})
export class AppModule {
}
