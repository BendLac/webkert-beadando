import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OnHoverDirective } from './on-hover.directive';

@NgModule({
    declarations: [OnHoverDirective],
    imports: [CommonModule],
    exports: [OnHoverDirective]
})
export class OnHoverModule {}