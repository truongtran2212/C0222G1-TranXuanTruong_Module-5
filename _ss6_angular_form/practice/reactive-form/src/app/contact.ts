import {FormControl, Validators} from '@angular/forms';

export interface Contact {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  isMarried: boolean;
  country: string;
}
