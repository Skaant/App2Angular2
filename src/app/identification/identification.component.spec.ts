import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { IdentificationComponent } from './identification.component';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { apiHttpSpringBootService } from './../api-spring-boot.service';
import { UserModel } from '../interfaces/models';
import { Type } from '@angular/core';
import { emit } from 'process';
export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}


describe('IdentificationComponent', () => {


    let fixture: ComponentFixture<IdentificationComponent>;
    let app;
    let myService: apiHttpSpringBootService;
    let httpMock: HttpTestingController;


    beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        HttpClientTestingModule,
        FormsModule,
      ],
      providers: [{ provide: 'BASE_URL', useFactory: getBaseUrl }, DatePipe],
      declarations: [
        IdentificationComponent
      ],
    }).compileComponents();

    myService = TestBed.inject(apiHttpSpringBootService);

    }));

    beforeEach(() => {
       fixture = TestBed.createComponent(IdentificationComponent);
       app = fixture.componentInstance;

       httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);

       fixture.detectChanges();
    });

    it('should create the component-Identification', () => {

       expect(app).toBeTruthy();
    });

    it('should have email input', ()=>{
     // const emailEl: HTMLElement = fixture.nativeElement.querySelector('#emailLogin');
     const email: HTMLElement = fixture.nativeElement.querySelector("#emailLogin");
     console.log('email...........................');
     //console.log(email[0]);
     //expect( email[0].innerHTML).toBeDefined();
     //expect(email[0].innerHTML).toContain('@');
     //expect(email[0].innerHTML.length).toBeGreaterThan(3);

    });




});


