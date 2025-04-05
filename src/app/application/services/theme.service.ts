import {
  effect,
  Inject,
  Injectable,
  PLATFORM_ID,
  signal,
  WritableSignal,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ThemeMode } from '@shared/lib/theme.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'app-theme-mode';

  readonly currentTheme: WritableSignal<ThemeMode>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    // Инициализируем сигнал с начальным значением
    this.currentTheme = signal(this.getInitialTheme());

    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        const theme = this.currentTheme(); // Получаем текущее значение сигнала
        this.document.body.classList.remove(ThemeMode.Light, ThemeMode.Dark);
        this.document.body.classList.add(theme);
        try {
          localStorage.setItem(this.storageKey, theme);
        } catch (e) {
          console.error('Could not save theme to localStorage', e);
        }
      });
    }
  }

  private getInitialTheme(): ThemeMode {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const storedTheme = localStorage.getItem(
          this.storageKey,
        ) as ThemeMode | null;
        if (storedTheme && Object.values(ThemeMode).includes(storedTheme)) {
          console.log(`Found stored theme: ${storedTheme}`);
          return storedTheme;
        }
      } catch (e) {
        console.error('Could not read theme from localStorage', e);
      }
      // TODO: Можно добавить проверку window.matchMedia('(prefers-color-scheme: dark)')
    }
    return ThemeMode.Light; // По умолчанию светлая тема
  }

  toggleTheme(): void {
    this.currentTheme.update((current) =>
      current === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light,
    );
  }

  setTheme(theme: ThemeMode): void {
    this.currentTheme.set(theme);
  }
}
