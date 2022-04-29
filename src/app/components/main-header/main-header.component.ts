import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  areas = [
    { nome: 'Home', ativo: true, href: '/home' },
    { nome: 'Blog', ativo: false, href: '/blog' },
    { nome: 'Contato', ativo: false, href: '/contato' },
    { nome: 'Admin', ativo: false, href: '/admin' }
  ];
  constructor() {}
  ngOnInit(): void {}
}
