# Second Brain

A personal knowledge management vault built on the [PARA method](https://fortelabs.com/blog/para/) (Projects, Areas, Resources, Archive), managed in [Obsidian](https://obsidian.md) and versioned with Git.

---

## Structure

```
Second-brain/
├── 00-Inbox/          # Quick capture — process regularly
├── 01-Projects/       # Active work with a clear outcome and deadline
├── 02-Areas/          # Ongoing responsibilities (no end date)
├── 03-Resources/      # Reference material and guides
├── 04-Archive/        # Completed, paused, or inactive items
├── 05-Templates/      # Note templates (used by Templater plugin)
├── 06-Daily-Notes/    # Daily notes (auto-created by Obsidian)
├── 07-MOCs/           # Maps of Content — index notes for navigation
└── Home.md            # Dashboard entry point
```

### PARA at a Glance

| Folder | Question to ask |
|---|---|
| **Projects** | Does this have a deadline and a specific outcome? |
| **Areas** | Is this an ongoing responsibility I maintain? |
| **Resources** | Might I want to reference this in the future? |
| **Archive** | Is this inactive, complete, or no longer relevant? |

---

## Getting Started

1. **Open this folder as an Obsidian vault** — File → Open Folder as Vault
2. **Install community plugins** — Settings → Community Plugins → Browse:
   - **Templater** — dynamic templates with dates, titles, prompts
   - **Dataview** — query notes like a database
   - **Calendar** — visual navigator for daily notes
   - **Periodic Notes** — weekly and monthly reviews
   - **Tasks** — track tasks across all notes
   - **Obsidian Git** — auto-sync vault to this repository
3. **Start from [[Home]]** — use it as your daily dashboard
4. **Capture everything in [[00-Inbox/Inbox]]** — process it later

---

## Daily Workflow

1. Open today's daily note from the Home dashboard
2. Dump anything new into the Inbox
3. Process the Inbox: move items to Projects, Areas, or Resources
4. Work from your Projects list
5. Move completed projects to Archive

---

## Focus Areas

- **Healthcare IoT** — device integration, protocols (Z-Wave, Zigbee), remote patient monitoring
- **SmartThings Development** — Device Handlers, SmartApps, IDE, platform APIs

---

## Git Sync

This vault is version-controlled. To sync manually:

```bash
git add .
git commit -m "vault: <short description>"
git push
```

Or install the **Obsidian Git** plugin to auto-commit on a schedule.
