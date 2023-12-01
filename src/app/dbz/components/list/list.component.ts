import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(public dbzService: DbzService) {}

  @Output()
  public onDeletedCharacter: EventEmitter<string> = new EventEmitter();

  public deleteCharacter( id: string ): void {
    this.onDeletedCharacter.emit( id );
  }

  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 10,
    },
  ];
}
