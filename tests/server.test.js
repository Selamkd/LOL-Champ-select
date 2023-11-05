import { test, expect } from 'vitest';
import request from 'supertest';
import express from 'express';
import app from './app.js';

import { application } from 'express';
test('GET/champions', async () => {
  const response = await request(app).get('/champions');

  const payload = {
    championName: 'Briar',
    abilities: ['Head Rush', 'Blood Frenzy/Snack Attack', 'Chilling Scream'],
    ulitimateAbility: 'Certain Death',
    playStyle: 'Lone wolf',
    region: 'Noxus',
    difficulty: 'High',
    role: 'Jungle',
    range: 'Melee',
    lore: "A failed experiment by the Black Rose, Briar's uncontrollable bloodlust required a special pillory to focus her frenzied mind. After years of confinement, this living weapon broke free from her restraints and unleashed herself into the world. Now she's controlled by no one—following only her hunger for knowledge and blood—and relishes the opportunities to let loose, even if reining back the frenzy isn't easy.",
    id: 'a7257efa-9cf7-4e55-9f8e-0c0f79b6d260',
  };
  expect(response.body.data[0]).toEqual(payload);
  expect(response.status).toEqual(200);

  const header = response.headers['content-type'];
  expect(header).toContain('application/json');
});
