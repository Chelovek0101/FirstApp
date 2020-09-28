import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      <a routerLinkActive="active"
         routerLink="/">Home</a> |

      <a routerLinkActive="active"
         routerLink="/police">Police</a> |

      <a routerLinkActive="active"
         routerLink="/mafia">Mafia</a>
    </p>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'MyApp';
}

// Таблица со списком дел angular to do example
// Название статус независимые модули
