import { $$, browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Search elements', () => {
    it('Accessibility ID', async () => {
        await $('~App').click();
        await $('~Device Admin').click();
        await browser.pause(5000)
    })
    it('Resource ID', async () => {
        await expect($('id=android:id/action_bar')).toBeDisplayed();
        await browser.pause(5000)
    })
    it('Class name', async () => {
        const elements = $$('android.widget.TextView');
        await expect(elements).toBeElementsArrayOfSize(13);
    })
    it('Xpath', async () => {
       await $('//android.widget.TextView[@content-desc="Media"]').click();
       await $('(//android.widget.TextView)[1]').click();
       await browser.pause(3000);
    })
    it('uiSelector', async () => {
       await $('android=new UiSelector().text("NFC")').click();
       await browser.pause(3000);
    })
})

