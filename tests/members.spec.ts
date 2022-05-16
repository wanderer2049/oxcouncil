import { test, expect } from '@playwright/test'

test('members', async ({ page }) => {

  const membersPageUrl = '/members'
  const membersPageTitle = 'Members | The oxCouncil'
  
  await page.goto(membersPageUrl)

  // make sure it's the members page
  await expect(page).toHaveTitle(membersPageTitle)

  // make sure the members list is showing up
  await expect(page.locator('.member-avatar').first()).toBeVisible()
  await expect(page.locator('.member-name').first()).toBeVisible()
  await expect(page.locator('.member-bio').first()).toBeVisible()

})
