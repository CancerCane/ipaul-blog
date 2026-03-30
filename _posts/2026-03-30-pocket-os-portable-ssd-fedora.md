---
layout: post
title: "Building a Pocket OS: My Portable Fedora Dev Environment on an External SSD"
date: 2026-03-30
author: L. Cane Paul
categories: [Tech, Linux]
excerpt: "How I built a fully encrypted, portable Fedora 43 development environment on an external SSD — complete with dual desktops, Python toolchains, AI IDEs, and Windows gaming via Wine."
---

I got tired of dual-booting. The constant rebooting, the risk of one OS clobbering the other's bootloader, the wasted disk space — all of it. So I took a different approach: I built a full Linux development environment on a portable SSD that I can plug into *any* UEFI machine and boot from.

Here's how it went.

## The Hardware

- **Portable SSD**: ~1TB external drive
- **Host machine**: 32GB RAM (though the SSD works on any UEFI computer)

That's it. One SSD, one Fedora Live USB to install from, and a couple hours of setup time.

## The Install

I booted from a Fedora 43 Live USB with the portable SSD plugged in. The critical step during the Anaconda installer: **select only the external SSD as the install target**. Deselect your internal drive. This keeps your Windows bootloader untouched.

### Partition layout

I set up three partitions on the SSD:

- **600 MB** — EFI System Partition (FAT32, mounted at `/boot/efi`)
- **2 GB** — Boot partition (ext4, `/boot`)
- **951 GB** — LUKS-encrypted root (everything else)

Having its own EFI partition is what makes the SSD truly portable. It doesn't depend on any host machine's bootloader. Plug it in, hit F12 at POST, select the SSD, and you're in.

The LUKS encryption was a no-brainer — this drive goes everywhere with me, and losing an unencrypted portable OS would be a nightmare.

## Dual Desktops: GNOME + KDE Plasma

Fedora ships with GNOME, but I'm a KDE person. Rather than picking one, I installed both:

```bash
sudo dnf group install kde-desktop
```

The trick to avoiding the classic GNOME/KDE conflict: **keep GDM as the display manager**. Don't switch to SDDM. GDM handles session switching just fine — there's a gear icon at the login screen where you pick GNOME or Plasma.

Has it been completely problem-free? Mostly. There are occasional theme bleed-throughs between the two, and some KDE apps look slightly off in GNOME and vice versa. But it's a worthwhile tradeoff for having both available.

## The Dev Environment

### Python: pyenv + Conda

I use **pyenv** for managing Python versions. The system Python on Fedora 43 is 3.14 (bleeding edge), but most of my projects target 3.10, so:

```bash
curl -fsSL https://pyenv.run | bash
pyenv install 3.10.12
pyenv global 3.10.12
```

This required the full build toolchain (`gcc`, `make`, `openssl-devel`, `readline-devel`, etc.) which I installed first.

For environment management, I also run **Miniconda** alongside pyenv with `auto_activate_base` set to `false` so they don't step on each other. I have a `math-tutor` conda environment with Python 3.11 for a specific project.

I also installed **detect-secrets** globally via pip — essential for keeping API keys out of commits.

### Node.js: nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
nvm install --lts
```

Node v24.14.1 LTS with npm 11.11.0. Clean and version-managed.

### The IDE Situation

I'm running **Google Antigravity** — Google's new AI-powered IDE that's free during public preview. It's built on VS Code but redesigned around autonomous AI agents powered by Gemini 3. Install on Fedora is just adding the RPM repo and `dnf install antigravity`.

I'm also using **WARP** as my terminal — because of course I am. If you've read my other posts, you know it's the only tool in my warchest. Having it on this portable setup was non-negotiable.

## Gaming on Linux

This was a non-negotiable. I have Windows games I'm not giving up. The stack:

- **Wine 11.0 Staging** — the backbone. Installed via Fedora's repos.
- **Lutris** — game launcher and manager that handles Wine prefix management.
- **Bottles** (Flatpak) — a more polished Wine frontend, great for non-Steam games.
- **Steam** (Flatpak) — with Proton for native-feeling Windows game support.

Between Proton (Steam's Wine fork) and Lutris, I've had good compatibility with most of my library. The Flatpak versions sandbox everything cleanly.

## Quality of Life

A few things that make this actually livable as a daily driver:

**Flatpak apps** (Flathub unfiltered):
- **Flatseal** — manage Flatpak permissions. Essential.
- **VLC** — media player
- **OBS Studio** — screen recording
- **Discord** — communication

**CLI tools**: `ripgrep`, `bat`, `fd-find`, `jq`, `htop`, `tmux` — the usual suspects that make the terminal actually pleasant.

**SSD health**: `fstrim.timer` enabled for periodic TRIM operations. Important for SSD longevity, especially on a portable drive that gets a lot of use.

## The Result

I now have a complete, encrypted development environment in my pocket. I can:

- Plug it into any UEFI machine and boot in seconds
- Switch between GNOME and KDE Plasma at login
- Develop in Python (multiple versions), Node.js, or whatever else
- Play my Windows game library via Wine/Proton
- Never touch a host machine's internal drives

The total disk usage after everything is about 15GB out of 940GB available. Plenty of room to grow.

## Tips If You're Doing This

1. **Always install the EFI partition on the external SSD** — this is what makes it portable.
2. **Use LUKS encryption** — a portable OS is a portable security risk.
3. **Keep GDM if you're dual-desktop** — switching to SDDM with GNOME still installed causes headaches.
4. **Enable fstrim.timer** — your SSD will thank you.
5. **Disable Windows Fast Boot** (`powercfg /h off`) if you can't reach your BIOS — Windows Fast Boot often prevents the POST key press from registering.

No more dual booting. No more partition juggling. Just one SSD and liftoff.

---

*Built with WARP and an unhealthy amount of `sudo dnf install`.*

*— L. Cane Paul*
