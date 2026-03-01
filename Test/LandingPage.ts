import { expect, Page } from "@playwright/test";

export async function verifyLandingPage(page: Page): Promise<void>

{
  await expect(page.getByRole('img', { name: 'Personamap' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Personamap' })).toBeVisible();
  await expect(page.getByRole('banner').getByText('Personamap')).toBeVisible();
  await expect(page.getByRole('navigation')).toContainText('Personality Types');
  await expect(page.getByRole('navigation')).toContainText('FAQ');
  await expect(page.getByRole('navigation')).toContainText('Take Free Test');
  await expect(page.getByRole('navigation')).toContainText('Uni');
  await expect(page.locator('h1')).toContainText('Where Personality MeetsPerformance');
  await expect(page.getByRole('main')).toContainText('Join thousands who\'ve found their perfect match among the 16 personality types. Fun, insightful, and completely free!');
  await expect(page.getByRole('main')).toContainText('Take Your Free Test');
  
  await page.getByRole('link', { name: 'Take Free Test' }).click();
};