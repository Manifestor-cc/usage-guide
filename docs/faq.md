---
sidebar_position: 2
pagination_next: null
sidebar_class_name: hidden
---

# Frequently Asked Questions

## General
<details>
<summary>What's SteamTools?</summary>

It's a tool developed by chinese hackers used for injecting Lua & Manifest files into Steam.

</details>

<details>
<summary>Can my Steam account get banned?</summary>

No. The games you add with SteamTools are fully client-side, and are not visible to Steam servers.

</details>

<details>
<summary>Does Steam Cloud work?</summary>

Yes, but it doesn't use the official Steam servers (as far as we know)

</details>

<details>
<summary>Can I play multiplayer games?</summary>

Yes, but you need to install an online fix. [More info](/beginners_guide/playing_multiplayer_games)

</details>

<details>
<summary>How to fix the “Content Configuration Unavailable” error?</summary>

Go to `C:\Program Files (x86)\Steam\appcache` and delete the `appinfo.vdf` file.

</details>

<details>
<summary>Why is an error like this popping up when I start the game? What's Denuvo Anti-Tamper? ![](images/denuvo.png)</summary>

If you're seeing this error when launching a game, forget about playing that game for free. It means that the game has Denuvo Anti-Tamper, which doesn't have any public (universal) bypasses.

<details>
<summary>What's Denuvo Anti-Tamper?</summary>

Denuvo Anti-Tamper is a digital anti-piracy technology used in PC video games.

It's designed to make it much harder and slower for pirates/crackers like us to crack or reverse-engineer a game's executable file.

It works by encrypting and obfuscating parts of the game's code, acting as a protective layer around the game's existing Digital Rights Management (DRM) system (like Steam's or Origin's).
</details>

</details>

<details>
<summary>Why are the games I add with SteamTools not appearing in my library?</summary>

This is a common issue and there are two possible solutions for it.


## Solution 1
Use a VPN like [ProtonVPN](<https://protonvpn.com/>)

## Solution 2

It may also happen if Steam decides to switch you to the Beta version of the client (this is really rare though). Run this command in your terminal to switch back to the Stable version of Steam:

```powershell
Start-Process -FilePath (Join-Path ((Get-ItemProperty "HKLM:\SOFTWARE\WOW6432Node\Valve\Steam").InstallPath) "Steam.exe") -ArgumentList "-clearbeta"
```

</details>

## Generator (Manifestor.cc)

<details>
<summary>Why are there no .manifest files? Why is it just a single .lua file?</summary>

This is completely normal, it's supposed to be like that. Just import that one single .lua file into SteamTools.

</details>

<details>
<summary>What does `DRM/Restrictions detected` mean?</summary>

One of the following is present in the game:
- 3rd-party DRM (Like Denuvo Anti-Tamper)
- 3rd-party account (Like EA)
- Kernel level anti-cheat

BUT some games might have a bypass made for them. [More info](/bypasses)
</details>