import {Component} from '@angular/core';
import items from 'src/app/fliles/services.json';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  title = 'Dropdown-menü';
 selectedItem: any
  itemsList: { id: number, name: string, title: string, description: string, image: string, alt: string }[] = items;

}
