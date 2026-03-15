import asyncio
from playwright.async_api import async_playwright
import os

async def verify_cine_fixes():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Create a local server or just open files
        page = await browser.new_page()

        # Base path
        base_url = f"file://{os.getcwd()}"

        # 1. Verify Verbs Page
        print("Verifying Verbs page...")
        await page.goto(f"{base_url}/verbs.html")
        await page.wait_for_timeout(1000)
        # Check if verbs are rendered
        verb_exists = await page.query_selector('.verb-infinitive')
        if verb_exists:
            print("✅ Verbs rendered.")
        else:
            print("❌ Verbs NOT rendered.")
        await page.screenshot(path="verification/verbs_fixed.png")

        # 2. Verify Grammar Page and Modal
        print("Verifying Grammar page...")
        await page.goto(f"{base_url}/grammar.html")
        await page.wait_for_timeout(1000)
        await page.click('.grammar-card') # Click first card
        await page.wait_for_timeout(500)
        modal_visible = await page.is_visible('#grammarModal.active')
        if modal_visible:
            print("✅ Grammar modal opened.")
        else:
            print("❌ Grammar modal NOT opened.")
        await page.screenshot(path="verification/grammar_fixed.png")

        # 3. Verify Quiz Page
        print("Verifying Quiz page...")
        await page.goto(f"{base_url}/quiz.html")
        await page.wait_for_timeout(2000) # Wait for startQuiz and data load
        question_text = await page.inner_text('#qText')
        if "What is the meaning of" in question_text:
            print(f"✅ Quiz started: {question_text}")
        else:
            print("❌ Quiz NOT started.")

        options_count = await page.locator('.option-btn').count()
        if options_count == 4:
            print("✅ 4 options rendered.")
        else:
            print(f"❌ {options_count} options rendered.")
        await page.screenshot(path="verification/quiz_fixed.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_cine_fixes())
