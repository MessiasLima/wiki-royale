import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Arena } from '../models/arena';
import { Observable } from 'rxjs';

@Injectable()
export class ArenaService {

	private context: string = 'arenas'

	constructor(
		private httpClient: HttpClient
	) { }

	findAll(): Observable<Arena[]> {
		let url = environment.api + this.context
		return this.httpClient.get<Arena[]>(url)
	}
}
