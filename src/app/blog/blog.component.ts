import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    (document.getElementById('All Posts') as HTMLElement).style.display='block'
  }

  openCity(evt: any, name: string) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');

    for (i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    (document.getElementById(name) as HTMLElement).style.display = 'block';
    evt.currentTarget.className += ' active';
  }
}
