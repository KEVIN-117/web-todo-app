import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CotextServiceService {
  private _theme: string = 'light';

  constructor() {
    this.loadThemeFromLocalStorage();
  }

  getTheme() {
    return this._theme;
  }

  setDarkTheme() {
    this._theme = 'dark';
    this.saveLocalStorage()
  }

  setLightTheme() {
    this._theme = 'light';
    this.saveLocalStorage()
  }
  
  saveLocalStorage() {
    localStorage.setItem('theme', this._theme);
  }

  loadThemeFromLocalStorage() {
    this._theme = localStorage.getItem('theme') || 'light';
  }
}
