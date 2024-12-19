import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Importation des modules personnalisés
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared/shared.module';
import { AuthModule } from './core/auth/auth.module';
import { UserManagementModule } from './user-management/user-management.module'; // Importez votre module

// Composant principal
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, // Déclaration du composant principal
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UserManagementModule,
    FormsModule,
    AuthModule, // Module pour l'authentification
    CoreModule, // Module pour les services globaux
    SharedModule, // Module pour les composants réutilisables
  ],
  providers: [], // Services globaux définis dans CoreModule
  bootstrap: [AppComponent], // Composant de démarrage de l'application
})
export class AppModule {}
