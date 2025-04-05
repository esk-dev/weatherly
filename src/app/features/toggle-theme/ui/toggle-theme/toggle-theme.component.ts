import { Component, inject } from '@angular/core';
import { ThemeService } from '@application/services/theme.service';
import { ThemeMode } from '@shared/lib/theme.enum';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'weatherly-toggle-theme',
  template: `
    <button
      mat-icon-button
      [matTooltip]="tooltipText()"
      (click)="toggleTheme()"
    >
      @if (isDarkMode()) {
        <mat-icon>light_mode</mat-icon>
      } @else {
        <mat-icon>dark_mode</mat-icon>
      }
    </button>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
  imports: [MatTooltip, MatIcon, MatIconButton],
  standalone: true,
})
export class ToggleThemeComponent {
  private themeService = inject(ThemeService);

  // Получаем текущую тему как сигнал напрямую из сервиса
  isDarkMode = () => this.themeService.currentTheme() === ThemeMode.Dark;

  // Вычисляем текст подсказки на основе текущей темы
  tooltipText = () =>
    this.isDarkMode()
      ? 'Переключить на светлую тему'
      : 'Переключить на темную тему';

  /**
   * Вызывает метод переключения темы в сервисе.
   */
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
