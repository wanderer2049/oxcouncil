import { test, expect } from '@playwright/test'
import fs from 'fs';
import { join } from 'path';
import { SITE  } from "../src/constants/site";

const mainDirectory = process.cwd();
const length = fs.readdirSync(join(mainDirectory, SITE.PROJECT.DIR_NAME)).length

test('Test: Projects Page', async ({ page }) => {

  const projectPageUrl = SITE.PROJECT.PATH
  const projectPageTitle = SITE.PROJECT.NAME + SITE.SEO.NAME_SEPERATOR + SITE.NAME
  
  await page.goto(projectPageUrl)

  // make sure it's the project page
  await expect(page).toHaveTitle(projectPageTitle)

  // make sure all the project items are loaded 
  await expect(page.locator('.project-featured-image')).toHaveCount(length)
  await expect(page.locator('.project-title')).toHaveCount(length)
  await expect(page.locator('.project-tagline')).toHaveCount(length)
  await expect(page.locator('.project-button')).toHaveCount(length)

})
