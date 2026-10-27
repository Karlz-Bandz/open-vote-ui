import { Component } from '@angular/core';
import { Election } from '../../models/election';
import { ElectionsService } from '../../services/elections.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-elections',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './elections.component.html',
  styleUrl: './elections.component.scss'
})
export class ElectionsComponent {

  title = 'Available elections';

  elections: Election[] = [];

  constructor(private electionService: ElectionsService) {
    this.elections = electionService.getAllElections();
  }

  deleteElectionById(electionId: number) {
    this.electionService.deleteElectionById(electionId);
    this.elections = this.electionService.getAllElections();
  }
}
