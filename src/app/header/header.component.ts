import { Component, EventEmitter, Output } from '@angular/core';
// import { emit } from 'cluster';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})


export class HeaderComponent {
   @Output() feautreSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this.feautreSelected.emit(feature);
    }
}
