import {
  effect,
  Inject,
  Injectable,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  signal,
  WritableSignal,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ThemeMode } from '@lib/theme.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeToggleService {
  private readonly storageKey = 'weatherly-theme-mode';
  private readonly renderer2: Renderer2;

  readonly currentTheme: WritableSignal<ThemeMode>;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.renderer2 = rendererFactory.createRenderer(null, null);
    // Инициализируем сигнал с начальным значением
    this.currentTheme = signal(this.getInitialTheme());

    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        const theme = this.currentTheme(); // Получаем текущее значение сигнала
        const element = this.document.body;
        this.renderer2.removeClass(element, ThemeMode.Light);
        this.renderer2.removeClass(element, ThemeMode.Dark);
        this.renderer2.addClass(element, theme);
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
      if (window.matchMedia('(prefers-color-scheme: dark)')) {
        return ThemeMode.Dark;
      } else if (window.matchMedia('(prefers-color-scheme: light)')) {
        return ThemeMode.Light;
      }
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
