import { test, expect } from '@playwright/test'
import fs from 'fs';
import { join } from 'path';

const mainDirectory = process.cwd();
const length = fs.readdirSync(join(mainDirectory, '/projects')).length

test('posts', async ({ page }) => {

  const projectPageUrl = '/projects'
  const projectPageTitle = 'Projects | The oxCouncil'
  
  await page.goto(projectPageUrl)

  // make sure it's the project page
  await expect(page).toHaveTitle(projectPageTitle)

  // make sure all the project items are loaded 
  await expect(page.locator('.project-featured-image')).toHaveCount(length)
  await expect(page.locator('.project-title')).toHaveCount(length)
  await expect(page.locator('.project-tagline')).toHaveCount(length)
  await expect(page.locator('.project-button')).toHaveCount(length)

})
