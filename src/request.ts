import { log } from 'console';
import fetch from 'node-fetch';
import { Observable } from 'rxjs';

const opts = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

const data$ = new Observable(observer => {
    fetch('https://api.github.com/users/github', opts)
        .then(response => response.json()) // or text() or blob() etc.
        .then(data => {
        observer.next(data);
        observer.complete();
        })
        .catch(err => observer.error(err));
    });

data$.subscribe(data => log(data));