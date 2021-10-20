import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { PhotoBoardService } from './photo-board.service';

const mockData = {
  upi: 'http://localhost:3000/photos',
  data: [
    {id: 1, description: 'exemple 1', src: ''},
    {id: 2, description: 'exemple 2', src: ''}
  ]
}

describe(PhotoBoardService.name, () => {
  let service: PhotoBoardService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoBoardService]
    });

    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpController.verify());

  it(`#${PhotoBoardService.prototype.getPhotos.name} Should return photos with description in uppercase`, done => {    
    service.getPhotos().subscribe(photos => {
      expect(photos[0].description).toBe('EXEMPLE 1');
      expect(photos[1].description).toBe('EXEMPLE 2');
      done();
    });

    httpController
      .expectOne(mockData.upi)
      .flush(mockData.data);
  });
});