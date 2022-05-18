import { test, expect } from '@playwright/test'
import fs from 'fs';
import { join } from 'path';
import { SITE_NAME, SITE_NAME_SEPRATOR  } from "../src/constants/settings";

const mainDirectory = process.cwd();
const length = fs.readdirSync(join(mainDirectory, '/posts')).length

test('posts', async ({ page }) => {

  const blogPageUrl = '/posts'
  const blogPageTitle = 'Posts' + SITE_NAME_SEPRATOR + SITE_NAME
  
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
