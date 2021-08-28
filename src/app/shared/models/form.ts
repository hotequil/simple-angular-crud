import { FormService } from '../services/form/form.service';

export interface Form {
    loadingInfo: boolean;
    formService: FormService;
    onSubmit(): void;
}
