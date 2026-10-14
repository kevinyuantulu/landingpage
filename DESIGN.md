# HabitBuster Landing Page Design Document

## Purpose and recommended direction

Build a responsive product landing page that explains HabitBuster in one glance: a wrist worn motion sensor paired with a phone app that detects motions matching a calibrated habit and provides a reminder. Lead with awareness and personal control. Show the actual prototype and app so visitors understand what they would use.

The first release should introduce the prototype and invite visitors to request a demo. Checkout, pricing, shipping promises, and app store download buttons should follow only when those offerings are available. This document specifies the page, copy, visual direction, interactions, implementation, and release criteria; it does not authorize publishing or collecting visitor information.

## Product foundation

Use **HabitBuster** as the public product name, matching the mobile app. The device currently advertises over Bluetooth as **FaceDefense**. Explain that name in setup material if needed; avoid presenting two competing brands in the hero.

The supplied project implements an Adafruit QT Py ESP32-S3 wearable with an LSM6DSOX motion sensor and a React Native companion app. Detection combines gyroscope motion with an optional accelerometer derived wrist orientation gate. Calibration records resting movement and the chosen gesture, then sends a threshold profile to the wearable. This is personalized motion matching, rather than proof that a specific action occurred.

Current features suitable for the page are Bluetooth connection, guided calibration, one active detection profile, on-device detection, a red watch indicator, phone vibration, optional phone sound, silent tracking, live readings, and saved detection counts with a weekly view. The app also offers curated habit coaching suggestions that adapt to user ratings locally.

Phone logging depends on receiving Bluetooth events. Disconnected events are not guaranteed to be recovered. Background notifications depend on operating system execution and permissions. Do not equate on-device detection with uninterrupted phone history or guaranteed background alerts.

## Audience and goals

The primary audience is people who want to become more aware of repetitive hand motions, especially during studying, working, or distracted moments. Nose picking is the initial example supplied by the product owner. Present it plainly and respectfully, alongside neutral hand-to-face illustrations. Other examples such as nail biting should be described as possible calibration targets until tested for that behavior.

The primary visitor journey is understand the product, see how calibration and reminders work, inspect the prototype, then request a demo. Secondary journeys are exploring the app and reading practical limitations.

Success means visitors can explain the wearable plus app relationship, understand that calibration is required, and recognize that a detection is a motion match. Measure demo requests only after a real request channel is configured. Establish conversion targets after observing baseline traffic rather than inventing a benchmark.

## Positioning and copy

**Core message:** HabitBuster helps you notice repetitive motions as they happen, giving you a moment to pause and choose your next action.

**Hero eyebrow:** Wearable sensor + companion app

**Hero headline:** Notice the habit. Choose your next move.

**Hero description:** HabitBuster learns a motion you calibrate, such as a nose-picking gesture, and alerts you when similar wrist movement is detected. Connect the wearable to your phone to review detections and adjust your reminders.

**Primary button:** Request a demo

**Secondary button:** See how it works

**Small status line:** A working prototype for personalized habit awareness.

Keep copy supportive and concrete. Use “detections” or “motion matches” for counts, rather than “confirmed nose picks.” Avoid promises to eliminate habits, prevent illness, or deliver a specific accuracy or response time without relevant validation. Do not describe the local coach as a generative therapist or claim that it identifies emotional triggers.

## Page structure

### Header

Show a simple shield mark and HabitBuster wordmark. Navigation links are How it works, The app, Prototype, and FAQ, followed by Request a demo. Use a compact sticky header with a solid background and visible keyboard focus. On small screens, show the wordmark and primary button; put section links in an accessible expandable menu only if space requires it.

### Hero

Use a two column layout. The left contains the headline, short description, buttons, and prototype status. The right shows a real wrist photo with the sensor, plus a phone screenshot of the dashboard. A small annotation connects the two: “Motion detected → reminder → review in the app.”

The hardware must look like the actual prototype. Do not substitute a polished smartwatch rendering that implies a finished enclosure. If photographs are unavailable, use a clearly labeled prototype illustration and an authentic app screenshot. Show both devices above the fold on desktop; on mobile, follow the buttons with the image.

### Why awareness helps

Headline: “Some motions happen before you notice.” Explain the intended situation in two sentences: a repeated hand movement can be easy to overlook while focused on another activity; HabitBuster provides a cue when movement matches the user's calibration. Do not add prevalence statistics or medical explanations without appropriate sources.

### How it works

Present four numbered steps in a horizontal sequence on desktop and a vertical sequence on mobile:

1. **Connect your wearable.** Open the app and find the Bluetooth device.
2. **Calibrate a motion.** Record a resting position and the gesture you want to notice.
3. **Choose your reminders.** Use the watch indicator, phone vibration, or optional sound; silent tracking mutes foreground alerts.
4. **Review detections.** See received events in the app and recalibrate when needed.

