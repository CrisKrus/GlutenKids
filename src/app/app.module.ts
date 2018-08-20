import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
//components
import {MyApp} from './app.component';
import {BackButtonComponent} from "../components/back-button/back-button";
// pages
import {HomePage} from '../pages/home/home';
import {MenuPage} from "../pages/menu/menu";
import {RecipeListPage} from "../pages/recipe-list/recipe-list";
import {RecipePage} from "../pages/recipe/recipe";
import {ShoppingCartPage} from "../pages/shopping-cart/shopping-cart";
import {CookingPage} from "../pages/cooking/cooking";
import {LoginPage} from "../pages/login/login";
import {SignupPage} from "../pages/signup/signup";
// firebase
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {environments} from "../environments";
// providers
import {RecipeProvider} from '../providers/recipe/recipe';
import {IngredientProvider} from '../providers/ingredient/ingredient';
import {UserProvider} from '../providers/user/user';
import {AngularFireAuth} from "angularfire2/auth";
import {ToastProvider} from '../providers/toast/toast';
import {ValidatorProvider} from '../providers/validator/validator';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        MenuPage,
        RecipeListPage,
        RecipePage,
        ShoppingCartPage,
        CookingPage,
        BackButtonComponent,
        LoginPage,
        SignupPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(environments.firebase),
        AngularFireDatabaseModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        MenuPage,
        RecipeListPage,
        RecipePage,
        ShoppingCartPage,
        CookingPage,
        LoginPage,
        SignupPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        RecipeProvider,
        IngredientProvider,
        AngularFireAuth,
        UserProvider,
    ToastProvider,
    ValidatorProvider
    ]
})
export class AppModule {
}
