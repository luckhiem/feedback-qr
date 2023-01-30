import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'


for (let index = 0; index < 5; index++) {
    test(`Danh gia Nhat Huyen ${index}`, async ({ page }) => {
        const phoneNumber = faker.phone.number('090#######');
        await page.goto("https://docs.google.com/forms/d/e/1FAIpQLScb4p61_2SvwjBNCvKDN-67IL1Tku1Lq3BJ6GhLs6kko7LQSA/viewform?&entry.1582431947=40848");
        await page.waitForTimeout(1000);
        await page.locator("(//input[@type='text'])[1]").fill(phoneNumber);
        await page.waitForTimeout(1000);
        await page.locator("(//div[@role='radiogroup']/span[@role='presentation']/div/div[1]/label//div)[1]").click();
        await page.waitForTimeout(1000);
        await page.locator("//div[@role='list']//span[text()='Sản phẩm dịch vụ']").click();
        await page.waitForTimeout(1000);
        await page.locator("//div[@role='list']//span[text()='Thời gian giao dịch']").click();
        await page.waitForTimeout(1000);
        await page.locator("//div[@role='list']//span[text()='Nhân viên giao dịch']").click();
        await page.waitForTimeout(1000);
        await page.locator("//div[@role='list']//span[text()='Nhân viên tiếp đón, hướng dẫn, hỗ trợ']").click();
        await page.waitForTimeout(1000);
        await page.locator("(//div[@role='button'])[1]").click();
        await page.waitForTimeout(3000);
    })
}