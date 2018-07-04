import { Bet } from './../../models/bet';
import { Component, OnInit, Output, EventEmitter, TemplateRef, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
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


  @ViewChild('template')
  template: ElementRef;

  promise: Promise<Bet>;

  resolve: Function;
  reject: Function;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }


  openModal(): Promise<Bet> {
    this.modalRef = this.modalService.show(this.template);
    return new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

  public open() {

  }

  public submit() {
    this.modalRef.hide();


    console.log(this.bet);
    const nb = new Bet(0, '', '');
    Object.assign(nb, this.bet);
    this.resolve(nb);
    // this.newbet.emit(nb);
  }

}
