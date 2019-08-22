import { Component } from '@angular/core';

/*interface AppState {
  message: object;
}*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //constructor(private store: Store<AppState>) {}
  title = 'Orange-V2';
}
