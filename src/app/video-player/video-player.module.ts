import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player.component';
// import { AzureVideoIndexerPlayerModule } from '@azure/video-indexer-widgets';


@NgModule({
  declarations: [
    VideoPlayerComponent
  ],
  imports: [
    CommonModule,
    // AzureVideoIndexerPlayerModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class VideoPlayerModule { }
