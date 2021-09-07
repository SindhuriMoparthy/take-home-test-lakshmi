import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm : FormGroup;
  searchData = ['John', 'Johnson', 'Joseph', 'George', 'Tom'];
  // searchData: any;
  searchText :'';
  // showData  = false;
  selectedValue = [];
  selectable = true;
  removable = true;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]),
    })

    // return this.dataService.getPatients().subscribe(data => this.searchData = data);
  }

  get f() { return this.searchForm.controls; }

  search(value:any){
    if (value){
    this.selectedValue.push(value);
      console.log(this.selectedValue)
    }
  }

  remove(value:string): void {
    const index = this.selectedValue.indexOf(value);

    if (index >= 0) {
      console.log(index);
      this.selectedValue.splice(index, 1);
      if(this.searchText === value)
        this.searchText = '';
    }
  }

  select(value:any): void{
    this.searchText = value;
  }

}
