import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { OtroComponenteComponent } from './otro-componente/otro-componente.component';
import { CmpDatabindingComponent } from './cmp-databinding/cmp-databinding.component';
import { CmpStrInterpolationComponent } from './cmp-databinding/cmp-str-interpolation/cmp-str-interpolation.component';
import { CmpPropertyBindingComponent } from './cmp-databinding/cmp-property-binding/cmp-property-binding.component';
import { CmpEventBindingComponent } from './cmp-databinding/cmp-event-binding/cmp-event-binding.component';
import { CmpTwoWayBindingComponent } from './cmp-databinding/cmp-two-way-binding/cmp-two-way-binding.component';
import { MiChuWayBindingComponent } from './cmp-databinding/mi-chu-way-binding/mi-chu-way-binding.component';
import { CmpRefPlantillaComponent } from './cmp-databinding/cmp-ref-plantilla/cmp-ref-plantilla.component';
import { CmpInputOutputComponent } from './cmp-input-output/cmp-input-output.component';
import { CmpAComponent } from './cmp-input-output/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-input-output/cmp-b/cmp-b.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    OtroComponenteComponent,
    CmpDatabindingComponent,
    CmpStrInterpolationComponent,
    CmpPropertyBindingComponent,
    CmpEventBindingComponent,
    CmpTwoWayBindingComponent,
    MiChuWayBindingComponent,
    CmpRefPlantillaComponent,
    CmpInputOutputComponent,
    CmpAComponent,
    CmpBComponent,
    CmpPipesComponent,
    DoblePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
