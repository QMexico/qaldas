import { Component } from '@angular/core';
import { ArticleComponent } from '../../components/article-component/article-component';
import { ArticleCardComponent } from '../../components/article-card-component/article-card-component';

@Component({
  selector: 'app-home-page',
  imports: [ArticleComponent, ArticleCardComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

  exampleElements: string[] = ['a', 'b', 'c'];
}
