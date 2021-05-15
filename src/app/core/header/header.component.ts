import {
  Component,
  EventEmitter,
  Injectable,
  OnInit,
  Output
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  constructor(
    private dsService: DataStorageService,
    private rService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  saveData() {
    this.dsService.storeData().subscribe((response: any) => {
      console.log(response);
    });
  }
  onFetchData() {
    this.dsService.fetchData();
  }
}
