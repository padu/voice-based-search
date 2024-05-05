import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.searchText = params.get('input') ?? '' ;
      this.onInputChange();
    });
  }

  onInputChange() {
    //this.searchedItems = this.getItems(this.searchText);
  }

  getItems(searchText: string) {
    return this.searchedItems.filter(item => item.includes(searchText));
  }

}
