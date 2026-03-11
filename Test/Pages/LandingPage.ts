import { Page, expect } from '@playwright/test';

export class LandingPage {
  constructor(private page: Page) {}

  async verifyLandingPage() {
    await expect(this.page.getByRole('banner').getByText('Personamap')).toBeVisible();

    await expect(
      this.page.getByRole('navigation').getByRole('link', { name: 'Personality Types' })
    ).toBeVisible();

    await expect(
      this.page.getByRole('navigation').getByRole('link', { name: 'FAQ' })
    ).toBeVisible();

    await expect(
      this.page.getByRole('link', { name: 'Take Free Test' })
    ).toBeVisible();

    await expect(
      this.page.getByRole('link', { name: 'Uni' })
    ).toBeVisible();

    await expect(this.page.locator('h1')).toContainText('Where Personality MeetsPerformance');
    await expect(this.page.locator('h1')).toBeVisible();

    await expect(this.page.getByRole('main')).toContainText('Join thousands who\'ve found their perfect match among the 16 personality types. Fun, insightful, and completely free!');
    await expect(this.page.locator('main')).toBeVisible();

    await expect(
      this.page.getByRole('link', { name: 'Take Your Free Test', exact: true })
    ).toBeVisible();

    await expect(
      this.page.getByTestId('button-learn-more-hero')
    ).toBeVisible();
    this.page.getByTestId('button-learn-more-hero').click();
  }
}