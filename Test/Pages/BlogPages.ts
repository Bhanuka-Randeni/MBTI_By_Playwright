// pages/BlogPage.ts  — encapsulates ALL interactions with the blog page
import { Page, expect } from '@playwright/test';

export class BlogPage {
  constructor(private page: Page) {}

  // Locators
  get blogHeader() { return this.page.getByTestId('img-blog-header'); }
  get backButton() { return this.page.getByTestId('button-back-blogs-bottom'); }
  get takeTestButton() { return this.page.getByTestId('button-take-test-blog'); }

  // Actions
//   async goto() {
//     await this.page.goto('/blog');
//   }

  async clickPost(linkName: string) {
    await this.page.getByRole('link', { name: linkName }).click();
  }

  async goBack() {
    await this.backButton.click();
  }

  // Assertions
  async verifyPostContent(post: { heading: string; content: string[] }) {
    await expect(this.page.getByRole('heading')).toContainText(post.heading);
    await expect(this.blogHeader).toBeVisible();
    await expect(this.backButton).toBeVisible();
    await expect(this.takeTestButton).toBeVisible();

    for (const text of post.content) {
      await expect(this.page.locator('body')).toContainText(text);
    }
  }
}