import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MenuItem } from './interfaces';
import { MenuComponent } from './menu.component';


const menuItems: MenuItem[] = [
  { name: 'Loempia' } as MenuItem,
  { name: 'Kaassoufle' } as MenuItem,
  { name: 'Frikandel' } as MenuItem
];

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    component.menuItems = menuItems;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Render', () => {

    it('show all the menu items', () => {
      const menuItemElements = fixture.debugElement.queryAll(By.css('.menuItem'));
      expect(menuItemElements.length).toBe(menuItems.length);
    });

    it('should show the item names', () => {
      const movieElements = fixture.debugElement.queryAll(By.css('.menuItem'));
      movieElements.forEach((movieElement: DebugElement, index) => {
        expect(movieElement.nativeElement.innerHTML).toContain(menuItems[index].name);
      });
    });
  });
});