Below the steps, show a short real demonstration with a poster image, captions, and user initiated playback. The demonstration should include calibration and an ordinary movement that does not trigger, as well as a detected motion. Avoid autoplay audio.

### The companion app

Use three authentic screenshot panels: calibration, live monitoring, and the dashboard. Pair each with one sentence explaining the user benefit. Label staged screenshots “Demo data” visibly. Do not fabricate declining counts to imply proven behavior improvement.

Add a compact reminder controls row covering vibration, optional sound, and silent tracking. Explain passive notifications in the FAQ because they have separate behavior and reliability limits. If the coach is included, call it “Small steps to try” and describe curated suggestions that adapt to ratings; keep it secondary to detection.

### The prototype

Show a close photograph of the board, sensor, and actual mounting arrangement. Provide a concise diagram: wrist motion → sensor → on-device motion matching → watch indicator, with Bluetooth linking the wearable to phone alerts and records.

Technical details belong in an expandable “Inside the prototype” area: ESP32-S3, motion sensor, Bluetooth Low Energy, and personalized calibration. Do not promise battery life, waterproofing, comfort over long periods, enclosure dimensions, or retail availability until measured and confirmed.

### Evidence and limitations

Use the heading “What the prototype does today.” Explain that it flags motion matching a calibrated profile; similar everyday movements can produce false alerts and some target gestures can be missed. Wearing position and calibration matter. Phone recording requires a working connection and app execution.

Do not show a research badge, accuracy chart, testimonials, or partner logos without applicable evidence and permission. Once habit-specific testing exists, add results with participant count, tested gestures, false positives, missed events, conditions, and study limitations.

### FAQ

Include these concise answers:

- **Does it know I am picking my nose?** It detects wrist motion matching your calibration. It cannot independently verify the action.
- **Can I calibrate another habit?** The app supports named behavior profiles and monitors one active profile at a time. Suitability and accuracy depend on the gesture and need testing.
- **Where does the alert happen?** The wearable has a visual indicator. The connected phone can vibrate and optionally play sound. Do not imply that the current wearable itself vibrates.
- **Will it work with my phone locked?** Passive notifications may work when permissions and the operating system allow background Bluetooth processing. Continuous delivery is not guaranteed.
- **Can I track without reminders?** Silent tracking mutes foreground vibration, sound, and the watch alert light. Passive background notifications are a separate setting.
- **Where are my records stored?** The current app stores profiles, received event history, and coach ratings locally. Publish a reviewed privacy statement before making broader privacy claims.
- **Can I buy it now?** Present it as a prototype and offer a demo request until availability is confirmed.

### Closing action and footer

Headline: “See HabitBuster in action.” Repeat Request a demo with one short sentence explaining what the visitor can expect. The footer includes product name, a verified contact channel, and privacy information when data collection is enabled. Add a relevant research link only after a HabitBuster paper is provided and approved for public sharing.

## Visual system

Continue the app's mint and green identity, with warm photography and plenty of whitespace. Aim for approachable consumer hardware rather than a clinical dashboard. Use a calm off-white page, dark headings, green buttons, pale mint surfaces, and blue for supporting diagrams. Avoid alarm red as a general brand color; reserve it for illustrating an actual alert state.

| Token | Proposed value | Use |
| --- | --- | --- |
| Page background | `#F4FFF9` | Existing app background |
| Surface | `#FFFFFF` | Screenshot and feature panels |
| Primary action | `#00775B` | Buttons with white text |
| Brand accent | `#10C984` | Decorative highlights and chart bars |
| Heading text | `#252C3C` | Headlines and body text |
| Secondary text | `#4D596B` | Descriptions with stronger contrast than app gray |
| Supporting tint | `#F2F9FF` | Diagram backgrounds |
| Borders | `#A6F2CF` | Light decorative divisions |

Use a locally hosted sans serif such as Inter, subject to license verification, with system font fallback. Desktop hero type is approximately 56–64 px; mobile 36–40 px; section headings 30–36 px; body 18 px with about 1.6 line height. Keep body lines around 60–70 characters. Use a 1200 px content maximum, 24 px desktop gutters, 20 px mobile gutters, and 80–96 px desktop section spacing, reduced to 48–64 px on mobile. Use 16–24 px panel radii and restrained shadows around devices.

Decorative motion is optional: a subtle sensor-to-phone pulse may demonstrate the relationship. Never animate detection counters as though they were live measurements. Respect reduced motion preferences and keep all essential information visible without animation.

## Responsive and interaction behavior

Use one column below approximately 768 px and two hero columns above approximately 1024 px; let content determine intermediate layouts. Ensure readable screenshots at 320 px width. Tables or technical diagrams must stack or fit without horizontal page overflow.

