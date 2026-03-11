// learnmore.ts  — orchestration layer
import { Page } from '@playwright/test';
import { BlogPage } from '../Pages/BlogPages';
import { blogPosts } from '../Data/blogData';

export async function runLearnMoreChecks(page: Page) {
  const blogPage = new BlogPage(page);

  for (const post of blogPosts) {
    await blogPage.clickPost(post.linkName);
    await blogPage.verifyPostContent(post);
    await blogPage.goBack();
  }
}