# HabitBuster MVP Landing Page Design

## First release

Build one short, responsive page that answers three questions: What is HabitBuster? How does it work? How can I see it in action?

Present it as a working prototype. The first release needs four sections and a small footer. Use actual hardware photographs and one app screenshot. Keep the main product story focused on personalized motion detection and reminders.

## Page layout

```text
┌───────────────────────────────────────────────────┐
│  HabitBuster                     See the prototype │
├───────────────────────────────────────────────────┤
│                                                   │
│  Notice the habit.       Actual wearable photo     │
│  Choose your next move.  with a phone showing      │
│                         the HabitBuster app        │
│  Short explanation                                │
│  [See how it works]                               │
│  Working prototype                                │
│                                                   │
├───────────────────────────────────────────────────┤
│  A reminder in three steps                        │
│  01 Connect    02 Calibrate    03 Notice and pause  │
├───────────────────────────────────────────────────┤
│  Your detections at a glance                       │
│  App screenshot       Detection counts            │
│                       Reminder controls           │
│                       Personalized calibration    │
├───────────────────────────────────────────────────┤
│  See the prototype in action                       │
│  Short real demonstration or prototype photo      │
│  [Request a demo when contact is configured]       │
│  Plain explanation of detection limits            │
├───────────────────────────────────────────────────┤
│  HabitBuster                       Verified contact│
└───────────────────────────────────────────────────┘
```

On mobile, stack text before imagery and display the three steps vertically. Keep the page readable at 320 px width with no horizontal scrolling.

## Section one Hero

**Eyebrow:** Wearable sensor + companion app

**Headline:** Notice the habit. Choose your next move.

**Description:** HabitBuster detects wrist motions that match a habit you calibrate, such as a nose-picking gesture, and gives you a reminder to pause. Connect the wearable to your phone to review detections and choose your alerts.

**Button:** See how it works

**Status:** Working prototype

Use a spacious two column layout with copy on the left and a real device photo plus an authentic phone screenshot on the right. Show the actual enclosure or exposed prototype hardware. If photographs are unavailable, use a clearly labeled prototype illustration.

## Section two How it works

**Heading:** A reminder in three steps

1. **Connect.** Pair the wearable with the HabitBuster app over Bluetooth.
2. **Calibrate.** Record your resting position and the motion you want to notice.
3. **Notice and pause.** When matching motion is detected, the watch indicator or connected phone provides your selected reminder.

Use three simple numbered blocks with short text. A small wrist, phone, and reminder icon can support the explanation; the numbers and words must remain understandable without icons.

## Section three App preview

**Heading:** Your detections at a glance

Show one dashboard screenshot beside three benefits:

- **Review detections.** See received events and a weekly count view.
- **Choose your reminders.** Use phone vibration, optional sound, or silent tracking.
- **Calibrate your motion.** Set a profile for the gesture you want to notice.

Label staged values “Demo data.” Counts represent detected motion matches, not independently verified actions. Avoid showing a declining graph as evidence that the product reduces habits.

## Section four Prototype and next action

**Heading:** See the prototype in action

**Description:** An ESP32-based wearable and a companion app, built to help you notice repetitive motions.

Show a short real demonstration with user initiated playback and captions when available. Otherwise, show a close photograph of the prototype with a caption describing the sensor and watch indicator.

**CTA:** Request a demo, linked to a verified contact channel once configured. During preview, use “Explore the prototype” linking to this section. Add an email form later if demo interest warrants it and a delivery destination is ready.

**Visible limitation copy:** HabitBuster matches wrist movement to your calibration. Similar movements can trigger an alert, and some gestures may be missed. Phone records depend on a working Bluetooth connection and app execution; background alerts are not guaranteed.

## Visual direction

Use the app's mint identity, dark text, white surfaces, and a dark green primary button. Keep photography prominent and decoration minimal. Avoid stock smartwatch imagery that implies a finished retail device.

| Element | MVP specification |
| --- | --- |
| Background | Pale mint `#F4FFF9` |
| Text | Dark ink `#252C3C` |
| Primary button | Dark green `#00775B` with white text |
| Accent | Bright green `#10C984`, used decoratively |
| Secondary text | `#4D596B` |
| Font | System sans serif for the first build |
| Hero headline | 56 px desktop, 36 px mobile |
| Body text | 18 px with 1.6 line height |
| Content width | Maximum 1120 px |
| Page gutters | 24 px desktop, 20 px mobile |
| Section spacing | 80 px desktop, 48 px mobile |
| Panel radius | 20 px |

Use a static page with no entrance animations. Add hover and keyboard focus states to links and buttons. Use touch targets at least 44 px high and verify contrast and 200 percent zoom.

## Build scope

Create an independent static web page in this repository. A small React and TypeScript implementation can use Header, Hero, HowItWorks, AppPreview, Prototype, and Footer components with shared CSS tokens. The site does not need Bluetooth access or native app dependencies.

Keep the first release free of checkout, pricing, accounts, live sensor integration, analytics infrastructure, testimonials, a separate research page, and an AI coach section. Add these only when they support a validated next step. The HorsiSense paper's results do not support HabitBuster claims.

The required assets are one real wearable photograph, one dashboard screenshot, and a verified contact destination. A demonstration video is optional for the first version. Labeled placeholders may be used in a review preview, but replace them before public release.

## Definition of done

- The hero explains the wearable, app, and motion matching behavior.
- The three steps make the calibration requirement clear.
- Images accurately represent the current prototype and label demo data.
- All buttons work; a demo CTA reaches a verified destination when enabled.
- The page works at 320, 390, 768, and 1440 px without overflow.
- Keyboard focus, contrast, image descriptions, and video captions are checked.
- Detection limits appear visibly near the final action.
- No unsupported accuracy, medical, availability, or habit reduction claims appear.

This is the first implementation scope. The broader DESIGN.md remains the reference for later expansion.
