import { Component, Input } from '@angular/core';
import { ArticleComponent } from '../../components/article-component/article-component';
import { ArticleCardComponent } from '../../components/article-card-component/article-card-component';
import { Article } from '../../mock/articles.interface';
import { Articles } from '../../mock/articles.mock';

@Component({
  selector: 'app-home-page',
  imports: [ArticleComponent, ArticleCardComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

  articles: Article[] = Articles;
}
