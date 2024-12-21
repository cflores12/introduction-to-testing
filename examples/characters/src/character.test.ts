import { describe, it, expect } from 'vitest';
import { Character } from './character.js';

describe('Character', () => {
  it('should create a character with a first name, last name, and role', () => {
    const firstName = 'Grace';
    const lastName = 'Hopper';
    const role = 'SwordMaster';
    const character = new Character(firstName, lastName, role);
    /* expect(character).toEqual({
      charisma: expect.anything(),
      constitution: expect.anything(),
      createdAt: expect.anything(),
      dexterity: expect.anything(),
      firstName: 'Grace',
      id: expect.stringContaining('person-'),
      intelligence: expect.anything(),
      lastModified: expect.anything(),
      lastName: 'Hopper',
      level: 1,
      role: 'SwordMaster',
      strength: expect.anything(),
      wisdom: expect.anything()
      }); */

      expect(character).toEqual(
        expect.objectContaining({
          firstName,
          lastName,
          role,
        }),
      );
    });

  it('should allow you to increase the level', () => {
    var character = new Character('Grace', 'Hopper', 'SwordMaster');
    var initialLevel = character.level;
    character.levelUp();
    expect(character.level).toBeGreaterThan(initialLevel);
  });

  it('should update the last modified date when leveling up', () => {
    var character = new Character('Grace', 'Hopper', 'SwordMaster');
    var lastModDate = character.lastModDate;
    character.levelUp();
    expect(lastModDate).not.toEqual(character.lastModified);
  });
});
