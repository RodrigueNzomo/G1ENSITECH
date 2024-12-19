// src/app/user-management/user-management.component.ts
import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  users: { username: string; email: string; role: string }[] = [];
  initialRoles: any;
  availableRoles: any;

  constructor(private userManagementService: UserManagementService) {}

  ngOnInit() {
    this.users = this.userManagementService.getUsers();
  }

  onChangeRole(username: string, role: string) {
    this.userManagementService.changeRole(username, role);
  }
}
