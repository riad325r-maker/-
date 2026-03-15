import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Verify Verbs Page
        await page.goto("http://localhost:3000/verbs.html")
        await page.wait_for_selector(".verb-card")
        await page.screenshot(path="verification/verbs_initial.png")

        # Test Filter (Irregular)
        await page.click(".filter-btn:nth-child(3)")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="verification/verbs_irregular_filter.png")

        # Test Load More
        await page.click("#loadMoreBtn")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="verification/verbs_after_load_more.png")

        await browser.close()

asyncio.run(run())
