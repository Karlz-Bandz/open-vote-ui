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
  editedStatus = '';

  constructor(
    private router: ActivatedRoute,
    private electionService: ElectionsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.election = this.electionService.getElectionById(id);
  }

  startEditStatus() {
    if (!this.election) {
      return;
    }

    this.editedStatus = this.election.status;
    this.isEditingStatus = true;
  }

  cancelEditStatus() {
    this.isEditingStatus = false;
  }

  editStatus() {
    if (!this.election) {
      return;
    }

    this.election.status = this.editedStatus;
    this.isEditingStatus = false;
  }
}
