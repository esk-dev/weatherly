import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT, IEnvironment } from '@shared/common/environment/env';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly config: IEnvironment;

  constructor(@Inject(ENVIRONMENT) private env: IEnvironment) {
    this.config = env;
  }

  getConfig(): IEnvironment {
    return this.config;
  }
}
