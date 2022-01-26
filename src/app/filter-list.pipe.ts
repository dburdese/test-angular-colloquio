import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(items: any[], searchText: string, filterBy: string): any[] {
    
    //return an empty array if the items is false
    if(!items) {
      return [];
    }

    //return the original array if searchText is empty
    if(!searchText) {
      return items;
    }
    
    //convert searchText to lower case 
    searchText = searchText.toLowerCase();
    
    //return the searchText array
    return items.filter(element => {
      if(element && element[filterBy]) {
         return element[filterBy].toLowerCase().includes(searchText);
      }
    })
  }

}
