# WebdriverIO + Appium Mobile Testing

Automated mobile testing project using WebdriverIO and Appium for the Android ApiDemos app.

## Tech Stack

- **WebdriverIO** v9 — test framework
- **Appium** v3 — mobile automation server
- **UiAutomator2** — Android driver
- **Mocha** — test runner

## Prerequisites

- Node.js
- Android SDK & emulator (`Pixel_3a_API_34_extension_level_7_x86_64`)
- Appium server running on port `4723`

## Setup

```bash
npm install
```

## Run Tests

1. Start the Android emulator:
```bash
npm run start-emulator
```

2. Start Appium server (in a separate terminal):
```bash
npx appium
```

3. Run tests:
```bash
npm test
```

## Project Structure

```
├── app/                     # APK files
│   └── ApiDemos-debug.apk
├── test/
│   ├── pageobjects/         # Page Object classes
│   │   ├── page.js          # Base page class
│   │   ├── login.page.js
│   │   └── secure.page.js
│   └── specs/               # Test files
│       └── search.e2e.js    # Element search strategies test
├── wdio.conf.js             # WebdriverIO configuration
└── package.json
```

## Search Strategies (search.e2e.js)

- **Accessibility ID** — `~App`
- **Resource ID** — `id=android:id/action_bar`
- **Class Name** — `android.widget.TextView`
- **XPath** — `//android.widget.TextView[@content-desc="Media"]`
- **UiSelector** — `android=new UiSelector().text("NFC")`
