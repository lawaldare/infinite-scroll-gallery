import { Component, inject, OnInit, signal } from '@angular/core';
import { ThiingsGridComponent } from './thiingsGrid';
import { FormsModule } from '@angular/forms';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Gallery } from './gallery';

import { Pane } from 'tweakpane';

@Component({
  selector: 'app-root',
  imports: [ThiingsGridComponent, FormsModule, NzModalModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('thiings.co');
  private readonly modal = inject(NzModalService);

  public gridSize = 100;

  public adesewaPictures = [
    '47.jpg',
    '49.jpg',
    '50.jpg',
    '51.jpg',
    '54.jpg',
    '55.jpg',
    '56.jpg',
    '57.jpg',
    '58.jpg',
    '59.jpg',
    '60.jpg',
    '63.jpg',
    '64.jpg',
    '66.jpg',
    '68.jpg',
    '69.jpg',
    '70.jpg',
    '71.jpg',
    '72.jpg',
    '73.jpg',
    '74.jpg',
    '75.jpg',
  ];

  ngOnInit(): void {
    const pane = new Pane() as any;
    pane.addBinding(this, 'gridSize', { min: 50, max: 200, step: 1, label: 'Image size' });
  }

  public onCellClick(item: any, pic: any): void {
    // console.log(item, pic);

    this.modal.create({
      nzTitle: `Infinite Scroll Gallery`,
      nzContent: Gallery,
      nzClosable: false,
      nzCentered: true,
      nzOkText: null,
      nzData: pic,
    });
  }

  onChange(value: number): void {
    console.log(`onChange: ${value}`);
  }
}
