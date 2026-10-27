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
    const election: Election = {
      id: this.electionService.getNextId(),
      title: this.newElection.title.trim(),
      status: this.newElection.status,
      startDate: this.newElection.startDate,
      endDate: this.newElection.endDate
    };

    if (!election.title) {
      return;
    }

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
