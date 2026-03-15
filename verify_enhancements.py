import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Verify Lessons Page
        await page.goto("http://localhost:3000/lessons.html")
        await page.wait_for_selector(".fa-copy")
        await page.screenshot(path="verification/lessons_initial.png")

        # Try clicking copy
        try:
            await page.click(".fa-copy")
            await page.wait_for_timeout(1000)
            await page.screenshot(path="verification/lessons_after_copy.png")
        except Exception as e:
            print(f"Error clicking copy: {e}")

        # Verify Quiz
        await page.goto("http://localhost:3000/quiz.html")
        await page.wait_for_timeout(2000)
        await page.screenshot(path="verification/quiz_initial.png")

        # Stories
        await page.goto("http://localhost:3000/stories.html")
        await page.fill("#storySearch", "a")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="verification/stories_after_search.png")

        await browser.close()

asyncio.run(run())
