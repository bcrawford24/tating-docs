---
sidebar_position: 7
title: Accessibility
description: What every Tating screen does for a screen reader, and how to get around Tating with TalkBack.
---

# Accessibility

Tating is checked for screen-reader support on every build. This page says what those checks hold, and how to get around the app with **TalkBack** on Android.

## What every screen does

These are checked automatically on every screen and every sheet, and a build fails if any of them stops being true:

- **Every control says what it does.** Not "button", not "star", not "minus sign": a written label of at least two letters or digits.
- **Every control says what kind of thing it is:** a button, a switch, a tab.
- **Every switch reports whether it's on.** A muted drum in the play-along row announces differently from a sounding one.
- **Text grows with your phone's text size,** up to 1.3×. The symbols inside the notation cells are sized to the cell and stay put.
- **Nothing is smaller than 44 points to touch** without extra touch area around it.

## Getting around with TalkBack

### Turning it on

**Settings → Accessibility → TalkBack**, then the switch.

:::tip Set up the shortcut first
Android can turn TalkBack on and off when you hold both volume keys for three seconds. Set that up before you start; it's the fastest way out.
:::

### The four gestures you need

| Gesture | What it does |
| --- | --- |
| Swipe right / left | Move to the next / previous control, and read it out |
| Double-tap anywhere | Activate whatever was last read out |
| Two-finger swipe | Scroll |
| Swipe down then right | Open TalkBack's own menu (the way out, if you're lost) |

You don't tap what you want any more. You move to it, hear it, then double-tap.

### What you'll hear

Every control announces three things, in this order: **what it's for**, **what kind of control it is**, and **what state it's in**, if it has one.

> "Add a bar, copying the last one. Button."
>
> "Kick sounding. Switch. Off."
>
> "Sort by tempo. Button. Selected."
>
> "Edit. Tab. Selected."

## If something doesn't read right

If a control reads as a symbol or a shape, or says nothing at all, write to **[tatingapp@gmail.com](mailto:tatingapp@gmail.com)** with the screen you were on and what you heard.
