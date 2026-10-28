import { Component } from '@angular/core';
import { ElectionsService } from '../../services/elections.service';
import { Election } from '../../models/election';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-election',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-election.component.html',
  styleUrl: './create-election.component.scss'
})
export class CreateElectionComponent {

  constructor(
    private electionService: ElectionsService,
    private router: Router
  ) {}

  newElection = {
    title: '',
    status: 'OPEN',
    startDate: '',
    endDate: ''
  };

  addNewElection() {

    if (!this.newElection.title.trim()) {
      return;
    }

    if (!this.newElection.startDate || !this.newElection.endDate) {
      return;
    }

    if (new Date(this.newElection.startDate) > new Date(this.newElection.endDate)) {
      alert('Start date must be earlier than end date!')
      return;
    }

    const election: Election = {
      id: this.electionService.getNextId(),
      title: this.newElection.title.trim(),
      status: this.newElection.status,
      startDate: this.newElection.startDate,
      endDate: this.newElection.endDate
    };

    this.electionService.addNewElection(election);
   
    this.newElection = {
      title: '',
      status: 'OPEN',
      startDate: '',
      endDate: ''
    };

     this.router.navigate(['/elections']);
  }
}
