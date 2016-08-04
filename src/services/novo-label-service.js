import { Injectable } from '@angular/core';

@Injectable()
export class NovoLabelService {
    filters = 'Filter';
    clear = 'Clear';
    emptyTableMessage = 'No Matching Records';
    pickerError = 'Oops! An error occurred.';
    pickerEmpty = 'No results to display...';
    quickNoteError = 'Oops! An error occurred.';
    quickNoteEmpty = 'No results to display...';
    required = 'Required';
    numberTooLarge = 'Number is too large';
    save = 'Save';
    cancel = 'Cancel';
    next = 'Next';
    itemsPerPage = 'Items per page:';
    select = 'Select...';
    selected = 'Selected';
    selectAllOnPage = 'Select all on page';
    deselectAll = 'Deselect all';

    selectedRecords(selected) {
        return `Only ${selected} records selected.`;
    }

    totalRecords(total) {
        return `Select all ${total} matching records.`;
    }
}

export const NOVO_ELEMENTS_LABELS_PROVIDERS = [
    { provide: NovoLabelService, useClass: NovoLabelService }
];
