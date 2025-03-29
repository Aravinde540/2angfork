import { CanActivateFn } from '@angular/router';
import { ProjectsDataService } from '../projects-data.service';
  let p = new ProjectsDataService();

export const checkoutGuard: CanActivateFn = (route, state) => {
  return false
};
