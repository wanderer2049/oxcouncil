import { test, expect } from '@playwright/test'
import { SITE_NAME, SITE_NAME_SEPRATOR } from "../src/constants/site";

test('members', async ({ page }) => {

  const membersPageUrl = '/members'
  const membersPageTitle = 'Members' + SITE_NAME_SEPRATOR + SITE_NAME
  
  await page.goto(membersPageUrl)

  // make sure it's the members page
  await expect(page).toHaveTitle(membersPageTitle)

  // make sure the members list is showing up
  await expect(page.locator('.member-avatar').first()).toBeVisible()
  await expect(page.locator('.member-name').first()).toBeVisible()
  await expect(page.locator('.member-bio').first()).toBeVisible()

})
