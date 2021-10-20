import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Photo } from '../interfaces/photo'
import { buildPhotoList } from '../test/photo-board-list';
import { PhotoBoardService } from './photo-board.service'

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  getPhotos(): Observable<Photo[]>{
    return of(buildPhotoList());
  }
}