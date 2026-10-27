import { Component, OnInit } from '@angular/core';
import { Election } from '../../models/election';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ElectionsService } from '../../services/elections.service';

@Component({
  selector: 'app-election-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './election-details.component.html',
  styleUrl: './election-details.component.scss'
})
export class ElectionDetailsComponent implements OnInit {

  election?: Election;

  constructor(
    private router: ActivatedRoute,
    private electionService: ElectionsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.election = this.electionService.getElectionById(id);
  }
}
