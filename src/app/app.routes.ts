import { Routes } from '@angular/router';
import { AppointmentManageComponent } from './page/appointment-manage/appointment-manage.component';
import { PatientManageComponent } from './page/patient-manage/patient-manage.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { DashBoardPageComponent } from './page/dash-board-page/dash-board-page.component';

export const routes: Routes = [
    {
        path : '',
        component : LoginPageComponent
    },
    {
        path : "appointment",
        component : AppointmentManageComponent
    },

    {
        path : "patient",
        component : PatientManageComponent
    },
    {
        path : "dashboard",
        component : DashBoardPageComponent,
        children : [
            {
                path : "appointment",
                component : AppointmentManageComponent
            },
            {
                path : "patient",
                component : PatientManageComponent
            }
        ]
    }
];
