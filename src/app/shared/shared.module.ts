// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importation du RouterModule

// Importation des composants
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    // HeaderComponent, // Déclaration du composant header
    // FooterComponent, // Déclaration du composant footer
    // SidebarComponent, // Déclaration du composant sidebar
  ],
  imports: [
    CommonModule, // Importation du module CommonModule pour l'utilisation des directives de base
    RouterModule, // Importation du RouterModule pour utiliser la navigation
  ],
  exports: [
    // HeaderComponent, // Exportation pour utilisation dans d'autres modules
    // FooterComponent, // Exportation pour utilisation dans d'autres modules
    // SidebarComponent, // Exportation pour utilisation dans d'autres modules
    RouterModule, // Exportation du RouterModule pour utilisation dans d'autres modules
  ],
})
export class SharedModule {}
