import { cleanClasses } from './util';

describe(`given 'cleanClasses'`, () => {
  describe(`when given duplicate classes`, () => {
    const duplicateClasses = 'class-a class-b class-c class-a';

    it(`then return unique classes`, () => {
      const expected = 'class-a class-b class-c';
      expect(cleanClasses(duplicateClasses)).toEqual(expected);
    });
  });
});
