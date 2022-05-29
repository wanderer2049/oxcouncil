import { test, expect } from '@playwright/test'
import { SITE } from "../src/constants/site";

test('Test: Navigation Menu', async ({ page }) => {

  const navs: { name: string, url: string, title: string }[] = [
    {name: 'Home', url: '/', title: 'Home'},
    {name: 'Projects', url: SITE.PROJECT.PATH, title: SITE.PROJECT.NAME},
    {name: 'Members', url: SITE.MEMBER.PATH, title: SITE.MEMBER.NAME},
    {name: 'Blog', url: SITE.BLOG.PATH, title: SITE.BLOG.NAME}
  ]

  for (let i = 0; i < navs.length; i++)  {
    let nav = navs[i]
    await page.goto(nav.url)
    // await page.click(`text=${nav.name}`)
    await expect(page).toHaveURL(nav.url)
    await expect(page).toHaveTitle(nav.title + SITE.SEO.NAME_SEPERATOR + SITE.NAME)
  }
})
