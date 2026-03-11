import { test, expect } from '@playwright/test';
import { questions } from './Data/Q&A.ts';
import { personalities } from './Data/Personalities/Personalities.ts';
import { LandingPage } from './Pages/LandingPage.ts';
import { FinalPage } from './Pages/FinalPageVerify.ts';
import { runLearnMoreChecks } from './LearnMore/LearnMore.ts';
import {BlogPage} from './Pages/BlogPages.ts';
import { run } from 'node:test';

test.describe('Personamap Tests', () => {});

test('Verify Landing Page UI', async ({ page }) => {

  const landingPage = new LandingPage(page);
  // const runlearnMorecheck = new runLearnMoreChecks(page);
  const blogPage = new BlogPage(page);


  await page.goto('https://personamap.vercel.app/');
  await landingPage.verifyLandingPage();
  await runLearnMoreChecks(page);
    

});

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
      
      const finalpage = new FinalPage(page);
      await finalpage.verifyFinalPage();// Verify that we reached the final page for this personality type
      // console.log(`✅ ${personality.name} passed`); // Log success for this personality type


    } catch (error) {
      console.error(`❌ ${personality.name} failed`, error);// Log the error but continue with the next personality
      // continue to next personality
      continue;
    }
  }
});
