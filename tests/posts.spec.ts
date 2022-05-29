import { test, expect } from '@playwright/test'
import fs from 'fs';
import { join } from 'path';
import { SITE } from "../src/constants/site";

const mainDirectory = process.cwd();
const length = fs.readdirSync(join(mainDirectory, SITE.BLOG.DIR_NAME)).length

test('Test: Posts Page', async ({ page }) => {

  const blogPageUrl = SITE.BLOG.PATH
  const blogPageTitle = SITE.BLOG.NAME + SITE.SEO.NAME_SEPERATOR + SITE.NAME
  
  await page.goto(blogPageUrl)

   // make sure it's the blog page
  await expect(page).toHaveTitle(blogPageTitle)

  // make sure all the post items are loaded 
  await expect(page.locator('.post-featured-image')).toHaveCount(length)
  await expect(page.locator('.post-title')).toHaveCount(length)
  await expect(page.locator('.post-date')).toHaveCount(length)
  await expect(page.locator('.post-author')).toHaveCount(length)
  await expect(page.locator('.post-excerpt')).toHaveCount(length)
  await expect(page.locator('.post-button')).toHaveCount(length)

})
