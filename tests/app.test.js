import { test, expect } from '@playwright/test';
const URL = 'https://champ-select.onrender.com';

test('Locate the page', async ({ page }) => {
  await page.goto(URL);

  await expect(
    page.getByRole('heading', { name: 'Help you find your new main?' })
  ).toBeVisible();
  const startButton = page.getByRole('button');
  await startButton.click();

  const quizQuestion = page.getByText('Are you a lone wolf or a team player?');
  await expect(quizQuestion).toBeVisible();

  const quizButton = page.getByRole('button', { name: 'Lone wolf' });
  await quizButton.click();

  const questionTwo = page.getByText(
    'Would you prefer an easy but safe character or a difficult character to master'
  );
  await expect(questionTwo).toBeVisible();
  const buttonTwo = page.getByRole('button', { name: 'Low' });
  await buttonTwo.click();

  const questionThree = page.getByText('Which region interestes you most?');
  await expect(questionThree).toBeVisible();
  const buttonThree = page.getByRole('button', { name: 'Noxus' });
  await buttonThree.click();

  const questionFour = page.getByText('Which role do you want to play?');
  await expect(questionFour).toBeVisible();
  const buttonFour = page.getByRole('button', { name: 'Jungle' });
  await buttonFour.click();

  const questionFive = page.getByText(
    'Do you prefer to keep enemies at range or get up close and personal ?'
  );
  await expect(questionFive).toBeVisible();
  const buttonFive = page.getByRole('button', { name: 'Ranged' });
  await buttonFive.click();

  const submitButton = page.getByRole('button', { name: 'submit' });
  await submitButton.click();

  const championName = page.getByRole('heading', { name: 'Champion Name' });
  await expect(championName).toBeVisible();

  const championImg = page.getByRole('img');
  await expect(championImg).toBeVisible();
  await page.reload();
  await page.close();
});
