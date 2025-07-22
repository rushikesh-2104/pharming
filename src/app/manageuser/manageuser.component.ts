import { Component } from '@angular/core';

@Component({
  selector: 'app-manageuser',
  standalone: false,
  templateUrl: './manageuser.component.html',
  styleUrl: './manageuser.component.css'
})
export class ManageuserComponent {
users:any[]=[]

constructor(private Todo:Todo){
  this.Todo.users().subscribe(temp => this.users = temp)
  this.refresh()
}

refresh(){
  this.Todo.users().subscribe(temp =>this.users = temp)
}

deleteuser(id:any){
  this.Todo.deleteuser(id).subscribe(temp =>{alert("user detected");
    this.refresh()
  })
}

}
