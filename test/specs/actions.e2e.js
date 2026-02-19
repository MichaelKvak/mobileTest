import { $, browser } from '@wdio/globals'

describe('Action', () => {
    it('Accessibility ID', async () => {
        await $('~App').click();
        await $('~Device Admin').click();
        await browser.pause(5000)
    })

    it('Get text', async () => {
       console.log('Text element:' + await $('~Accessibility').getText());
       await expect($('~Accessibility')).toHaveText('Accessibility');
       await expect($('~Accessibility')).toHaveAttr('text', 'Accessibility');
    })

    it('Set text', async () => {
        await $('~App').click();
        await $('~Search').click();
        await $('~Invoke Search').click();
        await $('id=io.appium.android.apis:id/txt_query_prefill').setValue('Test');
        await expect($('id=io.appium.android.apis:id/txt_query_prefill')).toHaveText('Test');
       await expect($('id=io.appium.android.apis:id/txt_query_prefill')).toHaveAttr('text', 'Test');
    })

    it('Dropdown', async () => {
        await $('~App').click();
        await $('~Menu').click();
        await $('~Inflate from XML').click();
        await $('id=android:id/text1').click();
        await $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Order"]').click();
        await expect($('android.widget.ListView')).not.toBeExisting({ wait: 100 });
        await expect($('id=android:id/text1')).toHaveText('Order');
        
    })
   
})