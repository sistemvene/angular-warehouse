import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'home-feat',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}
