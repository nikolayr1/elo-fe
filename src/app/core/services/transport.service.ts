import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {ParticipantModel} from '../models/participant.model';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ParticipantAdvancedModel} from '../models/participant-advanced.model';
import {HelperService} from './helper.service';
import {Observable} from 'rxjs/Observable';
import {OrderBy} from '../enums/order-by-type.enum';
import 'rxjs/add/observable/combineLatest';

@Injectable()
/**
 * Provides methods to do manipulations with backend
 */
export class TransportService {
    private COLLECTION_NAME: string;
    private participanstNumber$: BehaviorSubject<number>;
    private participantsCollection: AngularFirestoreCollection<ParticipantModel>;
    private participants$: BehaviorSubject<ParticipantAdvancedModel[]>;
    private getNewBattleParticipantsTrigger$: Subject<boolean>;

    public constructor(private afs: AngularFirestore, private helper: HelperService) {
        this.COLLECTION_NAME = 'participants';
        this.participantsCollection = afs.collection<ParticipantModel>(this.COLLECTION_NAME);
        this.participants$ = new BehaviorSubject<ParticipantAdvancedModel[]>([]); // initial number (it doesn't effect something)
        this.participanstNumber$ = new BehaviorSubject<number>(0); // initial number (it doesn't effect something)
        this.getNewBattleParticipantsTrigger$ = new Subject<boolean>();

        this.participantsCollection
            .snapshotChanges()
            .map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data() as ParticipantModel;
                    const id = a.payload.doc.id;
                    return {id, ...data};
                });
            })
            .subscribe(participants => {
                this.participanstNumber$.next(participants.length);
                this.participants$.next(participants);
            });
    }

    /**
     * Adding new participant into participants collection
     * @param {ParticipantModel} participant
     * @returns {Promise}
     */
    public addParticipant(participant: ParticipantModel): Promise<any> {
        return new Promise((resolve, reject) => {
            this.participantsCollection.add(<ParticipantModel>this.helper.getData(participant)) // adding item to collection
                .then(resolve)
                .catch(reject);
        });
    }

    /**
     * Getting a collection of participants
     * @returns {BehaviorSubject<ParticipantModel[]>}
     */
    public getParticipant(id: string): AngularFirestoreDocument<ParticipantModel> {
        return this.afs.doc('participants/' + id);
    }

    /**
     * Getting a collection of participants
     * @returns {BehaviorSubject<ParticipantModel[]>}
     */
    public getParticipants(): BehaviorSubject<ParticipantAdvancedModel[]> {
        return this.participants$;
    }

    /**
     * Getting a participants number
     * @returns {BehaviorSubject<number>}
     */
    public getParticipantsNumber(): BehaviorSubject<number> {
        return this.participanstNumber$;
    }

    /**
     * Getting a collection of participants
     * @returns {BehaviorSubject<ParticipantModel[]>}
     */
    public queryParticipants(limit$: Observable<number>, order$: Observable<OrderBy>): Observable<ParticipantModel[]> {
        const result: BehaviorSubject<ParticipantModel[]> = new BehaviorSubject([]);
        let query$: Observable<any>;

        query$ = Observable
            .combineLatest(
                limit$,
                order$
            )
            .switchMap(([limit, order]) => {
                console.log(limit, order);
                return this.afs.collection(this.COLLECTION_NAME, ref => {
                    let query;
                    query = ref.limit(limit).orderBy('surname');
                    return query;
                }).valueChanges();
            });

        query$.subscribe(participants => {
            result.next(participants);
        });
        return result.asObservable();
    }

    /**
     * Updating the score of given participant
     * @param {string} participantId
     * @param {number} newScore
     */
    public updateParticipantScore(participantId: string, newScore: number): Promise<void> {
        const participantDoc: AngularFirestoreDocument<ParticipantModel> = this.getParticipant(participantId);
        return new Promise<void>((resolve, reject) => {
            participantDoc
                .update({
                    score: newScore,
                    updated: new Date().toString(),
                })
                .then(resolve)
                .catch(reject);
        });
    }
}

