import { Bet } from './../../models/bet';
import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-bet-form-template',
  templateUrl: './bet-form-template.component.html',
  styleUrls: ['./bet-form-template.component.css']
})
export class BetFormTemplateComponent implements OnInit {
  public bet = new Bet(undefined, undefined, undefined);

  @Output('newbet')
  newbet: EventEmitter<Bet> = new EventEmitter<Bet>();


  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public submit() {
    console.log(this.bet);
    const nb = new Bet(0, '', '');
    Object.assign(nb, this.bet);
    this.newbet.emit(nb);
  }

}
