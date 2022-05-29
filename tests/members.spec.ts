import { test, expect } from '@playwright/test'
import { SITE } from "../src/constants/site";

test('Test: Members Page', async ({ page }) => {

  const membersPageUrl = SITE.MEMBER.PATH
  const membersPageTitle = SITE.MEMBER.NAME + SITE.SEO.NAME_SEPERATOR + SITE.NAME
  
  await page.goto(membersPageUrl)

  // make sure it's the members page
  await expect(page).toHaveTitle(membersPageTitle)

  // make sure the members list is showing up
  await expect(page.locator('.member-avatar').first()).toBeVisible()
  await expect(page.locator('.member-name').first()).toBeVisible()
  await expect(page.locator('.member-bio').first()).toBeVisible()

})
