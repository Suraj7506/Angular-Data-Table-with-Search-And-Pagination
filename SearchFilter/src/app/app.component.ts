import { Component , ViewChild} from '@angular/core';
import { TableService } from './table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface UserData{
  id : string,
  userId : string,
  Title : string,
  Body : string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DarkMode';
  isDarkTheme = false;
  
  displayedColumn : string[] = ['id', 'userId','title', 'body']
  dataSource! : MatTableDataSource<UserData>
  @ViewChild(MatPaginator) paginator! : MatPaginator
  @ViewChild(MatSort) sort! : MatSort
  posts:any;
  constructor (private service: TableService) {
    this.service.getData().subscribe((data) =>{
      console.log(data)
      this.posts= data
      this.dataSource = new MatTableDataSource(this.posts)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
    applyFilter (event : Event){
      const FilterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = FilterValue.trim().toLowerCase();
      if (this.dataSource.paginator){
        this.paginator.firstPage()
      }
    }

    
      
      togglebutton(){
        this.isDarkTheme =! this.isDarkTheme
        if (this.title =="DarkMode"){
          this.title = "LightMode";
        }
        else{
          this.title = "DarkMode"
        }
    }}

  