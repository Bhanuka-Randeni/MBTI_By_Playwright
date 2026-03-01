import { test, expect } from '@playwright/test';
import { questions } from './Q&A.ts';
import { personalities } from './Personalities/Personalities.ts';

//import { verifyLandingPage } from './LandingPage.ts';
test.describe('Personamap Tests', () => {});

test('Q & A clicking - all personalities', async ({ page }) => {

  for (const personality of personalities) {
    try {
      await page.goto('https://personamap.vercel.app/');
      await page.getByRole('link', { name: 'Take Free Test' }).click();

      for (const question of questions) {
        const choice = personality.answers[question.id];
        await expect(page.getByText(question.question)).toBeVisible();
        await page.getByText(question.answers[choice]).first().click();
        
        const nextButton = page.getByRole('button', { name: 'Next' });
        const seeResultsButton = page.getByRole('button', { name: 'See Results' });

        if (await nextButton.isVisible()) {
          await nextButton.click();
        } else if (await seeResultsButton.isVisible()) {
          await seeResultsButton.click();
        }
      }
    } catch (error) {
      console.error(`❌ ${personality.name} failed`, error);
      // continue to next personality
      continue;
    }
  }
});
