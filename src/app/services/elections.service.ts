import { Injectable } from '@angular/core';
import { Election } from '../models/election';

@Injectable({
  providedIn: 'root'
})
export class ElectionsService {

  elections: Election[] = [
    {
      id: 1,
      title: 'Student council election',
      status: 'OPENED',
      startDate: '2026-10-21T10:00',
      endDate: '2026-10-25T18:00'
    },
    {
      id: 2,
      title: 'Local community election',
      status: 'FINISHED',
      startDate: '2026-10-21T10:00',
      endDate: '2026-10-25T18:00'
    }
  ]

  constructor() { }

  getNextId(): number {
    if (this.elections.length === 0) {
      return 1;
    }

    return Math.max(...this.elections.map(election => election.id)) + 1;
  }

  deleteElectionById(electionId: number): void {
    this.elections = this.elections.filter(
      election => election.id !== electionId
    );
  }

  addNewElection(election: Election): void {
    this.elections.push(election);
  }

  getAllElections(): Election[] {
    return this.elections;
  }

  getElectionById(id: number): Election | undefined {
    return this.elections.find(election => election.id === id);
  }
}
