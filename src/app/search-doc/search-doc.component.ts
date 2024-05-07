import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchItem, SearchService } from './services/search.service';

@Component({
  selector: 'search-doc',
  templateUrl: './search-doc.component.html',
  styleUrls: ['./search-doc.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDocComponent implements OnInit {
  searchText: string = '';
  searchedItems: any[] = [
    {
      title: 'Title 1',
      subtitle: 'Subtitle 1',
      description: 'This is the description for item 1.'
    },
    {
      title: 'Title 2',
      subtitle: 'Subtitle 2',
      description: 'This is the description for item 2.'
    },
    {
      title: 'Title 3',
      subtitle: 'Subtitle 3',
      description: 'This is the description for item 3.'
    }
  ];

  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.searchText = params.get('input') ?? '' ;
      this.onSearch();
    });
  }

  onSearch() {
    this.searchItemsBasedOnPrompt(this.searchText)
      .subscribe((data: any) => {
        const output = (Object
        .values(data) as Array<SearchItem[]>)
        .flat()
        .map((item: SearchItem) => ({
          title: item.fileName,
          subtitle: `Page: ${item.metadata.page}`,
          description: item.data
        }));
        this.searchedItems = output;
        console.log(this.searchedItems);
      });
  }

  searchItemsBasedOnPrompt(prompt: string) {
    return this.searchService.search(prompt);
  }
}
