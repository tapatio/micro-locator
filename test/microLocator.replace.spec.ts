import { MicroServicesLocator } from '../src/microLocator';

describe('resolve after replace', () => {

    let loc: MicroServicesLocator.locator = null;
    let locate: (sig: string) => string = null;

    beforeEach(() => {
        loc = new MicroServicesLocator.locator();
        locate = sig => loc.resolve(sig);
        loc.replace('/api/etc', 'http://www.test.com/api/');
    });
        
    it('ignores anything but an exact match', () => {
        expect(locate('/api/etc/etc')).toBe('/api/etc/etc');
    });

    it('replaces the path when exact match', () => {
        expect(locate('/api/etc')).toBe('http://www.test.com/api/');
    });
    
});