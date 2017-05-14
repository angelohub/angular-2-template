import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = "Music Playlist";
    videos: Array<Video>;

    constructor() {
        this.videos = [
            new Video(1, "Yuni Wa - A Blunt in the Sunset", "f1uaaniqPfw"),
            new Video(2, "[ bsd.u ] - bsd.u type beat ", "uBdwqogsYlg")
        ]
    }
}
