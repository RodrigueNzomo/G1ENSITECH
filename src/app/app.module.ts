import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Importation des modules personnalisés
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared/shared.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { CoursesModule } from './courses/courses.module';
import { GradesModule } from './grades/grades.module';
import { StatisticsModule } from './statistics/statistics.module';

// Composant principal
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, // Déclaration du composant principal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule, // Pour les services et gardes
    SharedModule, // Composants réutilisables
    StudentsModule, // Module des étudiants
    TeachersModule, // Module des enseignants
    CoursesModule, // Module des cours
    GradesModule, // Module des notes
    StatisticsModule, // Module des statistiques
  ],
  providers: [], // Pas de services globaux supplémentaires pour le moment
  bootstrap: [AppComponent], // Composant de démarrage de l'application
})
export class AppModule {}
