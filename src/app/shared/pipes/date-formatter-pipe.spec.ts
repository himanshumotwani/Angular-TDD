import {DateFormatterPipe} from './date-formatter-pipe';

describe('DateFormatterPipe', () => {
    let pipe: DateFormatterPipe;
    let date = new Date('12/12/2012');
    beforeEach(() => {
        pipe = new DateFormatterPipe();
      });

  it('Does pipe function exists', () => {
    expect(pipe).toBeTruthy();
    });

    it('Does transform property exists', () => {
        expect(pipe.transform).toBeTruthy();
        });

    it ('test the changed format 1', () => {
        expect(pipe.transform(date, 'MM-DD-YYYY')).toEqual('12-12-2012');
    });

    it ('test the changed format 2', () => {
        expect(pipe.transform(date, 'MM/DD/YYYY')).toEqual('12/12/2012');
    });

});