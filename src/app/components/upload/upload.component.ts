import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {


  private file;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSelected(event) {
    this.file = event.target.files[0];
    const ex = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
    if(ex.includes(this.file.type)) {
      console.log(this.file);
    }else {
      console.log('ERR File Extension');
    }
    
  }

  onUpload() {
    const fd =  new FormData();
    fd.append('file', this.file, this.file.name);
    this.http.post('https://jsonplaceholder.typicode.com/users', fd)
    .subscribe((res) => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

}
