import { webSocket } from 'rxjs/webSocket'
import { of, Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import { endpoint } from './serverConfigurations';

export default class webSocketService {

  constructor() {
    this.connect();
  }

  connect() {
    if(!this.socket$) {
      this.webSocketClose$ = new Subject();
      this.socket$ = webSocket({ url: endpoint, closeObserver: this.webSocketClose$ })
    }
  }

  query(payload) {
    this.socket$.next(payload);

    return this.socket$.pipe(
      catchError(e => of({
        type: 'SOCKET_ERROR',
        error: e
      })),
      takeUntil(this.webSocketClose$)
    )
  }

  disconnect() {
    this.socket$.complete();
    return of(null);
  }
}