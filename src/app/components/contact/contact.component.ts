import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required,]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    subject: new FormControl(null, [Validators.required,]),
    message: new FormControl(null, [Validators.required,])
  })

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    $('.Contact').fadeOut(0).fadeIn(600);
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Thank for your message' });
  }
  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.showSuccess();
      form.reset();
    }
  }
}