Section buttons scroll to anchors and account for the sticky header. FAQ controls use native details and summary elements or equivalent accessible buttons. The video includes playback controls and captions. All interaction works with keyboard input and touch; targets should be at least 44 px high. Test color contrast, visible focus, heading order, descriptive image text, and zoom at 200 percent.

The primary CTA should open a configured demo request form or verified contact link. Until that destination exists, use “Explore the prototype” linking to the prototype section in preview builds. Never show a functioning-looking submission that silently discards information.

If a form is chosen, require only email; name and a short message are optional. Show submitting, success, validation, and retry states. Preserve entered values after failure. Explain the purpose of collection next to the form and separate optional marketing consent from the request. Keep visitor emails and free-text messages out of analytics events.

## Implementation plan

Build the landing page as an independent web project in this repository. The React Native code is the product reference; reuse its palette and approved visuals rather than importing native Bluetooth modules into the website.

A small React and TypeScript site with a static build is sufficient for the proposed page. Suggested components are Header, Hero, HowItWorks, AppPreview, Prototype, Evidence, FAQ, DemoRequest, and Footer. Keep editable copy and feature descriptions in a content file, visual tokens in CSS variables, and media under a dedicated assets directory. Select package versions and the hosting integration during implementation after checking current documentation.

The website does not need to connect to the wearable, request Bluetooth permission, or access app history. A browser demonstration, if added later, should be labeled as illustrative and isolated from the conversion flow.

Compress product photos, provide responsive image sizes, reserve image dimensions to avoid layout shift, and lazy load below-fold media. Load video only after visitor interaction. Keep the initial page light enough to target LCP under 2.5 seconds, CLS under 0.1, and INP under 200 milliseconds, then verify with actual measurements. Add a descriptive page title, description, favicon, and social sharing image using actual product assets.

For a demo form, use a server endpoint or approved form provider with server-side validation, rate limiting, a honeypot, and defined retention. Provider credentials stay on the server. Hosting, form provider, recipient, and privacy copy are release decisions rather than assumptions.

Optional analytics events are hero CTA click, how-it-works click, demo playback, form start, and confirmed form success. Use aggregate data to identify confusion or friction; avoid recording sensitive habit descriptions.

## Assets and delivery stages

First, confirm the public product name and CTA destination, photograph the real prototype on a wrist, capture the three app screens, and record a short captioned demonstration. Identify which screenshots contain real or staged data. Secure permission for identifiable people in photographs.

Second, build the responsive page using approved copy and labeled placeholders only in preview. Review the hero and demonstration together to ensure that the portrayed device, alert mechanism, and workflow match the current product.

Third, connect the verified request channel, finalize privacy information, and check mobile layout, keyboard use, media playback, form delivery, failure handling, performance, and social previews. Publishing is a separate release step.

Defer checkout, a pricing table, habit success scores, gamified claims, live device integration, and a long research section from the initial release. They add complexity without helping a visitor understand the current prototype.

## Acceptance criteria

- A first-time visitor can identify the wearable, app, calibration step, and reminder mechanism from the hero and first explanatory section.
- All public claims match implemented behavior or are explicitly labeled as proposed capabilities.
- Hardware visuals depict the prototype accurately; staged app data is labeled.
- The page never represents a detection count as a verified action count or demonstrated habit reduction.
- Layout works at 320, 390, 768, 1024, and 1440 px, with no clipped copy or page overflow.
- Navigation, FAQ, video, and form work with keyboard controls and visible focus.
- Demo requests reach the configured destination, and failed requests show a recoverable error.
- Background, Bluetooth, and false detection limits are easy to find.
- Performance and accessibility checks pass before publication; no unsupported study results, empty download links, or unconfigured submissions remain.

## Source notes and decisions to resolve

Product behavior is grounded in `HabitBusterReactNative/README.md`, `firmware/README.md`, `firmware/code.py`, `src/models/behaviorProfile.ts`, `src/services/calibration.ts`, `src/services/alertService.ts`, `src/services/habitCoach.ts`, `src/state/appController.ts`, `src/screens/DashboardScreen.tsx`, and `src/theme.ts`.

The attached `2314 Crystal Research Paper Completed.docx` describes **HorsiSense**, equine movement monitoring using a Particle Boron, IMU, and GPS. Its orientation error, Bluetooth delivery results, veterinary comparisons, and citations do not validate HabitBuster. Exclude those results from this page. The document's outline and instructions are source material, not requirements for the landing page design.

Before implementation, resolve the final brand name, demo request destination, current device photographs, distribution status, and whether a relevant HabitBuster research paper is available. Before making performance claims, define and run habit-specific validation. None of these prevents building a reviewable page with accurate prototype language and labeled assets.
