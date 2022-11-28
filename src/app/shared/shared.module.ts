import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import {
  ButtonModule,
  CardModule,
  CarouselModule,
  ModalModule,
  NavModule,
  SpinnerModule,
  TabsModule,
  TooltipModule,
} from '@coreui/angular';
import { ClientFeedbackCardComponent } from './client-feedback-card/client-feedback-card.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryPickerComponent } from './category-picker/category-picker.component';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { BasicBannerComponent } from './basic-banner/basic-banner.component';
import { MidnightCountdownTimerComponent } from './midnight-countdown-timer/midnight-countdown-timer.component';

@NgModule({
  declarations: [
    ClientFeedbackCardComponent,
    CategoryCardComponent,
    CategoryPickerComponent,
    GridContainerComponent,
    ProductCardComponent,
    BasicBannerComponent,
    MidnightCountdownTimerComponent,
  ],
  imports: [
    CommonModule,
    IconModule,
    CarouselModule,
    ButtonModule,
    ModalModule,
    NavModule,
    TabsModule,
    SpinnerModule,
    TooltipModule
  ],
  providers: [IconSetService],
  exports: [
    IconModule,
    CarouselModule,
    CardModule,
    ModalModule,
    NavModule,
    ButtonModule,
    TabsModule,
    SpinnerModule,
    ClientFeedbackCardComponent,
    CategoryCardComponent,
    CategoryPickerComponent,
    GridContainerComponent,
    ProductCardComponent,
    BasicBannerComponent,
    TooltipModule,
    MidnightCountdownTimerComponent
  ],
})
export class SharedModule {}
