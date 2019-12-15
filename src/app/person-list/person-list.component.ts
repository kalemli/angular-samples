import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  private seq: number = 1;
  public personList: Person[];
  public current: Person = new Person();

  constructor() { }

  ngOnInit() {
    this.personList = new Array<Person>();
    this.current = new Person();
  }

  public add() {
    console.log(this.current.id);
    if (this.current.id == undefined) {
      this.current.id = this.seq++;
      this.personList.push(this.current);
    }
    this.current = new Person();
  }
  public edit(person: Person) {
    this.current = person;
  }
}