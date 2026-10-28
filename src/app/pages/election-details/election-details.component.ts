import { Component, OnInit } from '@angular/core';
import { Election } from '../../models/election';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ElectionsService } from '../../services/elections.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-election-details',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './election-details.component.html',
  styleUrl: './election-details.component.scss'
})
export class ElectionDetailsComponent implements OnInit {

  election?: Election;

  isEditingStatus = false;
  isEditingTitle = false;
  isEditingStartDate = false;
  isEditingEndDate = false;
  editedStatus = '';
  editedTitle = '';
  editedStartDate = '';
  editedEndDate = '';

  constructor(
    private router: ActivatedRoute,
    private electionService: ElectionsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.election = this.electionService.getElectionById(id);
  }

  editEndDate() {
    if (!this.election) {
      return;
    }

    this.editedEndDate = this.election.endDate;
    this.isEditingEndDate = true;
  }

  editStartDate() {
    if (!this.election) {
      return;
    }

    this.editedStartDate = this.election.startDate;
    this.isEditingStartDate = true;
  }

  editTitle() {
    if (!this.election) {
      return;
    }

    this.editedTitle = this.election.title;
    this.isEditingTitle = true;
  }

  editStatus() {
    if (!this.election) {
      return;
    }

    this.editedStatus = this.election.status;
    this.isEditingStatus = true;
  }

  cancelEditEndDate() {
    this.isEditingEndDate = false;
  }

  cancelEditStartDate() {
    this.isEditingStartDate = false;
  }

  cancelEditTitle() {
    this.isEditingTitle = false;
  }

  cancelEditStatus() {
    this.isEditingStatus = false;
  }

  saveEditEndDate() {
    if (!this.election) {
      return;
    }

    if (!this.editedEndDate) {
      alert('End date cannot be empty!');
      return;
    }

    if (new Date(this.editedEndDate) < new Date(this.election.startDate)) {
      alert('Start date must be earlier than end date!')
      return;
    }

    this.election.endDate = this.editedEndDate;
    this.isEditingEndDate = false;
  }

  saveEditStartDate() {
    if (!this.election) {
      return;
    }

    if (!this.editedStartDate) {
      alert('Start date cannot be empty!');
      return;
    }

    if (new Date(this.editedStartDate) > new Date(this.election.endDate)) {
      alert('Start date must be earlier than end date!')
      return;
    }

    this.election.startDate = this.editedStartDate;
    this.isEditingStartDate = false;
  }

  saveEditTitle() {
    if (!this.election) {
      return;
    }

    if (!this.editedTitle) {
      alert('Title cannot be empty!');
      return;
    }

    this.election.title = this.editedTitle;
    this.isEditingTitle = false;
  }

  saveEditStatus() {
    if (!this.election) {
      return;
    }

    this.election.status = this.editedStatus;
    this.isEditingStatus = false;
  }
}
