import { Component } from '@angular/core';

import { FormInputBase } from './dynamic-form/model/form-input-base';
import { FormTextbox } from './dynamic-form/model/form-textbox';
import { FormDropdown } from './dynamic-form/model/form-dropdown';
import { FormCheckbox } from './dynamic-form/model/form-checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  myForm: FormInputBase<string | boolean>[] = [
    new FormTextbox({
      key: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    }),

    new FormTextbox({
      key: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    }),

    new FormDropdown({
      key: 'animal',
      label: 'Favorite animal',
      options: [
        { key: 'cat', value: 'Cat' },
        { key: 'dog', value: 'Dog' },
      ],
    }),

    new FormCheckbox({
      key: 'readAgreement',
      label: 'Read agreement?',
      required: true,
    }),
  ];
}
